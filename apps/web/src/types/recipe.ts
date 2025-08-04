export interface Recipe {
    id: string;
    name: string;
    duration: number;
    score: number;
}

export interface RecipeDetail extends Recipe {
    description: string;
    ingredients: string[];
    info: string;
}

export interface NewRecipe {
    name: string;
    duration: number;
    description: string;
    ingredients: string[];
    info: string;
}