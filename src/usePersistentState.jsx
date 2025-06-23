import { useState, useEffect } from 'react';

export function usePersistentState(key, initialState) {
    const prefixedKey = 'use-persistent-state-' + key
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(prefixedKey);
        if (storedValue === null) {
            if (typeof initialState === 'function') {
                return initialState();
            } else {
                return initialState;
            }
        } else {
            return JSON.parse(storedValue);
        }
    });
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [value, prefixedKey]);
    return [value, setValue];
}