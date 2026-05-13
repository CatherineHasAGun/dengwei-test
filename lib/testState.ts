import type {
  DimensionKey,
  NormalizedDimensionScores,
  ResultAffinity,
  ResultTypeId,
} from "./questions";
import type { Answer } from "./scoring";

export const TEST_STATE_STORAGE_KEY = "dengwei-test-state-v1";

export type StoredResult = {
  totalScore: number;
  dimensions: NormalizedDimensionScores;
  socialDesirabilityIndex?: number;
  dominantDimension: DimensionKey;
  dominantAffinity?: ResultTypeId;
  affinityScores?: ResultAffinity;
  highDimensionCount?: number;
  resultType: ResultTypeId;
};

export type TestState = {
  currentQuestionIndex: number;
  answers: Answer[];
  result?: StoredResult;
};

export const initialTestState: TestState = {
  currentQuestionIndex: 0,
  answers: [],
};

function isStoredAnswer(value: unknown): value is Answer {
  if (!value || typeof value !== "object") return false;

  const answer = value as Partial<Answer>;

  return (
    typeof answer.questionId === "number" &&
    typeof answer.optionId === "string"
  );
}

export function clampQuestionIndex(index: number, totalQuestions: number) {
  return Math.min(Math.max(index, 0), totalQuestions - 1);
}

export function parseTestState(
  storedValue: string | null,
  totalQuestions: number,
): TestState {
  if (!storedValue) return initialTestState;

  try {
    const parsedState = JSON.parse(storedValue) as Partial<TestState>;

    return {
      answers: Array.isArray(parsedState.answers)
        ? parsedState.answers.filter(isStoredAnswer)
        : [],
      currentQuestionIndex: clampQuestionIndex(
        Number(parsedState.currentQuestionIndex) || 0,
        totalQuestions,
      ),
      result: parsedState.result,
    };
  } catch {
    return initialTestState;
  }
}

export function getAnswerForQuestion(
  answers: Answer[],
  questionId: number,
): Answer | undefined {
  return answers.find((answer) => answer.questionId === questionId);
}

export function upsertAnswer(
  answers: Answer[],
  nextAnswer: Answer,
): Answer[] {
  const existingIndex = answers.findIndex(
    (answer) => answer.questionId === nextAnswer.questionId,
  );

  if (existingIndex === -1) {
    return [...answers, nextAnswer];
  }

  return answers.map((answer, index) =>
    index === existingIndex ? nextAnswer : answer,
  );
}

export function hasCompletedTest(answers: Answer[], totalQuestions: number) {
  return answers.length === totalQuestions;
}
