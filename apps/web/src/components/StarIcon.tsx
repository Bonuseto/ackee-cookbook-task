import React from 'react';

interface StarIconProps {
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    size?: 'small' | 'medium' | 'large';
}

export const StarIcon: React.FC<StarIconProps> = ({ className = '', onMouseEnter, onMouseLeave, size = 'large' }) => {
    const getSizeProps = () => {
        switch (size) {
            case 'small':
                return {
                    width: '16',
                    height: '16',
                    viewBox: '0 0 16 16',
                    path: 'M8.00018 11.9502L4.29198 14L5.00018 9.65836L2.00018 6.58359L6.14608 5.95016L8.00018 2L9.85428 5.95016L14.0002 6.58359L11.0002 9.65836L11.7084 14L8.00018 11.9502Z',
                };
            case 'medium':
                return {
                    width: '24',
                    height: '24',
                    viewBox: '0 0 24 24',
                    path: 'M12.0003 17.9253L6.43798 21L7.50027 14.4875L3.00027 9.87539L9.21912 8.77524L12.0003 3L14.7814 8.77524L21.0003 9.87539L16.5003 14.4875L17.5626 21L12.0003 17.9253Z',
                };
            case 'large':
            default:
                return {
                    width: '48',
                    height: '48',
                    viewBox: '0 0 48 48',
                    path: 'M24 35.8505L12.8754 42L15.0001 28.9751L6.00005 19.7508L18.4377 17.8505L24 6L29.5624 17.8505L42 19.7508L33 28.9751L35.1247 42L24 35.8505Z',
                };
        }
    };

    const { width, height, viewBox, path } = getSizeProps();

    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <path fillRule='evenodd' clipRule='evenodd' d={path} fill='currentColor' />
        </svg>
    );
};
