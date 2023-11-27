import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//functions(for splite title)
import { splitTitle, isInCart, getQuantity } from '../../helpers/functions';

//context
import { CartContext } from '../../context/CartContextProvider';

//icon
import trashIcon from '../../assets/icons/trash.svg';
//style
import styles from './Product.module.css';

const Product = (props) => {
    const {id,image,title,price} = props.data;
    const {state,dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={image} alt="product" className={styles.cardImage}/>
            <h3>{splitTitle(title)}</h3>
            <p>{price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${id}`}>details</Link>
                <div className={styles.buttonContainer}>
                    {getQuantity(state, id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE", payload: props.data})}><img src={trashIcon} alt="remove" /></button> }
                    {getQuantity(state, id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button> }
                    {getQuantity(state, id) > 1 && <span className={styles.counter}>{getQuantity(state, id)}</span> }
                    {isInCart(state,id) 
                    ? <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button> 
                    : <button onClick={() => dispatch({type: "ADD_ITEM", payload: props.data})}>Add</button>
                    } 
                    
                </div>
            </div>
        </div>
    );
};

export default Product;