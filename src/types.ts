export type Severity = "high" | "medium" | "low";
export type RecommendationType =
  | "medication"
  | "diagnostic"
  | "lifestyle"
  | "referral";

export interface Flag {
  id: string;
  label: string;
  severity: Severity;
  note?: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
}

export interface CaseData {
  patientId: string;
  patientName: string;
  dob: string;
  lastUpdated: string;
  summary: string;
  recommendations: Recommendation[];
  flags: Flag[];
}
