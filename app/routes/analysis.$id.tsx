import { useParams, Link } from "react-router";
import Navbar from "~/components/Navbar";
import ProfessionalCard from "~/components/ProfessionalCard";

export const meta = () => ([
  { title: "Resume Analysis | Resumind" },
  { name: "description", content: "Get AI-powered feedback on your resume" },
]);

export default function Analysis() {
  const { id } = useParams();

  const analysisData = {
    overallScore: 78,
    sections: [
      {
        title: "Format & Structure",
        score: 85,
        feedback: "Your resume has a clean, professional structure. Good use of whitespace.",
        suggestions: ["Consider adding a professional summary section"],
      },
      {
        title: "Content Quality",
        score: 72,
        feedback: "Your work experience is well-documented with specific achievements.",
        suggestions: [
          "Add more quantifiable metrics to your achievements",
          "Use stronger action verbs to start bullet points",
        ],
      },
      {
        title: "Keywords & ATS",
        score: 80,
        feedback: "Good keyword coverage for your industry.",
        suggestions: [
          "Add more technical skills relevant to your target role",
          "Include industry-specific terminology",
        ],
      },
      {
        title: "Grammar & Spelling",
        score: 95,
        feedback: "No grammar or spelling errors detected.",
        suggestions: [],
      },
    ],
    improvementTips: [
      {
        icon: "📊",
        title: "Add Numbers & Metrics",
        description: "Replace vague descriptions with specific numbers. Instead of 'improved sales', say 'increased sales by 45%'.",
      },
      {
        icon: "🎯",
        title: "Use Action Verbs",
        description: "Start with powerful verbs like 'Led', 'Orchestrated', 'Spearheaded' instead of 'Responsible for'.",
      },
      {
        icon: "✨",
        title: "Highlight Achievements",
        description: "Focus on impact and results. Show what you accomplished, not just what you did.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-void py-10">
      <Navbar />

      {/* Background orbs */}
      <div className="orb orb-cyan w-96 h-96 -top-20 left-1/2 opacity-10"></div>
      <div className="orb orb-plasma w-72 h-72 -bottom-20 right-20 opacity-10"></div>

      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Score Header */}
        <ProfessionalCard className="mb-12 p-12 bg-gradient-to-br from-acid/5 via-graphic to-cyan/5 border-acid/20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Resume Analysis</h1>
              <p className="text-text-secondary">Detailed AI feedback for your resume</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full border-4 border-acid flex items-center justify-center bg-graphite/50">
                <span className="text-6xl font-bold text-acid">{analysisData.overallScore}</span>
              </div>
              <p className="text-text-secondary mt-4">Overall Score</p>
            </div>
          </div>
        </ProfessionalCard>

        {/* Section Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {analysisData.sections.map((section, idx) => (
            <ProfessionalCard key={idx} className="p-8" glow="cyan">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-cyan">{section.title}</h3>
                <div className="text-3xl font-bold text-acid">{section.score}</div>
              </div>

              <div className="w-full bg-graphite rounded-full h-2 mb-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-acid to-cyan h-full rounded-full transition-all duration-500"
                  style={{ width: `${section.score}%` }}
                ></div>
              </div>

              <p className="text-text-secondary mb-4">{section.feedback}</p>

              {section.suggestions.length > 0 && (
                <div className="bg-graphite/50 rounded-lg p-4 border border-smoke">
                  <p className="text-text-primary font-semibold mb-3">Suggestions:</p>
                  <ul className="space-y-2">
                    {section.suggestions.map((suggestion, i) => (
                      <li key={i} className="text-text-secondary text-sm flex gap-2">
                        <span className="text-acid">→</span>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ProfessionalCard>
          ))}
        </div>

        {/* Improvement Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Quick Improvement Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analysisData.improvementTips.map((tip, idx) => (
              <ProfessionalCard key={idx} className="p-8" glow="plasma">
                <span className="text-4xl mb-4 block">{tip.icon}</span>
                <h3 className="text-xl font-bold text-plasma mb-3">{tip.title}</h3>
                <p className="text-text-secondary">{tip.description}</p>
              </ProfessionalCard>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <ProfessionalCard className="p-12 text-center bg-gradient-to-r from-acid/5 to-plasma/5 border-acid/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Use our resume editor to implement these suggestions and track your improvement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/editor"
              className="px-8 py-3 rounded-lg bg-acid text-void font-bold hover:bg-lime transition-all duration-200"
            >
              Edit Resume
            </Link>
            <Link
              to="/"
              className="px-8 py-3 rounded-lg border border-acid text-acid hover:bg-acid/10 transition-all duration-200 font-semibold"
            >
              Back to Dashboard
            </Link>
          </div>
        </ProfessionalCard>
      </section>

      <div className="noise"></div>
    </main>
  );
}
