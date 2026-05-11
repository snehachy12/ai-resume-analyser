import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import ProfessionalCard from "~/components/ProfessionalCard";
import {useEffect, useState} from "react";
import {usePuterStore} from "~/lib/puter";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    const { fs } = usePuterStore();
    const [resumeUrl, setResumeUrl] = useState('');

    useEffect(() => {
        const loadResume = async () => {
            const blob = await fs.read(imagePath);
            if(!blob) return;
            let url = URL.createObjectURL(blob);
            setResumeUrl(url);
        }

        loadResume();
    }, [imagePath]);

    return (
        <Link to={`/resume/${id}`} className="group block h-full">
            <ProfessionalCard glow="acid" className="h-full overflow-hidden cursor-pointer">
                {/* Header */}
                <div className="p-6 border-b border-smoke flex items-start justify-between gap-4">
                    <div className="flex-grow">
                        {companyName && (
                            <h3 className="text-lg font-bold text-acid group-hover:text-lime transition-colors line-clamp-1">
                                {companyName}
                            </h3>
                        )}
                        {jobTitle && (
                            <p className="text-text-secondary text-sm line-clamp-1">{jobTitle}</p>
                        )}
                        {!companyName && !jobTitle && (
                            <h3 className="text-lg font-bold text-acid">Resume</h3>
                        )}
                    </div>
                    <div className="flex-shrink-0">
                        <ScoreCircle score={feedback.overallScore} />
                    </div>
                </div>

                {/* Preview Image */}
                {resumeUrl && (
                    <div className="w-full h-64 bg-graphite overflow-hidden relative">
                        <img
                            src={resumeUrl}
                            alt="resume"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-carbon/50"></div>
                    </div>
                )}

                {/* Footer */}
                <div className="p-6 flex items-center justify-between">
                    <div>
                        <p className="text-text-secondary text-xs">Score</p>
                        <p className="text-2xl font-bold text-acid">{feedback.overallScore}/100</p>
                    </div>
                    <div className="text-acid group-hover:translate-x-1 transition-transform">
                        <span className="font-semibold">View Analysis →</span>
                    </div>
                </div>
            </ProfessionalCard>
        </Link>
    )
}
export default ResumeCard
