import type { CaseData } from "./types";

// Mock Data for the clinical scenario
export const MOCK_DATA: CaseData = {
  patientId: "MRN-84920",
  patientName: "John H. Doe",
  dob: "1978-04-12",
  lastUpdated: "2023-10-27 09:15 AM",
  summary:
    "The patient is a 45-year-old male presenting with persistent hypertension despite current lisinopril therapy (10mg daily). Recent labs indicate elevated LDL cholesterol (160 mg/dL) and borderline HbA1c (5.8%). Patient reports occasional chest tightness during exertion but denies resting angina. BMI is 31.2. Family history is significant for early-onset CAD in father.",
  recommendations: [
    {
      id: "rec-1",
      title: "Adjust Antihypertensive Therapy",
      description:
        "Increase Lisinopril to 20mg daily and monitor BP at home twice daily for 2 weeks.",
    },
    {
      id: "rec-2",
      title: "Lipid Panel Management",
      description:
        "Initiate Atorvastatin 20mg daily due to elevated LDL and risk factors.",
    },
    {
      id: "rec-3",
      title: "Cardiology Referral",
      description:
        "Refer for stress testing (echocardiogram) to rule out exercise-induced ischemia.",
    },
    {
      id: "rec-4",
      title: "Lifestyle Modification - Diet",
      description:
        "Refer to registered dietitian for DASH diet implementation and weight management.",
    },
  ],
  flags: [
    {
      id: "flag-1",
      label: "Drug Interaction Alert: Potential Hyperkalemia",
      severity: "medium",
      note: "Monitor Potassium levels if adding K+ sparing diuretics or supplements alongside ACE inhibitors.",
    },
    {
      id: "flag-2",
      label: "High BMI (31.2)",
      severity: "low",
      note: "Class 1 Obesity",
    },
    {
      id: "flag-3",
      label: "Critical BP Reading History",
      severity: "high",
      note: "Patient recorded 180/110 mmHg on 10/15/2023. Needs immediate verify.",
    },
  ],
};
