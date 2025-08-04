import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AddRecipe } from '../components/AddRecipe';
import { RecipeList } from '../components/RecipeList';

type ViewMode = 'list' | 'add';

const Home: NextPage = () => {
    const router = useRouter();
    const [viewMode, setViewMode] = useState<ViewMode>('list');

    // Handle URL parameter for view mode
    useEffect(() => {
        if (router.query.mode === 'add') {
            setViewMode('add');
        } else {
            setViewMode('list');
        }
    }, [router.query.mode]);

    const handleAddRecipe = () => {
        setViewMode('add');
        router.push('/', undefined, { shallow: true });
    };

    const handleBackToList = () => {
        setViewMode('list');
        router.push('/', undefined, { shallow: true });
    };

    return (
        <>
            <Head>
                <title>Ackee Cookbook - Recepty</title>
                <meta name='description' content='Kolekce chutných receptů od Ackee' />
                <meta name='' content='' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                {viewMode === 'list' && <RecipeList onAddRecipe={handleAddRecipe} />}

                {viewMode === 'add' && <AddRecipe onCancel={handleBackToList} />}
            </main>
        </>
    );
};

export default Home;
