import { useEffect, useState } from 'react';

import { StarIcon } from '../StarIcon';

interface Props {
    value?: number;
    clickable?: boolean;
    activeClassName: string;
    inactiveClassName: string;
    handleSubmitFn?: (value: number) => any;
    size?: 'small' | 'medium' | 'large';
}

function StarRating({ value, clickable, activeClassName, inactiveClassName, handleSubmitFn, size = 'large' }: Props) {
    const [rating, setRating] = useState<number>(value ?? 0);
    const [mouseHover, setMouseHover] = useState<number | null>(null);

    useEffect(() => {
        if (value) {
            setRating(value);
        }
    }, [value]);

    return (
        <div className='flex gap-0'>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i} className='flex'>
                        <input
                            type='radio'
                            name='rating'
                            value={ratingValue}
                            className='hidden'
                            onClick={() => {
                                if (clickable) {
                                    setRating(ratingValue);
                                    handleSubmitFn && handleSubmitFn(ratingValue);
                                }
                            }}
                        />
                        <StarIcon
                            onMouseEnter={() => clickable && setMouseHover(ratingValue)}
                            onMouseLeave={() => clickable && setMouseHover(null)}
                            className={`
                ${
                    ratingValue <= Math.round(mouseHover || rating) ? activeClassName : inactiveClassName
                } ${clickable && 'cursor-pointer'}`}
                            size={size}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default StarRating;
