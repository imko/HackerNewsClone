import React, { useState, useEffect } from 'react';
import { Story } from '../components/Story';
import { getTopStoryIds } from '../services/hackerNewsApi';
import { StoryContainerWrapper, GlobalStyle } from '../styles/StoryContainerStyles';

export const StoryContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getTopStoryIds().then(ids => setStoryIds(ids));
    }, []);

    return (
        <>
            <GlobalStyle />
            <StoryContainerWrapper data-testid='story-container'>
                <h1>Hacker News Stories</h1>
                {storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)}
            </StoryContainerWrapper>
        </>
    );
};