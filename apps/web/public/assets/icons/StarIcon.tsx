interface Props {
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }
  
  function StarIcon({ className, onMouseEnter, onMouseLeave }: Props) {
    return (
      <div
        className={className}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.00002 14.9252L3.43772 18L4.50003 11.4875L2.52426e-05 6.87539L6.21887 5.92523L9.00002 0L11.7812 5.92523L18 6.87539L13.5 11.4875L14.5623 18L9.00002 14.9252Z"
          />
        </svg>
      </div>
    );
  }
  
  export default StarIcon;