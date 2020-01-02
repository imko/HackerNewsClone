import React, { useState, useEffect, memo } from 'react';
import { Story } from '../components/Story';
import { getTopStoryIds } from '../services/hackerNewsApi';
import { StoryContainerWrapper, GlobalStyle } from '../styles/StoryContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoryContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
    const { count } = useInfiniteScroll();

    useEffect(() => {
        getTopStoryIds().then(ids => setStoryIds(ids));
    }, []);

    return (
        <>
            <GlobalStyle />
            <StoryContainerWrapper data-testid='story-container'>
                <h1>Hacker News Stories</h1>
                {storyIds.slice(0, count).map(storyId => <Story key={storyId} storyId={storyId} />)}
            </StoryContainerWrapper>
        </>
    );
};