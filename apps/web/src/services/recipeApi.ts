import type { NewRecipe, Recipe, RecipeDetail } from '../types/recipe';

const API_BASE_URL = 'https://private-07ba58-cookbook3.apiary-mock.com/api/v1';

export const recipeApi = {
    // Get all recipes
    getRecipes: async (): Promise<Recipe[]> => {
        const response = await fetch(`${API_BASE_URL}/recipes`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        return response.json() as Promise<Recipe[]>;
    },

    // Get single recipe by ID
    getRecipe: async (id: string): Promise<RecipeDetail> => {
        const response = await fetch(`${API_BASE_URL}/recipes/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch recipe with id: ${id}`);
        }
        return response.json() as Promise<RecipeDetail>;
    },

    // Create new recipe
    createRecipe: async (recipe: NewRecipe): Promise<Recipe> => {
        const response = await fetch(`${API_BASE_URL}/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...recipe,
                score: 0,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to create recipe');
        }
        return response.json() as Promise<Recipe>;
    },

    // Update recipe rating
    updateRecipeRating: async (id: string, score: number): Promise<Recipe> => {
        const response = await fetch(`${API_BASE_URL}/recipes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ score }),
        });

        if (!response.ok) {
            throw new Error('Failed to update recipe rating');
        }
        return response.json() as Promise<Recipe>;
    },
};