import {Link} from "react-router";
import {usePuterStore} from "~/lib/puter";

const Navbar = () => {
    const { auth } = usePuterStore();

    return (
        <nav className="sticky top-0 z-40 border-b border-smoke bg-void/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link to="/" className="group">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-acid to-cyan flex items-center justify-center">
                            <span className="text-void font-bold">R</span>
                        </div>
                        <p className="text-2xl font-bold text-acid group-hover:text-cyan transition-colors">RESUMIND</p>
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    {auth.isAuthenticated && (
                        <>
                            <Link 
                                to="/templates" 
                                className="px-4 py-2 rounded-lg text-text-secondary hover:text-acid transition-colors text-sm font-medium"
                            >
                                Templates
                            </Link>
                            <Link 
                                to="/editor" 
                                className="px-4 py-2 rounded-lg text-text-secondary hover:text-acid transition-colors text-sm font-medium"
                            >
                                Editor
                            </Link>
                        </>
                    )}
                    <Link 
                        to="/upload" 
                        className="px-6 py-2 rounded-lg bg-acid text-void font-semibold hover:bg-lime transition-all duration-200 text-sm"
                    >
                        Upload
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
