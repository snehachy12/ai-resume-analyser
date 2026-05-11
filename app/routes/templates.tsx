import { Link } from "react-router";
import Navbar from "~/components/Navbar";
import ProfessionalCard from "~/components/ProfessionalCard";

export const meta = () => ([
  { title: "Resume Templates | Resumind" },
  { name: "description", content: "Choose from professional resume templates" },
]);

const RESUME_TEMPLATES = [
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean, contemporary design with focus on readability",
    preview: "Modern geometric layout with acid accents",
    features: ["ATS-Friendly", "Minimal Design", "2-Column Layout"],
  },
  {
    id: "executive-professional",
    name: "Executive Professional",
    description: "Premium design for senior-level positions",
    preview: "Executive-style with elegant typography",
    features: ["Senior-Level", "Professional", "Premium Feel"],
  },
  {
    id: "creative-bold",
    name: "Creative Bold",
    description: "Stand out with vibrant design and 3D elements",
    preview: "Creative layout with dynamic visuals",
    features: ["Creative Fields", "Bold Design", "Eye-Catching"],
  },
  {
    id: "technical-dev",
    name: "Technical Developer",
    description: "Perfect for engineers and technical professionals",
    preview: "Code-inspired design with technical focus",
    features: ["Developer-Focused", "Portfolio Ready", "GitHub Integration"],
  },
  {
    id: "academic-scholarly",
    name: "Academic Scholarly",
    description: "Ideal for academic and research positions",
    preview: "Academic format with publication highlights",
    features: ["Publication Ready", "Academic Format", "Citation Style"],
  },
  {
    id: "startup-innovative",
    name: "Startup Innovator",
    description: "Modern startup-style with trendy elements",
    preview: "Startup aesthetic with innovation focus",
    features: ["Startup Culture", "Trendy", "Modern Tech"],
  },
];

export default function Templates() {
  return (
    <main className="min-h-screen bg-void py-10">
      <Navbar />

      {/* Background orbs */}
      <div className="orb orb-acid w-96 h-96 -top-20 -left-20 opacity-10"></div>
      <div className="orb orb-cyan w-72 h-72 -bottom-20 -right-20 opacity-10"></div>

      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-20 reveal in-view">
          <h1 className="text-6xl font-bold font-display mb-4">Resume Templates</h1>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto">
            Choose a professional template that suits your career path. Each template is ATS-optimized and fully customizable.
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {RESUME_TEMPLATES.map((template, index) => (
            <Link
              key={template.id}
              to={`/editor?template=${template.id}`}
              className="group"
            >
              <ProfessionalCard
                glow="acid"
                className="p-8 h-full flex flex-col cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-acid group-hover:text-lime transition-colors">
                    {template.name}
                  </h3>
                  <div className="w-8 h-8 rounded-lg border border-acid/30 flex items-center justify-center group-hover:border-acid transition-colors">
                    <span className="text-acid text-sm">→</span>
                  </div>
                </div>

                <p className="text-text-secondary mb-6 flex-grow">
                  {template.description}
                </p>

                <div className="bg-graphite/50 p-4 rounded-lg mb-6 border border-smoke/50">
                  <p className="text-text-muted text-sm italic">{template.preview}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {template.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full border border-acid/30 text-acid/80 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-smoke/50 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  <span className="text-acid font-semibold">Use Template</span>
                  <span className="text-acid">→</span>
                </div>
              </ProfessionalCard>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <ProfessionalCard className="p-12 text-center bg-gradient-to-br from-acid/5 to-cyan/5 border-acid/20">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Template?</h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Our AI recommends the best template based on your industry and experience level. Upload your resume to get started.
          </p>
          <Link
            to="/upload"
            className="inline-block px-8 py-3 rounded-lg bg-acid text-void font-bold hover:bg-lime transition-all duration-200"
          >
            Upload & Get Recommendation
          </Link>
        </ProfessionalCard>
      </section>

      <div className="noise"></div>
    </main>
  );
}
