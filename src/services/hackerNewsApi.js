import axios from 'axios';
import { selectFields } from '../utils/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com';
export const version = '/v0';
export const bestStoriesUrl = `${baseUrl}${version}/beststories.json`;
export const newStoriesUrl = `${baseUrl}${version}/newstories.json`;
export const topStoriesUrl = `${baseUrl}${version}/topstories.json`;

export const getBestStoryIds = () => {
    const res = axios
        .get(bestStoriesUrl)
        .then(result => result.data);

    return res;
};

export const getNewStoryIds = () => {
    const res = axios
        .get(newStoriesUrl)
        .then(result => result.data);

    return res;
};

export const getTopStoryIds = () => {
    const res = axios
        .get(topStoriesUrl)
        .then(result => result.data);

    return res;
};

export const getStory = id => {
    const res = axios
        .get(`${baseUrl}${version}/item/${id}.json`)
        .then(result => result.data && selectFields(result.data));

    return res;
};