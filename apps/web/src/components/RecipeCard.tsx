import React from 'react';

import type { Recipe } from '../types/recipe';
import Duration from './recipe/Duration';
import StarRating from './recipe/StarRating';

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    // Use recipe score from API
    const displayRating = recipe.score || 0;

    return (
        <div className='recipe-card'>
            <div className='recipe-card-content'>
                {/* Recipe card icon from design */}
                <div className='recipe-icon'>
                    <img src='/assets/icons/recipe-card-icon.png' alt='Recipe icon' className='recipe-icon-image' />
                </div>

                {/* Recipe info - name, rating, and time stacked vertically */}
                <div className='recipe-info'>
                    <h3 className='text-display-17-semibold-blue'>{recipe.name}</h3>

                    <div className='recipe-rating'>
                        <StarRating
                            value={displayRating}
                            clickable={false}
                            activeClassName='text-pink'
                            inactiveClassName='text-gray-300'
                            size='small'
                        />
                    </div>

                    <Duration duration={recipe.duration} />
                </div>
            </div>

            {/* Separator at bottom */}
            <div className='recipe-separator'>
                <svg width='346' height='2' viewBox='0 0 346 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect width='346' height='2' fill='#E5E5E5' />
                </svg>
            </div>
        </div>
    );
};
