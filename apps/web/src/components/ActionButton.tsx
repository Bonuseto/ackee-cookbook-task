import React from 'react';

import AddRecipeButton from './buttons/AddRecipeButton';
import BackButton from './buttons/BackButton';

interface ActionButtonProps {
    type: 'add' | 'back';
    color?: string;
    onClick: () => void;
    className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ type, color = '#0000FF', onClick, className = '' }) => {
    const getIcon = () => {
        if (type === 'add') {
            return <AddRecipeButton color={color} />;
        }

        if (type === 'back') {
            return <BackButton color={color} />;
        }

        return null;
    };

    return (
        <button
            className={`action-button action-button-${type} ${className}`}
            onClick={onClick}
            aria-label={type === 'add' ? 'Přidat nový recept' : 'Zpět'}
        >
            {getIcon()}
        </button>
    );
};
