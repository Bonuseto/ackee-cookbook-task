import { useState } from 'react';

import { useUpdateRecipeRating } from '../../../hooks/useRecipes';
import type { Recipe } from '../../../types/recipe';
import StarRating from '../StarRating';

interface Props {
    id: Recipe['id'];
    refetchRecipeData: () => Promise<any>;
}

function RecipeDetailRating({ id, refetchRecipeData }: Props) {
    const updateRatingMutation = useUpdateRecipeRating();
    const [isRatingInProgress, setIsRatingInProgress] = useState(false);

    const hasRated = () => false;

    const handleSubmit = async (rating: number) => {
        setIsRatingInProgress(true);
        try {
            await updateRatingMutation.mutateAsync({ id, score: rating });
            await refetchRecipeData();
        } catch (error) {
            console.error('Error submitting rating:', error);
        } finally {
            setIsRatingInProgress(false);
        }
    };

    return (
        <div className='primary-color w-full h-40 flex flex-col items-center justify-center gap-2'>
            <h2 className='text-display-20-semibold-white text-sm'>Ohodnoť tento recept</h2>
            <div className='flex justify-center'>
                <StarRating
                    value={0}
                    clickable
                    activeClassName='text-white'
                    inactiveClassName='text-blue-400'
                    handleSubmitFn={!hasRated() && !isRatingInProgress ? handleSubmit : undefined}
                />
            </div>
        </div>
    );
}

export default RecipeDetailRating;
