import { useEffect } from "react";
import { useLocation, useNavigate} from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "ResumeMatch| Auth" },
  { name: "description", content: "Log into your account" },
];

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();
  const next =new URLSearchParams(location.search).get("next") ?? "/";
  
  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);

  }, [auth.isAuthenticated, next,navigate]);

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center p-4">
      <div className="gradient-border shadow-lg max-w-md w-full">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-6 md:p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Welcome</h1>
            <h2 className="text-gray-600">Log In to Continue Your Job Journey</h2>
          </div>

          <div className="w-full">
            {isLoading ? (
              <button className="auth-button animate-pulse w-full py-3 bg-gray-100 rounded-lg" disabled>
                <span className="text-gray-500">Sign in...</span>
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                {auth.isAuthenticated ? (
                  <button 
                    className="auth-button w-full py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors" 
                    onClick={() => auth.signOut()}
                  >
                    Log Out
                  </button>
                ) : (
                  <button 
                    className="auth-button w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md" 
                    onClick={() => auth.signIn()}
                  >
                    Log In with Puter
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;