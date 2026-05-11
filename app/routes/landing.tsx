import { Link } from "react-router";
import ProfessionalCard from "~/components/ProfessionalCard";

export const meta = () => ([
  { title: "Resumind - AI-Powered Resume Analysis" },
  { name: "description", content: "Get real-time AI feedback on your resume and land your dream job" },
]);

export default function Landing() {
  return (
    <main className="min-h-screen bg-void overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-acid w-96 h-96 -top-40 -left-40 opacity-15"></div>
      <div className="orb orb-plasma w-80 h-80 -top-20 right-1/3 opacity-10"></div>
      <div className="orb orb-cyan w-96 h-96 -bottom-40 -right-40 opacity-15"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-smoke/30 bg-void/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-acid to-cyan flex items-center justify-center">
                <span className="text-void font-bold">R</span>
              </div>
              <p className="text-2xl font-bold text-acid group-hover:text-cyan transition-colors">RESUMIND</p>
            </div>
          </Link>
          <Link 
            to="/auth" 
            className="px-6 py-2 rounded-lg bg-acid text-void font-semibold hover:bg-lime transition-all duration-200"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-7xl font-bold font-display leading-tight mb-4">
                Get <span className="bg-gradient-to-r from-acid via-cyan to-plasma bg-clip-text text-transparent">AI-Powered</span> Resume Feedback
              </h1>
              <p className="text-xl text-text-secondary">
                Transform your resume in minutes with real-time analysis and actionable insights powered by advanced AI technology
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/auth?next=/templates" 
                className="px-8 py-4 rounded-lg bg-acid text-void font-bold hover:bg-lime transition-all duration-200 text-center"
              >
                Get Started Free
              </Link>
              <button className="px-8 py-4 rounded-lg border border-acid text-acid hover:bg-acid/10 transition-all duration-200 font-semibold">
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-smoke">
              <p className="text-text-muted text-sm mb-4">Trusted by job seekers worldwide</p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-acid">10K+</p>
                  <p className="text-text-secondary text-sm">Resumes Analyzed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-cyan">95%</p>
                  <p className="text-text-secondary text-sm">Satisfaction Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-plasma">4.9★</p>
                  <p className="text-text-secondary text-sm">User Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[500px] hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-acid/20 to-cyan/20 rounded-2xl blur-3xl opacity-50"></div>
            <ProfessionalCard className="p-8 max-w-sm w-full relative z-10" glow="acid">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-acid to-lime flex items-center justify-center">
                    <span className="text-void font-bold">A</span>
                  </div>
                  <div>
                    <p className="font-bold text-acid">Resume Score</p>
                    <p className="text-text-secondary text-sm">Real-time Analysis</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Score</span>
                    <span className="text-acid font-bold">87/100</span>
                  </div>
                  <div className="w-full bg-graphite rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-acid to-lime h-full rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>
                <div className="pt-4 space-y-2 text-sm">
                  <p className="text-cyan">✓ Good formatting</p>
                  <p className="text-plasma">• Add more metrics</p>
                  <p className="text-cyan">✓ ATS optimized</p>
                </div>
              </div>
            </ProfessionalCard>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Resumind?</h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Our AI-powered platform analyzes your resume against industry standards and gives you actionable feedback
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🤖",
                title: "AI-Powered Analysis",
                description: "Advanced machine learning analyzes every aspect of your resume in real-time",
                color: "acid",
              },
              {
                icon: "📊",
                title: "Detailed Scoring",
                description: "Get scores for formatting, content quality, keywords, and more",
                color: "cyan",
              },
              {
                icon: "🎯",
                title: "ATS Optimization",
                description: "Ensure your resume passes Applicant Tracking Systems",
                color: "plasma",
              },
              {
                icon: "📈",
                title: "Track Progress",
                description: "Monitor improvements and compare multiple resume versions",
                color: "acid",
              },
              {
                icon: "💼",
                title: "Professional Templates",
                description: "Choose from industry-specific resume templates",
                color: "cyan",
              },
              {
                icon: "⚡",
                title: "Instant Feedback",
                description: "Get results in seconds, not hours or days",
                color: "plasma",
              },
            ].map((feature, idx) => (
              <ProfessionalCard 
                key={idx} 
                className="p-6 text-center" 
                glow={feature.color as "acid" | "cyan" | "plasma"}
              >
                <span className="text-4xl block mb-4">{feature.icon}</span>
                <h3 className="text-lg font-bold mb-2 text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary text-sm">{feature.description}</p>
              </ProfessionalCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ProfessionalCard className="p-16 text-center bg-gradient-to-r from-acid/10 via-plasma/10 to-cyan/10 border-acid/30">
          <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Resume?</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who've already improved their resumes with Resumind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/auth?next=/templates" 
              className="px-10 py-4 rounded-lg bg-acid text-void font-bold hover:bg-lime transition-all duration-200"
            >
              Start Free Analysis
            </Link>
            <button className="px-10 py-4 rounded-lg border border-cyan text-cyan hover:bg-cyan/10 transition-all duration-200 font-semibold">
              Learn More
            </button>
          </div>
        </ProfessionalCard>
      </section>

      {/* Footer */}
      <footer className="border-t border-smoke/30 mt-20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-text-secondary">
          <p>© 2026 Resumind. Built with AI for your career.</p>
        </div>
      </footer>

      <div className="noise"></div>
    </main>
  );
}
