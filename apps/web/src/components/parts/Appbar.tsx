import React from 'react';

export enum ActionColor {
    blue,
    white,
}

interface Props {
    title?: string;
    leftAction?: React.ReactNode;
    rightAction?: React.ReactNode;
    className?: string;
    actionColor?: ActionColor;
    style?: React.CSSProperties;
    transparent?: boolean;
}

function Appbar({ title, leftAction, rightAction, className, actionColor, style, transparent }: Props) {
    const colorClassName = actionColor === ActionColor.white ? 'text-white fill-white' : 'text-blue fill-blue';
    const navClassName = transparent
        ? `bg-transparent ${className || ''}`
        : `bg-white border-b border-gray-200 ${className || ''}`;

    return (
        <nav className={navClassName} style={style}>
            <div className='px-6 py-4 flex justify-between items-center relative'>
                <div className={`flex justify-start items-center w-12 ${colorClassName}`}>
                    {leftAction && leftAction}
                </div>
                {title && (
                    <h1 className='text-ui-17-semibold-dark absolute left-1/2 transform -translate-x-1/2'>{title}</h1>
                )}
                <div className={`flex justify-end items-center w-12 ${colorClassName}`}>
                    {rightAction && rightAction}
                </div>
            </div>
        </nav>
    );
}

export default Appbar;
