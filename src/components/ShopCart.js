import React,{useContext} from 'react';
//context
import { CartContext } from '../context/CartContextProvider';
//components
import Cart from './shared/Cart';
//link
import { Link } from 'react-router-dom';
//style
import styles from './ShopCart.module.css';

const ShopCart = () => {
    const {state,dispatch} = useContext(CartContext);
    return (
        <div className={styles.container}>
           <div className={styles.cartContainer}>{state.selectedItems.map(item => <Cart ket={item.id} data={{selected:item,dispatch:dispatch}} />)}</div>

            {state.itemsCounter>0 &&
            <div className={styles.payments}>
                <p><span>Total Items:</span>{state.itemsCounter}</p>
                <p><span>Total Price:</span>{state.total}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.clear} onClick={()=> dispatch({type: "CLEAR"})}>clear</button>
                    <button className={styles.checkout} onClick={()=> dispatch({type: "CHECKOUT"})}>checkout</button>
                </div>    
            </div>
            }

            {state.checkout &&
            <div className={styles.complete}>
                <h3>shopping is successfully</h3>
                <Link to="/products">buy more</Link>
            </div>    
            }
            {(!state.checkout && state.itemsCounter === 0) &&
            <div className={styles.complete}>
                <h3>do you want to buy?</h3>
                <Link to="/products">go to shop</Link>
            </div>    
            }
        </div>
    );
};

export default ShopCart;