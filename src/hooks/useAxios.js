import axios from 'axios';
import { useEffect, useState } from 'react';
import { axiosClient } from '../apis/axiosClient';

export const useAxios = (url, params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();
        setLoading(true);
        (async () => {
            try {
                const res = await axiosClient.get(url, { cancelToken: source.token, params });
                if (isMounted) {
                    setData(res);
                    setError(null);
                }
            } catch (error) {
                if (isMounted) {
                    setData([]);
                    setError(error.message);
                }
            } finally {
                isMounted && setLoading(false);
            }
        })();
        return () => {
            source.cancel();
            isMounted = false;
        };
    }, [url, params]);

    return [data, loading, error];
};

// USE
//const [data ,loading , error] = useAxios('/room')
