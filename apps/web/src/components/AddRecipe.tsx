import React from 'react';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { useCreateRecipe } from '../hooks/useRecipes';
import type { NewRecipe } from '../types/recipe';
import { ActionButton } from './ActionButton';
import Appbar, { ActionColor } from './parts/Appbar';

const recipeSchema = z.object({
    name: z.string().min(1, 'Název receptu je povinný'),
    duration: z.number().min(1, 'Doba přípravy musí být alespoň 1 minuta'),
    info: z.string().min(1, 'Popis receptu je povinný'),
    description: z.string().min(1, 'Postup přípravy je povinný'),
    ingredients: z
        .array(z.string().min(1, 'Ingredience nesmí být prázdná'))
        .min(1, 'Alespoň jedna ingredience je povinná'),
});

type RecipeFormData = z.infer<typeof recipeSchema>;

interface AddRecipeProps {
    onCancel: () => void;
}

export const AddRecipe: React.FC<AddRecipeProps> = ({ onCancel }) => {
    const router = useRouter();
    const createRecipeMutation = useCreateRecipe();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RecipeFormData>({
        resolver: zodResolver(recipeSchema),
        defaultValues: {
            name: '',
            duration: 30,
            info: '',
            description: '',
            ingredients: [''],
        },
    });

    const {
        fields: ingredientFields,
        append: appendIngredient,
        remove: removeIngredient,
    } = useFieldArray({
        control,
        name: 'ingredients',
    });

    const onSubmit = async (data: RecipeFormData) => {
        try {
            const newRecipe: NewRecipe = {
                name: data.name,
                duration: data.duration,
                info: data.info,
                description: data.description,
                ingredients: data.ingredients.filter(ingredient => ingredient.trim() !== ''),
            };

            await createRecipeMutation.mutateAsync(newRecipe);
            router.push('/');
        } catch (error) {
            console.error('Failed to create recipe:', error);
        }
    };

    return (
        <div className='min-h-screen bg-white flex flex-col'>
            <Appbar
                title='Přidat recept'
                leftAction={<ActionButton type='back' color='#0000FF' onClick={onCancel} />}
                actionColor={ActionColor.blue}
            />

            <div className='flex-1 flex justify-center overflow-y-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md px-6 py-6 space-y-6'>
                    {/* Name */}
                    <div>
                        <label
                            htmlFor='name'
                            className='block text-xs font-bold uppercase text-display-14-regular-blue mb-1'
                        >
                            Název receptu
                        </label>
                        <input
                            id='name'
                            type='text'
                            {...register('name')}
                            placeholder='Čokoládová nutella s pomerančem'
                            className='w-full border-b border-gray-200 pb-2 focus:outline-none focus:border-blue-600'
                        />
                        {errors.name && <div className='text-red-500 text-sm mt-1'>{errors.name.message}</div>}
                    </div>

                    {/* Duration */}
                    <div>
                        <label
                            htmlFor='duration'
                            className='block text-xs font-bold uppercase text-display-14-regular-blue mb-1'
                        >
                            Doba přípravy (minuty)
                        </label>
                        <input
                            id='duration'
                            type='number'
                            min='1'
                            {...register('duration', { valueAsNumber: true })}
                            placeholder='30'
                            className='w-full border-b border-gray-200 pb-2 focus:outline-none focus:border-blue-600'
                        />
                        {errors.duration && <div className='text-red-500 text-sm mt-1'>{errors.duration.message}</div>}
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className='block text-xs font-bold uppercase text-display-14-regular-blue mb-1'>
                            Ingredience
                        </label>
                        {ingredientFields.map((field, index) => (
                            <div key={field.id} className='flex items-center gap-2 mb-3'>
                                <input
                                    type='text'
                                    {...register(`ingredients.${index}`)}
                                    placeholder={`Ingredience ${index + 1}`}
                                    className='w-full border-b border-gray-200 pb-2 focus:outline-none focus:border-blue-600'
                                />
                                {ingredientFields.length > 1 && (
                                    <button
                                        type='button'
                                        onClick={() => removeIngredient(index)}
                                        className='text-red-500 text-sm'
                                    >
                                        Odebrat
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type='button'
                            onClick={() => appendIngredient('')}
                            className='mt-2 px-4 py-2 border-2 border-pink-500 text-pink-500 font-semibold rounded-md text-sm bg-white hover:bg-pink-50 transition-colors'
                        >
                            + Přidat
                        </button>
                        {errors.ingredients && (
                            <div className='text-red-500 text-sm mt-1'>{errors.ingredients.message}</div>
                        )}
                    </div>

                    {/* Info */}
                    <div>
                        <label
                            htmlFor='info'
                            className='block text-xs font-bold uppercase text-display-14-regular-blue mb-1'
                        >
                            Úvodní text
                        </label>
                        <textarea
                            id='info'
                            {...register('info')}
                            placeholder='Stručný popis receptu...'
                            className='w-full border-b border-gray-200 pb-2 focus:outline-none focus:border-blue-600'
                        />
                        {errors.info && <div className='text-red-500 text-sm mt-1'>{errors.info.message}</div>}
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor='description'
                            className='block text-xs font-bold uppercase text-display-14-regular-blue mb-1'
                        >
                            Postup
                        </label>
                        <textarea
                            id='description'
                            rows={6}
                            {...register('description')}
                            placeholder='Popište postup přípravy krok za krokem...'
                            className='w-full border-b border-gray-200 pb-2 focus:outline-none focus:border-blue-600'
                        />
                        {errors.description && (
                            <div className='text-red-500 text-sm mt-1'>{errors.description.message}</div>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className='flex justify-between pt-4'>
                        <button
                            type='button'
                            onClick={onCancel}
                            className='px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-md text-sm bg-white hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                            disabled={isSubmitting}
                        >
                            Zrušit
                        </button>
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='px-4 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-md text-sm bg-white hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {isSubmitting ? 'Ukládám...' : 'Uložit recept'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
