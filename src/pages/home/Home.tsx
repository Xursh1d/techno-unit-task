import React, { useCallback, useEffect } from 'react';
import InfiniteScroll from './components/InfiniteScroll';
import { store } from '../../store/home/HomePageStore';
import AdminLayout from '../../AdminLayout';

const Home: React.FC = () => {
    const { getMoreProduct } = store

    const handleScroll = useCallback(() => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

        if (scrollHeight - scrollTop === clientHeight) {
            getMoreProduct();
        }
    }, [getMoreProduct])

    useEffect(() => {
        getMoreProduct();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <AdminLayout>
            <InfiniteScroll />
        </AdminLayout >
    );
};

export default React.memo(Home);
