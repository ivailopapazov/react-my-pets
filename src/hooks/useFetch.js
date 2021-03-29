import { useState, useEffect } from 'react';

const useFetch = (url, initialValue) => {
    const [state, setState] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setState(result);
                setIsLoading(false);
            });
            
    }, [url]);

    return [
        state,
        isLoading,
    ];
};

export default useFetch;