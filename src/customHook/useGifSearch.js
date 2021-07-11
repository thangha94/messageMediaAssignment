import React, { useEffect, useState } from 'react';
import { getImageList } from '../apis/common.api';

const useGifSearch = (pageNumber) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [gifData, setGifData] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        const getGif = async () => {
            const data = await getImageList(pageNumber);
            if (data) {
                console.log(data);
                setGifData(prev => {
                    return [...prev, ...data.data.map(item => ({ url: item.images['480w_still'].url, user: item.user }))]
                });
                setHasMore(data.data.length > 0);
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            } else {
                setError(true);
            }
        }
        getGif();
    }, [pageNumber])
    return { gifData, loading, error, hasMore }
};

export default useGifSearch;