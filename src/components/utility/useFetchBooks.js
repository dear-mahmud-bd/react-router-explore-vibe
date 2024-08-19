import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchBooks = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        // const timer = setTimeout(() => {
        //     fetchData();
        // }, 10);
        // return () => clearTimeout(timer);
    }, [url]);
    
    return { data, loading, error };
};

export default useFetchBooks;
