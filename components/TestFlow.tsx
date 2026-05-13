"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";
import { trackEvent } from "@/lib/analytics";
import { questions } from "@/lib/questions";
import {
  clampQuestionIndex,
  clearTestState,
  getAnswerForQuestion,
  hasCompletedTest,
  initialTestState,
  persistTestState,
  readTestState,
  type TestState,
  upsertAnswer,
} from "@/lib/testState";

function readStoredState(): TestState {
  return readTestState(questions.length);
}

function persistState(state: TestState) {
  persistTestState(state);
}

export function TestFlow() {
  const router = useRouter();
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [state, setState] = useState<TestState>(initialTestState);

  const question = questions[state.currentQuestionIndex];
  const selectedAnswer = getAnswerForQuestion(state.answers, question.id);

  useEffect(() => {
    const storedState = readStoredState();
    setState(storedState);
    setHydrated(true);
  }, []);

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) {
        clearTimeout(advanceTimerRef.current);
      }
    };
  }, []);

  function updateState(nextState: TestState) {
    setState(nextState);
    persistState(nextState);
  }

  function handleSelectOption(optionId: string) {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
    }

    const nextAnswers = upsertAnswer(state.answers, {
      optionId,
      questionId: question.id,
    });

    const answeredAllQuestions = hasCompletedTest(nextAnswers, questions.length);
    const nextState: TestState = {
      answers: nextAnswers,
      currentQuestionIndex: state.currentQuestionIndex,
    };

    updateState(nextState);
    trackEvent("answer_question", {
      optionId,
      questionId: question.id,
    });

    advanceTimerRef.current = setTimeout(() => {
      if (answeredAllQuestions) {
        router.push("/loading");
        return;
      }

      const nextQuestionIndex = clampQuestionIndex(
        state.currentQuestionIndex + 1,
        questions.length,
      );

      updateState({
        answers: nextAnswers,
        currentQuestionIndex: nextQuestionIndex,
      });
    }, 300);
  }

  function handlePreviousQuestion() {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
    }

    updateState({
      answers: state.answers,
      currentQuestionIndex: clampQuestionIndex(
        state.currentQuestionIndex - 1,
        questions.length,
      ),
    });
  }

  function handleRestart() {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
    }

    clearTestState();
    setState(initialTestState);
    trackEvent("click_restart");
  }

  if (!hydrated) {
    return (
      <section className="rounded-[24px] border border-white/70 bg-white/78 p-6 text-center shadow-soft">
        <p className="text-sm font-black text-ink/60">正在恢复答题进度</p>
      </section>
    );
  }

  return (
    <div className="space-y-5">
      <ProgressBar
        current={state.currentQuestionIndex + 1}
        total={questions.length}
      />
      <QuestionCard
        currentIndex={state.currentQuestionIndex}
        onSelectOption={handleSelectOption}
        question={question}
        selectedOptionId={selectedAnswer?.optionId}
        totalQuestions={questions.length}
      />
      <div className="flex gap-3">
        <Button
          className="flex-1"
          disabled={state.currentQuestionIndex === 0}
          onClick={handlePreviousQuestion}
          variant="ghost"
        >
          上一题
        </Button>
        <Button className="flex-1" onClick={handleRestart} variant="secondary">
          重新开始
        </Button>
      </div>
    </div>
  );
}
