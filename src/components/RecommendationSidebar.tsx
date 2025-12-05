import type { CaseData } from "@/types";
import { RecommendationFlag } from "./flag";

const RecommendationsSidebar = ({ data }: { data: CaseData }) => {
  return (
    <div className="lg:w-1/3 bg-slate-50/50 flex flex-col">
      <div className="p-6">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
          Clinical Flags
          <span className="bg-slate-200 text-slate-600 text-[10px] px-1.5 py-0.5 rounded-full">
            {data.flags.length}
          </span>
        </h3>

        <div className="space-y-3">
          {data.flags.map((flag) => (
            <RecommendationFlag key={flag.id} flag={flag} />
          ))}

          {data.flags.length === 0 && (
            <div className="p-4 border border-slate-200 border-dashed rounded-md text-center text-slate-400 text-sm">
              No flags raised.
            </div>
          )}
        </div>

        <div className="mt-8 p-4 bg-white border border-slate-200 rounded-md">
          <h4 className="text-xs font-semibold text-slate-500 mb-2">Legend</h4>
          <div className="space-y-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span>Immediate Action Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span>Monitor Closely</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Informational / Routine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsSidebar;
