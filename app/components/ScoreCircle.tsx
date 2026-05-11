const ScoreCircle = ({ score = 75 }: { score: number }) => {
    const radius = 40;
    const stroke = 8;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;
    const progress = score / 100;
    const strokeDashoffset = circumference * (1 - progress);

    // Determine color based on score
    let gradStart = "#FF6B35"; // Ember for low scores
    let gradEnd = "#DFFF00";   // Acid for neutral
    
    if (score >= 80) {
        gradStart = "#00FFFF";  // Cyan for good
        gradEnd = "#DFFF00";    // Acid for excellent
    } else if (score >= 60) {
        gradStart = "#BF5AF2";  // Plasma for average
        gradEnd = "#DFFF00";    // Acid
    }

    return (
        <div className="relative w-[100px] h-[100px]">
            <svg
                height="100%"
                width="100%"
                viewBox="0 0 100 100"
                className="transform -rotate-90 drop-shadow-lg"
            >
                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={normalizedRadius}
                    stroke="#1A1A1A"
                    strokeWidth={stroke}
                    fill="transparent"
                />
                {/* Partial circle with gradient */}
                <defs>
                    <linearGradient id="scoreGrad" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={gradStart} />
                        <stop offset="100%" stopColor={gradEnd} />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <circle
                    cx="50"
                    cy="50"
                    r={normalizedRadius}
                    stroke="url(#scoreGrad)"
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    filter="url(#glow)"
                />
            </svg>

            {/* Score and issues */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-bold text-lg text-text-primary">{score}</span>
                <span className="text-xs text-text-secondary">/100</span>
            </div>
        </div>
    );
};

export default ScoreCircle;
