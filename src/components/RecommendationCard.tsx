import type { Recommendation } from "@/types";
import { Stethoscope } from "lucide-react";

export const RecommendationCard = ({ rec }: { rec: Recommendation }) => {
  return (
    <li className="p-6 hover:bg-slate-50 transition-colors group">
      <div className="flex items-start gap-4">
        <div className="mt-1 p-2 bg-slate-100 rounded-md group-hover:bg-white border border-slate-100 group-hover:border-slate-200 transition-colors">
          <Stethoscope className="w-4 h-4 text-slate-500" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-semibold text-slate-900">
              {rec.title}
            </h4>
          </div>
          <p className="text-sm text-slate-600 mt-1">{rec.description}</p>
        </div>
      </div>
    </li>
  );
};
