import { makeObservable, observable, action, computed } from 'mobx';
import { Product } from '../../types/home.types';
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.avif';
import img3 from '../../Images/img3.avif';
import { throttle } from 'lodash';

class ProductsStore {
    products: Product[] = [];
    isLoading: boolean = true;
    hasMoreProducts = true

    constructor() {
        makeObservable(this, {
            products: observable,
            isLoading: observable,
            hasMoreProducts: observable,
            getMoreProduct: action,
            setProducts: action,
            setLoading: action,
        });

        this.getMoreProduct = throttle(this.getMoreProduct.bind(this), 1000) as () => Promise<void>;;
    }

    async getMoreProduct() {
        this.setLoading(true);
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                const newProducts: Product[] = [
                    {
                        title: 'Living room Sofa',
                        body:
                            'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
                        price: 400,
                        image: img1,
                    },
                    {
                        title: 'Blue chair',
                        body:
                            'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
                        price: 550,
                        image: img2,
                    },
                    {
                        title: 'Furniture Image',
                        body:
                            'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
                        price: 600,
                        image: img3,
                    },
                    {
                        title: 'Living room Sofa',
                        body:
                            'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
                        price: 400,
                        image: img1,
                    },
                    {
                        title: 'Blue chair',
                        body:
                            'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
                        price: 550,
                        image: img2,
                    },
                    {
                        title: 'Furniture Image',
                        body:
                            'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
                        price: 600,
                        image: img3,
                    },
                ];
                this.setProducts([...this.products, ...newProducts]);
                this.setLoading(false);
                resolve();
            }, 2000)
        });
    }

    setProducts(products: Product[]) {
        this.products = products;
    }

    setLoading(loading: boolean) {
        this.isLoading = loading;
    }
}

export const store = new ProductsStore();
