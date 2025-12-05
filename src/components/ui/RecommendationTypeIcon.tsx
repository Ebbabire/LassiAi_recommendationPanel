import type { RecommendationType } from "@/types";
import {
  Activity,
  CheckCircle2,
  Pill,
  Stethoscope,
  UserCog,
} from "lucide-react";

export const RecommendationTypeIcon = ({
  type,
}: {
  type: RecommendationType;
}) => {
  switch (type) {
    case "medication":
      return <Pill className="w-4 h-4 text-slate-500" />;
    case "diagnostic":
      return <Activity className="w-4 h-4 text-slate-500" />;
    case "referral":
      return <Stethoscope className="w-4 h-4 text-slate-500" />;
    case "lifestyle":
      return <UserCog className="w-4 h-4 text-slate-500" />;
    default:
      return <CheckCircle2 className="w-4 h-4 text-slate-500" />;
  }
};
