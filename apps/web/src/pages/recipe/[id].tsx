import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { RecipeDetail } from '../../components/RecipeDetail';

const RecipeDetailPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id || typeof id !== 'string') {
        return (
            <div className="container">
                <div className="error">Neplatné ID receptu</div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Detail receptu - Ackee Cookbook</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main>
                <RecipeDetail recipeId={id} />
            </main>
        </>
    );
};

export default RecipeDetailPage;