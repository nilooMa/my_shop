import React,{useContext} from 'react';

//context for get products
import { ProductsContext } from '../context/ProductsContextProvider';
//components
import Product from './shared/Product';
//style
import styles from './Store.module.css';

const Store = () => {
    const products = useContext(ProductsContext);
    
    return (
        <div className={styles.container}>
            {
                products.map(product => <Product key={product.id} data={product} />)
            }
        </div>
    );
};

export default Store;