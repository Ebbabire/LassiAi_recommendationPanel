import { FileText } from "lucide-react";
import type { CaseData } from "@/types";

import RecommendationsSidebar from "./RecommendationSidebar";
import { RecommendationCard } from "./RecommendationCard";

interface RecommendationsPanelProps {
  data: CaseData;
}

export const RecommendationsPanel = ({ data }: RecommendationsPanelProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      {/* Header / Meta */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <FileText className="w-5 h-5 text-slate-400" />
            Clinical Review
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Patient:{" "}
            <span className="font-medium text-slate-700">
              {data.patientName}
            </span>{" "}
            (ID: {data.patientId}) | DOB: {data.dob}
          </p>
        </div>
        <div className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded">
          Last Updated: {data.lastUpdated}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row grow divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Main Content Area (Summary + Recommendations) */}
        <div className="grow flex flex-col p-0 lg:w-2/3">
          {/* Section 1: Case Summary */}
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Case Summary
            </h3>
            <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed">
              <p>{data.summary}</p>
            </div>
          </div>

          {/* Section 2: Recommendations List */}
          <div className="grow bg-white">
            <div className="bg-slate-50/50 px-6 py-3 border-b border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Recommendations
              </h3>
            </div>

            <ul className="divide-y divide-slate-100">
              {data.recommendations.map((rec) => (
                <RecommendationCard key={rec.id} rec={rec} />
              ))}

              {data.recommendations.length === 0 && (
                <li className="p-8 text-center text-slate-400 text-sm">
                  No active recommendations.
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Sidebar Area (Flags) */}
        <RecommendationsSidebar data={data} />
      </div>
    </div>
  );
};
