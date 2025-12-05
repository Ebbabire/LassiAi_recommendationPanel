import type { Flag } from "@/types";
import { SeverityIcon } from "./ui/SeverityIcon";

export const RecommendationFlag = ({ flag }: { flag: Flag }) => {
  return (
    <div
      className={`p-4 rounded-md border text-sm shadow-sm
                    ${
                      flag.severity === "high" ? "bg-red-50 border-red-100" : ""
                    }
                    ${
                      flag.severity === "medium"
                        ? "bg-amber-50 border-amber-100"
                        : ""
                    }
                    ${
                      flag.severity === "low"
                        ? "bg-blue-50 border-blue-100"
                        : ""
                    }
                    ${
                      flag.severity === "high"
                        ? "border-l-4 border-l-red-500"
                        : ""
                    }
                    ${
                      flag.severity === "medium"
                        ? "border-l-4 border-l-amber-500"
                        : ""
                    }
                    ${
                      flag.severity === "low"
                        ? "border-l-4 border-l-blue-500"
                        : ""
                    }
                  `}
    >
      <div className="flex items-center gap-2 mb-1">
        <SeverityIcon severity={flag.severity} />
        <span
          className={`font-semibold 
                      ${flag.severity === "high" ? "text-red-800" : ""}
                      ${flag.severity === "medium" ? "text-amber-800" : ""}
                      ${flag.severity === "low" ? "text-blue-800" : ""}
                    `}
        >
          {flag.severity.charAt(0).toUpperCase() + flag.severity.slice(1)}{" "}
          Priority
        </span>
      </div>
      <p
        className={`mt-1 
                    ${
                      flag.severity === "high"
                        ? "text-red-900"
                        : "text-slate-700"
                    }
                  `}
      >
        {flag.label}
      </p>
      {flag.note && (
        <p className="mt-2 text-xs opacity-80 border-t border-black/5 pt-2">
          {flag.note}
        </p>
      )}
    </div>
  );
};
