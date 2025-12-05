import { RecommendationsPanel } from "./components/RecommendationPanel";
import { MOCK_DATA } from "./constants";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            Physician Workstation
          </h1>
        </div>

        {/* Render the requested component */}
        <RecommendationsPanel data={MOCK_DATA} />

        <footer className="mt-12 text-center text-slate-400 text-sm">
          <p>Recommendation Panel</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
