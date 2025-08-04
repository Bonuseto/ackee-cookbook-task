import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { recipeApi } from '../services/recipeApi';
import type { NewRecipe } from '../types/recipe';

// Query keys
export const recipeKeys = {
    all: ['recipes'] as const,
    lists: () => [...recipeKeys.all, 'list'] as const,
    details: () => [...recipeKeys.all, 'detail'] as const,
    detail: (id: string) => [...recipeKeys.details(), id] as const,
};

// Get all recipes
export const useRecipes = () => {
    return useQuery({
        queryKey: recipeKeys.lists(),
        queryFn: async () => {
            const apiRecipes = await recipeApi.getRecipes();
            return apiRecipes;
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

// Get single recipe
export const useRecipe = (id: string) => {
    return useQuery({
        queryKey: recipeKeys.detail(id),
        queryFn: () => recipeApi.getRecipe(id),
        enabled: !!id,
    });
};

// Create new recipe
export const useCreateRecipe = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (recipe: NewRecipe) => recipeApi.createRecipe(recipe),
        onSuccess: () => {
            // Invalidate and refetch recipes list
            queryClient.invalidateQueries({ queryKey: recipeKeys.lists() });
        },
    });
};

// Update recipe rating
export const useUpdateRecipeRating = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, score }: { id: string; score: number }) =>
            recipeApi.updateRecipeRating(id, score),
        onSuccess: () => {
            // Invalidate and refetch both list and detail
            queryClient.invalidateQueries({ queryKey: recipeKeys.lists() });
            queryClient.invalidateQueries({ queryKey: recipeKeys.details() });
        },
    });
};