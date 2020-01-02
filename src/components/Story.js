import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hackerNewsApi';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../styles/StoryStyles';
import { convertTimestamp } from '../utils/timestampConverter';

export const Story = ({ storyId }) => {
    const [story, setStory] = useState([]);

    useEffect(() => {
        getStory(storyId).then(story => setStory(story));
    }, []);

    return story && story.url ? (
        <StoryWrapper data-testid='story'>
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>
            <StoryMeta data-testid='story-by'>
                <StoryMetaElement color='#000'>By: </StoryMetaElement> {story.by}
                <StoryMetaElement color='#000'>Posted: </StoryMetaElement> {convertTimestamp(story.time).toDateString()}
            </StoryMeta>
        </StoryWrapper>
    ) : null;
};