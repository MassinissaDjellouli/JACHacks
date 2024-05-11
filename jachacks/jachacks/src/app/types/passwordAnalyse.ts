export enum PasswordAnalyseState {
  NotAnalyzed = 0,
  Analyzing = 1,
  Analyzed = 2
}

export interface PasswordAnalysis {
  gptDegreeOfDanger: number;
  gptRecommandation: string;
  hasRockYouMatch: boolean;
}
