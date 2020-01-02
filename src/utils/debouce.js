export const debounce = (fn, wait, immediate, args) => {
    let timeout;

    return () => {
        const context = this;
        const callNow = immediate && !timeout;
        const later = () => {
            timeout = null;
            if (!immediate) fn.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) fn.apply(context, args);
    }
};