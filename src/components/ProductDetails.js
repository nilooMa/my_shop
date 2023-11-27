import React,{useContext} from 'react';
import { useParams,Link } from 'react-router-dom';

//context
import { ProductsContext } from '../context/ProductsContextProvider';
//style
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
    const params = useParams();
    const id = params.id;
    const products = useContext(ProductsContext);
    const product = products[id -1];
    const {title,image,description,category,price} = product;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>category: </span>{category}</p>
            </div>    
            <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span>
                <Link to="/products">Back to shop</Link>
            </div>
        </div>
    );
};

export default ProductDetails;