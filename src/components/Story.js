import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hackerNewsApi';

export const Story = ({ storyId }) => {
    const [story, setStory] = useState([]);

    useEffect(() => {
        getStory(storyId).then(story => setStory(story));
    }, []);

    return story && story.url ? (
        <p>[{story.id}] <a href={story.url}>{story.title}</a> - {story.by} {story.time}</p>
    ) : null;
};