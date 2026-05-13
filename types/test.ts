export const DIMENSION_KEYS = [
  "experiencePressure",
  "controlBoundary",
  "cognitiveRigidity",
  "empathyDeficit",
  "judgmentalSuperiority",
] as const;

export const RESULT_TYPE_IDS = [
  "freshHuman",
  "occasionalLecturer",
  "experienceTeacher",
  "boundaryMissing",
  "internetFrowner",
  "meetingRoomElder",
  "forYourOwnGoodController",
  "ancestralElder",
] as const;

export type DimensionKey = (typeof DIMENSION_KEYS)[number];

export type ResultTypeId = (typeof RESULT_TYPE_IDS)[number];

export type ResultAffinity = Record<ResultTypeId, number>;

export type NormalizedDimensionScores = Record<DimensionKey, number>;

export type DimensionScores = NormalizedDimensionScores & {
  socialDesirability: number;
};

export type Option = {
  id: string;
  text: string;
  scores: DimensionScores;
  resultAffinity: ResultAffinity;
  tags: string[];
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
};
