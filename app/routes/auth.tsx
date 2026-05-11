import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate, Link} from "react-router";
import ProfessionalCard from "~/components/ProfessionalCard";

export const meta = () => ([
    { title: 'Sign In | Resumind' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next || '/');
    }, [auth.isAuthenticated, next])

    return (
        <main className="min-h-screen bg-void flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background orbs */}
            <div className="orb orb-acid w-96 h-96 -top-20 -left-20 opacity-10"></div>
            <div className="orb orb-cyan w-96 h-96 -bottom-20 -right-20 opacity-10"></div>

            <div className="w-full max-w-md relative z-10">
                <ProfessionalCard className="p-12 border-acid/30" glow="cyan">
                    {/* Logo */}
                    <Link to="/" className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-acid to-cyan flex items-center justify-center">
                            <span className="text-void font-bold text-xl">R</span>
                        </div>
                        <span className="text-2xl font-bold text-acid">RESUMIND</span>
                    </Link>

                    {/* Content */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-3">Welcome</h1>
                        <p className="text-text-secondary">
                            Get AI-powered feedback on your resume and land your dream job
                        </p>
                    </div>

                    {/* Auth Button */}
                    <div className="mb-8">
                        {isLoading ? (
                            <button 
                                disabled
                                className="w-full py-4 rounded-lg bg-acid text-void font-bold animate-pulse cursor-not-allowed"
                            >
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <div className="space-y-4">
                                        <button 
                                            onClick={auth.signOut}
                                            className="w-full py-4 rounded-lg bg-acid text-void font-bold hover:bg-lime transition-all duration-200"
                                        >
                                            <p>Sign Out</p>
                                        </button>
                                        <Link 
                                            to="/"
                                            className="block py-4 rounded-lg border border-acid text-acid hover:bg-acid/10 transition-all duration-200 font-semibold text-center"
                                        >
                                            Go to Dashboard
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <button 
                                            onClick={auth.signIn}
                                            className="w-full py-4 rounded-lg bg-acid text-void font-bold hover:bg-lime transition-all duration-200"
                                        >
                                            <p>Sign In</p>
                                        </button>
                                        <p className="text-text-muted text-xs text-center">
                                            By continuing, you agree to our terms of service
                                        </p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Features */}
                    <div className="space-y-4 pt-8 border-t border-smoke">
                        {[
                            { icon: "🤖", text: "AI-powered resume analysis" },
                            { icon: "📊", text: "Get actionable feedback" },
                            { icon: "🎯", text: "ATS optimization tips" },
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="text-xl">{feature.icon}</span>
                                <span className="text-text-secondary text-sm">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </ProfessionalCard>

                {/* Trust badges */}
                <div className="mt-8 text-center space-y-2">
                    <p className="text-text-muted text-xs">Join thousands of job seekers</p>
                    <div className="flex justify-center gap-4 text-2xl">
                        <span>✨</span>
                        <span>🚀</span>
                        <span>💼</span>
                    </div>
                </div>
            </div>

            <div className="noise"></div>
        </main>
    )
}

export default Auth
