interface DurationProps {
    duration: number;
    className?: string;
}

function Duration({ duration, className }: DurationProps) {
    return (
        <div className={`flex items-center gap-2 ${className || ''}`}>
            <svg className='w-4 h-4' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='8' cy='8' r='7' stroke='currentColor' strokeWidth='1.5' fill='none' />
                <path d='M8 4v4l3 2' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
            </svg>
            <span className={className}>{duration} min.</span>
        </div>
    );
}

export default Duration;
