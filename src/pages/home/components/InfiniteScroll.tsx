import React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../../store/home/HomePageStore';
import ProductCard from './Card';
import { HStack, FlexProps } from '@chakra-ui/react';
import Loader from '../../../components/Loader';

interface StackProps {
    flexWrap: FlexProps['flexWrap'];
    justifyContent: string,
    gap: string
}
const productsContainer: StackProps = {
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px"
}

const InfiniteScroll: React.FC = observer(() => {
    const { products, isLoading, hasMoreProducts } = store;

    return (
        <HStack {...productsContainer}>
            {products?.map((product, index) => (
                <ProductCard key={index} index={index} product={product} />
            ))}
            {isLoading && <Loader />}
            {!hasMoreProducts && <p>No more products to load</p>}
        </HStack>
    );
});

export default React.memo(InfiniteScroll);
