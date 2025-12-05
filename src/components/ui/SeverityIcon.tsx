import type { Severity } from "@/types";
import { AlertTriangle, Info } from "lucide-react";

export const SeverityIcon = ({ severity }: { severity: Severity }) => {
  switch (severity) {
    case "high":
      return <AlertTriangle className="w-4 h-4 text-red-600" />;
    case "medium":
      return <Info className="w-4 h-4 text-amber-600" />;
    case "low":
      return <Info className="w-4 h-4 text-blue-600" />;
    default:
      return <Info className="w-4 h-4 text-gray-400" />;
  }
};
