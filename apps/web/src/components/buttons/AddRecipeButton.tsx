interface Props {
    className?: string;
    color?: string;
    onClick?: () => void;
}

function AddRecipeButton({ className, color = '#0000FF', onClick }: Props) {
    return (
        <button onClick={onClick} className={`cursor-pointer ${className || ''}`} type='button'>
            <svg width='22' height='22' viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM10.5 5.5V10.5H5.5V11.5H10.5V16.5H11.5V11.5H16.5V10.5H11.5V5.5H10.5Z'
                    fill={color}
                />
            </svg>
        </button>
    );
}

export default AddRecipeButton;
