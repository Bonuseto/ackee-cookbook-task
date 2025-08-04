import type { RecipeDetail } from '../../../types/recipe';

interface Props {
    recipe: RecipeDetail;
}

function RecipeDetailContent({ recipe }: Props) {
    return (
        <div className='py-6 lg:w-1/2 lg:overflow-y-auto lg:h-screen space-y-6 mx-auto'>
            <div className='text-ui-16-semibold-brown'>{recipe.info}</div>

            <div>
                <h2 className='text-display-20-semibold-blue'>Ingredience</h2>
                <ul className='list-disc list-inside text-ui-16-regular-brown'>
                    {recipe.ingredients.map((ingredient: string, i: number) => (
                        <li key={i} className='font-sf-ui text-ui-16-regular-brown'>
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className='text-display-20-semibold-blue'>Příprava jídla</h2>
                <p className='text-ui-16-regular-brown leading-relaxed'>{recipe.description}</p>
            </div>
        </div>
    );
}

export default RecipeDetailContent;
