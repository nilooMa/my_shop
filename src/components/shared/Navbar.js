import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { CartContext } from '../../context/CartContextProvider';
//icon
import shopIcon from '../../assets/icons/shop.svg';
//style
import styles from './Navbar.module.css';

const Navbar = () => {
    const {state} = useContext(CartContext);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to="/products" className={styles.productLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt="cart" style={{width: '60px'}}/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>        
        </div>
    );
};

export default Navbar;