import { useEffect, useState } from 'react';
import axios from '../../utils/Api'

export interface IImageObject {
    id: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
    };
    alt_description: string;
    cover_photo: {
        liked_by_user: boolean;
    }
    links: {
        download_location: string;
    }
    user: {
        id: string;
        name: string;
        twitter_username: string;
        instagram_username: string;
        profile_image: {
            small: string;
            medium: string;
            large: string;
        }
    };

}

export const useImageSearch = () => {
    const [images, setImages] = useState<IImageObject[]>([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [hasMore, setHasMore] = useState(true);

    const fetchImages = async (isNewSearch = false) => {
        const endpoint = query ? '/search/photos' : '/photos/random';
        const params = query
            ? { query, per_page: 9, page }
            : { count: 9 };

        try {
            const response = await axios.get(endpoint, { params });
            const newImages = query ? response.data.results : response.data;

            setImages(prev =>
                isNewSearch ? newImages : [...prev, ...newImages]
            );
            setHasMore(newImages.length === 9);
        } catch (error) {
            console.error('Ошибка загрузки изображений:', error);
        }
    };

    const loadMore = () => {
        if (hasMore) setPage(prev => prev + 1);
    };

    const search = (newQuery: string) => {
        setQuery(newQuery);
        setPage(1);
        setImages([]);
    };

    useEffect(() => {
        fetchImages(page === 1);
    }, [page, query]);

    return {
        images,
        search,
        loadMore
    };
};
