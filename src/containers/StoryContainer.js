import React, { useState, useEffect } from 'react';
import { Story } from '../components/Story';
import { getTopStoryIds } from '../services/hackerNewsApi';

export const StoryContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getTopStoryIds().then(ids => setStoryIds(ids));
    }, []);

    return (
        storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)
    );
};