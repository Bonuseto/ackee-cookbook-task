import React from 'react';
import Link from 'next/link';

import { useRecipes } from '../hooks/useRecipes';
import { ActionButton } from './ActionButton';
import Appbar, { ActionColor } from './parts/Appbar';
import { RecipeCard } from './RecipeCard';

interface RecipeListProps {
    onAddRecipe: () => void;
}

export const RecipeList: React.FC<RecipeListProps> = ({ onAddRecipe }) => {
    const { data: recipes, isLoading, error } = useRecipes();

    if (isLoading) {
        return (
            <div className='container'>
                <div className='loading'>Načítání receptů...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='container'>
                <div className='error'>Nepodařilo se načíst recepty. Zkuste to prosím znovu.</div>
            </div>
        );
    }

    return (
        <div className='min-h-screen'>
            <Appbar
                title='Recepty'
                rightAction={<ActionButton type='add' color='#0000FF' onClick={onAddRecipe} />}
                actionColor={ActionColor.blue}
            />

            <div className='container recipe-list'>
                {recipes?.map(recipe => (
                    <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
                        <RecipeCard recipe={recipe} />
                    </Link>
                ))}

                {recipes?.length === 0 && (
                    <div className='empty-state'>
                        <p>Zatím zde nejsou žádné recepty.</p>
                        <button className='button button-primary' onClick={onAddRecipe}>
                            Přidat první recept
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
