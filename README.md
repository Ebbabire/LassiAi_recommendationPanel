# Clinical Recommendations Panel

A clean, clinical UI component built with React and Tailwind CSS. It is designed to display patient case summaries, prioritized medical recommendations, and severity-based clinical flags.

## Features

- **Case Summary**: High-level patient overview.
- **Recommendations**: Categorized action items (Medication, Diagnostic, Referral, Lifestyle) with rationales.
- **Clinical Flags**: Critical alerts ranked by severity (High, Medium, Low).
- **Responsive Design**: Adapts to tablet and desktop clinical workstations.

## Usage

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `App.tsx`: Main application entry point containing the mock clinical data.
- `components/RecommendationsPanel.tsx`: The primary dashboard component.
- `types.ts`: TypeScript definitions for the clinical data models (`CaseData`, `Recommendation`, `Flag`).

## Technologies

- **React**: UI Library
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Iconography
