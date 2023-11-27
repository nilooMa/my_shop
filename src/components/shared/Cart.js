import React from 'react';
//functions
import { splitTitle } from '../../helpers/functions';
//icons
import trash from '../../assets/icons/trash.svg';
//styles
import styles from './Cart.module.css';

const Cart = (props) => {
    const dispatch = props.data.dispatch;
    const {id,image,title,price,quantity} = props.data.selected;
    
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product"/>
            <div className={styles.data}>
                <h3>{splitTitle(title)}</h3>
                <p>{price}</p>
            </div>
            <div><span className={styles.quantity}>{quantity}</span></div>
            <div className={styles.buttonContainer}>
                {quantity>1 && <button onClick={() => dispatch({type:"DECREASE",payload:props.data.selected})}>-</button>}
                {quantity === 1 && <button onClick={() => dispatch({type:"REMOVE",payload:props.data.selected})}><img src={trash} /></button>}
                <button onClick={() => dispatch({type:"INCREASE",payload:props.data.selected})}>+</button>
            </div>
        </div>
    );
};

export default Cart;