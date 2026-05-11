import {
  DIMENSION_KEYS,
  type DimensionKey,
  type DimensionScores,
  type Question,
  questions,
} from "./questions";
import {
  getResultTypeId,
  improvementByDimension,
  resultTypes,
  type DimensionImprovement,
  type ResultType,
  type ResultTypeId,
} from "./results";

export type Answer = {
  questionId: number;
  optionId: string;
};

export type TestResult = {
  totalScore: number;
  dimensions: DimensionScores;
  rawDimensions: DimensionScores;
  dominantDimension: DimensionKey;
  resultType: ResultTypeId;
  result: ResultType;
  improvement: DimensionImprovement;
};

const MAX_OPTION_SCORE = 5;
const SCORE_WEIGHTS: Record<DimensionKey, number> = {
  experiencePressure: 0.25,
  controlBoundary: 0.25,
  cognitiveRigidity: 0.2,
  empathyDeficit: 0.15,
  judgmentalSuperiority: 0.15,
};

export function createEmptyDimensionScores(): DimensionScores {
  return {
    experiencePressure: 0,
    controlBoundary: 0,
    cognitiveRigidity: 0,
    empathyDeficit: 0,
    judgmentalSuperiority: 0,
  };
}

export function calculateRawDimensionScores(
  answers: Answer[],
  questionBank: Question[] = questions,
): DimensionScores {
  const rawScores = createEmptyDimensionScores();

  for (const answer of answers) {
    const question = questionBank.find((item) => item.id === answer.questionId);
    const option = question?.options.find((item) => item.id === answer.optionId);

    if (!question || !option) {
      throw new Error(
        `Invalid answer: question ${answer.questionId}, option ${answer.optionId}`,
      );
    }

    for (const key of DIMENSION_KEYS) {
      rawScores[key] += option.scores[key];
    }
  }

  return rawScores;
}

export function normalizeDimensionScores(
  rawScores: DimensionScores,
  questionCount = questions.length,
): DimensionScores {
  const maxDimensionScore = questionCount * MAX_OPTION_SCORE;
  const normalizedScores = createEmptyDimensionScores();

  for (const key of DIMENSION_KEYS) {
    normalizedScores[key] = Math.round((rawScores[key] / maxDimensionScore) * 100);
  }

  return normalizedScores;
}

export function calculateTotalScore(dimensions: DimensionScores): number {
  const totalScore = DIMENSION_KEYS.reduce(
    (score, key) => score + dimensions[key] * SCORE_WEIGHTS[key],
    0,
  );

  return Math.round(totalScore);
}

export function getDominantDimension(dimensions: DimensionScores): DimensionKey {
  return DIMENSION_KEYS.reduce((dominantKey, key) =>
    dimensions[key] > dimensions[dominantKey] ? key : dominantKey,
  );
}

export function calculateTestResult(
  answers: Answer[],
  questionBank: Question[] = questions,
): TestResult {
  if (answers.length !== questionBank.length) {
    throw new Error(
      `Expected ${questionBank.length} answers, received ${answers.length}`,
    );
  }

  const rawDimensions = calculateRawDimensionScores(answers, questionBank);
  const dimensions = normalizeDimensionScores(rawDimensions, questionBank.length);
  const totalScore = calculateTotalScore(dimensions);
  const dominantDimension = getDominantDimension(dimensions);
  const resultType = getResultTypeId(totalScore, dominantDimension);

  return {
    totalScore,
    dimensions,
    rawDimensions,
    dominantDimension,
    resultType,
    result: resultTypes[resultType],
    improvement: improvementByDimension[dominantDimension],
  };
}
