import type { Recipe } from '../../../types/recipe';
import Duration from '../Duration';
import StarRating from '../StarRating';

interface Props {
    name: Recipe['name'];
    score: Recipe['score'];
    duration: Recipe['duration'];
}

function RecipeDetailHeader({ name, score, duration }: Props) {
    return (
        <header className='relative w-full aspect-square sm:aspect-auto sm:h-96'>
            {/* Background Image */}
            <img
                src='/assets/icons/recipe-page-icon.png'
                alt=''
                className='absolute inset-0 w-full h-full object-cover'
            />

            {/* Content Overlay */}
            <div className='absolute inset-0 flex flex-col justify-between'>
                {/* Top section - empty space for appbar */}
                <div className='h-20'></div>

                {/* Middle section - plate and title */}
                <div className='flex flex-col items-center justify-center flex-1 px-4'>
                    {/* Plate area - empty space for the plate image */}
                    <div className='w-48 h-48 mb-4'></div>

                    {/* Recipe title positioned below the plate */}
                    <h1 className='text-display-24-regular-white text-center'>{name}</h1>
                </div>

                {/* Bottom section - pink bar with rating and duration */}
                <div className='h-16 flex justify-between items-center px-7' style={{ backgroundColor: '#FF00FF' }}>
                    <StarRating
                        value={score}
                        clickable={false}
                        activeClassName='text-white'
                        inactiveClassName='text-white opacity-30'
                        size='medium'
                    />
                    <Duration duration={duration} className='text-ui-15-regular-white' />
                </div>
            </div>
        </header>
    );
}

export default RecipeDetailHeader;
