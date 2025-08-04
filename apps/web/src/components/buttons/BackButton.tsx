interface Props {
    className?: string;
    color?: string;
}

function BackButton({ className, color = '#0000FF' }: Props) {
    return (
        <svg width='22' height='22' viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg' className={className}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.5 11L11 0.5L13 2.5L4.5 11L13 19.5L11 21.5L0.5 11Z'
                fill={color}
            />
        </svg>
    );
}

export default BackButton;
