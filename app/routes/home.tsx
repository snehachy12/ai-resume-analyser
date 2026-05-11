import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import ProfessionalCard from "~/components/ProfessionalCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | Resumind - Smart Resume Analysis" },
    { name: "description", content: "Get AI-powered feedback on your resume and track job applications!" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list('resume:*', true)) as KVItem[];

      const parsedResumes = resumes?.map((resume) => (
          JSON.parse(resume.value) as Resume
      ))

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    }

    loadResumes()
  }, []);

  return <main className="min-h-screen bg-void">
    <Navbar />

    {/* Background orbs */}
    <div className="orb orb-acid w-96 h-96 -top-20 -left-20 opacity-5"></div>
    <div className="orb orb-cyan w-72 h-72 -bottom-20 -right-20 opacity-5"></div>

    <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="reveal in-view">
          <h1 className="text-6xl font-bold font-display mb-4">Your Resume Dashboard</h1>
          <p className="text-2xl text-text-secondary max-w-3xl">
            {!loadingResumes && resumes?.length === 0 
              ? "Upload your first resume to get instant AI-powered feedback and track your job applications."
              : "Review your submissions and check AI-powered feedback on each resume."}
          </p>
        </div>
      </div>

      {/* Loading State */}
      {loadingResumes && (
        <div className="flex flex-col items-center justify-center py-20">
          <img src="/images/resume-scan-2.gif" className="w-[200px] mb-6" />
          <p className="text-text-secondary">Loading your resumes...</p>
        </div>
      )}

      {/* Empty State */}
      {!loadingResumes && resumes.length === 0 && (
        <ProfessionalCard className="p-16 text-center bg-gradient-to-br from-acid/5 to-cyan/5 border-acid/20">
          <h2 className="text-3xl font-bold mb-4">No Resumes Yet</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Get started by uploading your first resume. Our AI will analyze it and provide actionable feedback to improve your chances of landing your dream job.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link to="/upload" className="px-8 py-4 rounded-lg bg-acid text-void font-bold hover:bg-lime transition-all duration-200 text-lg">
              Upload Resume
            </Link>
            <Link to="/templates" className="px-8 py-4 rounded-lg border border-acid text-acid hover:bg-acid/10 transition-all duration-200 font-semibold text-lg">
              Browse Templates
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "🤖", title: "AI Feedback", desc: "Get instant analysis of your resume" },
              { icon: "📊", title: "Score & Tips", desc: "Actionable improvements to boost visibility" },
              { icon: "🎯", title: "ATS Optimized", desc: "Ensure your resume passes applicant tracking" },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="font-bold text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </ProfessionalCard>
      )}

      {/* Resumes Grid */}
      {!loadingResumes && resumes.length > 0 && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ProfessionalCard className="p-6 text-center glow-acid">
              <p className="text-4xl font-bold text-acid">{resumes.length}</p>
              <p className="text-text-secondary">Total Resumes</p>
            </ProfessionalCard>
            <ProfessionalCard className="p-6 text-center glow-cyan">
              <p className="text-4xl font-bold text-cyan">
                {Math.round(
                  resumes.reduce((acc, r) => acc + (r.feedback?.overallScore || 0), 0) / resumes.length
                )}
              </p>
              <p className="text-text-secondary">Average Score</p>
            </ProfessionalCard>
            <ProfessionalCard className="p-6 text-center glow-plasma">
              <p className="text-4xl font-bold text-plasma">
                {resumes.filter(r => r.feedback?.overallScore >= 80).length}
              </p>
              <p className="text-text-secondary">High Performing</p>
            </ProfessionalCard>
          </div>

          <h2 className="text-3xl font-bold mb-8">Your Resumes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>

          {/* Upload More CTA */}
          <div className="flex justify-center mt-12">
            <Link to="/upload" className="px-8 py-4 rounded-lg bg-acid text-void font-bold hover:bg-lime transition-all duration-200">
              Upload Another Resume
            </Link>
          </div>
        </>
      )}
    </section>

    <div className="noise"></div>
  </main>
}
