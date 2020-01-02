import { useState, useEffect } from 'react';
import { MAX_STORIES, STORY_INCREMENT } from '../constants/index';
import { debounce } from '../utils/debouce';

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = debounce(() => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
            return false;
        }

        setLoading(true);
    }, 500);

    useEffect(() => {
        if (loading) {
            // Quit scrolling if all stories are loaded 
            if (count + STORY_INCREMENT >= MAX_STORIES) {
                setCount(MAX_STORIES);
            } else {
                setCount(count + STORY_INCREMENT);
            }

            setLoading(false);
        }
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Quick clean up to prevent multiple event listeners
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { count };
};