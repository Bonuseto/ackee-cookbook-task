import { useRouter } from 'next/router';

import { useRecipe } from '../hooks/useRecipes';
import { ActionButton } from './ActionButton';
import AddRecipeButton from './buttons/AddRecipeButton';
import Appbar, { ActionColor } from './parts/Appbar';
import RecipeDetailContent from './recipe/detail/RecipeDetailContent';
import RecipeDetailHeader from './recipe/detail/RecipeDetailHeader';
import RecipeDetailRating from './recipe/detail/RecipeDetailRating';

// Placeholder components - you can implement these as needed
const Loading = () => (
    <div className='flex items-center justify-center h-64'>
        <div className='text-gray-600 font-sf-ui'>Načítání receptu...</div>
    </div>
);

const Error = ({ error }: { error: any }) => (
    <div className='flex items-center justify-center h-64'>
        <div className='text-red-600 font-sf-ui'>Nepodařilo se načíst recept. Zkuste to prosím znovu.</div>
    </div>
);

interface RecipeDetailProps {
    recipeId: string;
}

function RecipeDetail({ recipeId }: RecipeDetailProps) {
    const router = useRouter();
    const { isLoading: loading, data: recipe, error, refetch } = useRecipe(recipeId);

    return (
        <div className='min-h-screen bg-white flex flex-col'>
            <Appbar
                leftAction={<ActionButton type='back' color='#FFFFFF' onClick={() => router.back()} />}
                rightAction={<AddRecipeButton color='#FFFFFF' onClick={() => router.push('/?mode=add')} />}
                actionColor={ActionColor.white}
                transparent
                className='absolute top-0 left-0 right-0 z-10'
            />
            <article className='flex-1'>
                <RecipeDetailHeader
                    name={recipe?.name ?? ''}
                    score={recipe?.score ?? 0}
                    duration={recipe?.duration ?? 0}
                />
                {loading && !recipe && <Loading />}
                {error && <Error error={error} />}
                {recipe && (
                    <>
                        <div className='m-10'>
                            <RecipeDetailContent recipe={recipe} />
                        </div>
                        <RecipeDetailRating id={recipe.id} refetchRecipeData={refetch} />
                    </>
                )}
            </article>
        </div>
    );
}

export { RecipeDetail };
export default RecipeDetail;
