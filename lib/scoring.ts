import {
  DIMENSION_KEYS,
  RESULT_TYPE_IDS,
  type DimensionKey,
  type DimensionScores,
  type NormalizedDimensionScores,
  type Option,
  type Question,
  type ResultAffinity,
  type ResultTypeId,
  questions,
} from "./questions";
import {
  improvementByDimension,
  resultTypes,
  type DimensionImprovement,
  type ResultType,
} from "./results";

export type Answer = {
  questionId: number;
  optionId: string;
};

export type TestResult = {
  totalScore: number;
  dimensions: NormalizedDimensionScores;
  rawDimensions: DimensionScores;
  socialDesirabilityIndex: number;
  dominantDimension: DimensionKey;
  dominantAffinity: ResultTypeId;
  affinityScores: ResultAffinity;
  highDimensionCount: number;
  resultType: ResultTypeId;
  result: ResultType;
  improvement: DimensionImprovement;
};

const MAX_DIMENSION_OPTION_SCORE = 5;
const MAX_SOCIAL_DESIRABILITY_OPTION_SCORE = 4;
const SCORE_WEIGHTS: Record<DimensionKey, number> = {
  experiencePressure: 0.25,
  controlBoundary: 0.25,
  cognitiveRigidity: 0.2,
  empathyDeficit: 0.15,
  judgmentalSuperiority: 0.15,
};

const SCORE_BANDS = {
  freshMax: 20,
  mildMax: 40,
  moderateMax: 55,
  heavyMax: 75,
  highMax: 88,
} as const;

const emptyDimensionScores = (): DimensionScores => ({
  experiencePressure: 0,
  controlBoundary: 0,
  cognitiveRigidity: 0,
  empathyDeficit: 0,
  judgmentalSuperiority: 0,
  socialDesirability: 0,
});

const emptyAffinity = (): ResultAffinity => ({
  freshHuman: 0,
  occasionalLecturer: 0,
  experienceTeacher: 0,
  boundaryMissing: 0,
  internetFrowner: 0,
  meetingRoomElder: 0,
  forYourOwnGoodController: 0,
  ancestralElder: 0,
});

export function createEmptyDimensionScores(): DimensionScores {
  return emptyDimensionScores();
}

function getSelectedOptions(
  answers: Answer[],
  questionBank: Question[],
): Option[] {
  return answers.map((answer) => {
    const question = questionBank.find((item) => item.id === answer.questionId);
    const option = question?.options.find((item) => item.id === answer.optionId);

    if (!question || !option) {
      throw new Error(
        `Invalid answer: question ${answer.questionId}, option ${answer.optionId}`,
      );
    }

    return option;
  });
}

export function calculateRawScores(selectedOptions: Option[]): DimensionScores {
  return selectedOptions.reduce((scores, option) => {
    for (const key of DIMENSION_KEYS) {
      scores[key] += option.scores[key];
    }

    scores.socialDesirability += option.scores.socialDesirability;

    return scores;
  }, emptyDimensionScores());
}

export function calculateRawDimensionScores(
  answers: Answer[],
  questionBank: Question[] = questions,
): DimensionScores {
  return calculateRawScores(getSelectedOptions(answers, questionBank));
}

export function normalizeDimensionScores(
  rawScores: DimensionScores,
  questionCount = questions.length,
): NormalizedDimensionScores {
  const maxDimensionScore = questionCount * MAX_DIMENSION_OPTION_SCORE;

  return DIMENSION_KEYS.reduce((dimensions, key) => {
    dimensions[key] = Math.round((rawScores[key] / maxDimensionScore) * 100);
    return dimensions;
  }, {} as NormalizedDimensionScores);
}

export function calculateTotalScore(
  dimensions: NormalizedDimensionScores,
): number {
  const totalScore = DIMENSION_KEYS.reduce(
    (score, key) => score + dimensions[key] * SCORE_WEIGHTS[key],
    0,
  );

  return Math.round(totalScore);
}

export function calculateSocialDesirabilityIndex(
  rawScores: DimensionScores,
  questionCount = questions.length,
): number {
  const maxScore = questionCount * MAX_SOCIAL_DESIRABILITY_OPTION_SCORE;

  return Math.round((rawScores.socialDesirability / maxScore) * 100);
}

export function calculateAffinityScores(
  selectedOptions: Option[],
): ResultAffinity {
  return selectedOptions.reduce((affinityScores, option) => {
    for (const key of RESULT_TYPE_IDS) {
      affinityScores[key] += option.resultAffinity[key];
    }

    return affinityScores;
  }, emptyAffinity());
}

export function getDominantAffinity(
  affinityScores: ResultAffinity,
): ResultTypeId {
  return RESULT_TYPE_IDS.reduce((dominantKey, key) =>
    affinityScores[key] > affinityScores[dominantKey] ? key : dominantKey,
  );
}

export function getDominantDimension(
  dimensions: NormalizedDimensionScores,
): DimensionKey {
  return DIMENSION_KEYS.reduce((dominantKey, key) =>
    dimensions[key] > dimensions[dominantKey] ? key : dominantKey,
  );
}

export function getHighDimensionCount(
  dimensions: NormalizedDimensionScores,
): number {
  return DIMENSION_KEYS.filter((key) => dimensions[key] >= 70).length;
}

export function getFinalResultType(params: {
  totalScore: number;
  dimensions: NormalizedDimensionScores;
  dominantDimension: DimensionKey;
  dominantAffinity: ResultTypeId;
  highDimensionCount: number;
}): ResultTypeId {
  const {
    totalScore,
    dominantDimension,
    dominantAffinity,
  } = params;

  if (totalScore <= SCORE_BANDS.freshMax) return "freshHuman";

  if (totalScore <= SCORE_BANDS.mildMax) {
    return "occasionalLecturer";
  }

  if (totalScore <= SCORE_BANDS.moderateMax) {
    if (dominantAffinity === "experienceTeacher") return "experienceTeacher";
    if (dominantAffinity === "boundaryMissing") return "boundaryMissing";
    if (dominantAffinity === "internetFrowner") return "internetFrowner";
    if (dominantDimension === "experiencePressure") return "experienceTeacher";
    if (dominantDimension === "controlBoundary") return "boundaryMissing";
    if (dominantDimension === "cognitiveRigidity") return "internetFrowner";
    if (dominantDimension === "judgmentalSuperiority") return "internetFrowner";

    return "occasionalLecturer";
  }

  if (totalScore <= SCORE_BANDS.heavyMax) {
    if (
      dominantAffinity === "meetingRoomElder" ||
      dominantAffinity === "forYourOwnGoodController" ||
      dominantAffinity === "internetFrowner" ||
      dominantAffinity === "experienceTeacher" ||
      dominantAffinity === "boundaryMissing"
    ) {
      return dominantAffinity;
    }

    if (dominantDimension === "controlBoundary") {
      return "forYourOwnGoodController";
    }

    if (dominantDimension === "experiencePressure") return "meetingRoomElder";
    if (dominantDimension === "cognitiveRigidity") return "internetFrowner";
    if (dominantDimension === "judgmentalSuperiority") {
      return "meetingRoomElder";
    }

    return "meetingRoomElder";
  }

  if (totalScore <= SCORE_BANDS.highMax) {
    if (dominantAffinity === "meetingRoomElder") return "meetingRoomElder";

    if (dominantAffinity === "forYourOwnGoodController") {
      return "forYourOwnGoodController";
    }

    if (dominantDimension === "controlBoundary") {
      return "forYourOwnGoodController";
    }

    return "meetingRoomElder";
  }

  return "ancestralElder";
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

  const selectedOptions = getSelectedOptions(answers, questionBank);
  const rawScores = calculateRawScores(selectedOptions);
  const dimensions = normalizeDimensionScores(rawScores, questionBank.length);
  const totalScore = calculateTotalScore(dimensions);
  const socialDesirabilityIndex = calculateSocialDesirabilityIndex(
    rawScores,
    questionBank.length,
  );
  const affinityScores = calculateAffinityScores(selectedOptions);
  const dominantAffinity = getDominantAffinity(affinityScores);
  const dominantDimension = getDominantDimension(dimensions);
  const highDimensionCount = getHighDimensionCount(dimensions);
  const resultType = getFinalResultType({
    totalScore,
    dimensions,
    dominantDimension,
    dominantAffinity,
    highDimensionCount,
  });

  return {
    totalScore,
    dimensions,
    rawDimensions: rawScores,
    socialDesirabilityIndex,
    dominantDimension,
    dominantAffinity,
    affinityScores,
    highDimensionCount,
    resultType,
    result: resultTypes[resultType],
    improvement: improvementByDimension[dominantDimension],
  };
}
