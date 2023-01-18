import { useState, useEffect } from "react";

function useQuery(url) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                setData(data);
                setIsLoaded(true);
            });
    }, [url]);
    // the url is now a dependency
    // we want to use the side effect whenever the url changes

    // return an *object* with the data and isLoaded state
    return { data, isLoaded };
}

export default useQuery;