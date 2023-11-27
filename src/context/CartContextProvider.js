import React,{useReducer} from 'react';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}
const calculate = (items) => {
    let itemCount = 0;
    let sum = 0;
    items.selectedItems.map(item => {itemCount += item.quantity; sum += (item.price * item.quantity);});
    return {itemsCounter: itemCount, total: sum.toFixed(2)};

}

const cartReducer = (state,action) => {
    //console.log(state);
    switch(action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity:1})
            }
            //console.log(calculate(state));
            return {...state,selectedItems: [...state.selectedItems],...calculate(state),checkout: false}
        case "REMOVE":
            const new_selectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            state = {...state,selectedItems: [...new_selectedItems]}
            return {...state,...calculate(state)} 
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {...state,...calculate(state)}  
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {...state,...calculate(state)} 
        case "CHECKOUT":
            return {
                    selectedItems: [],
                    itemsCounter: 0,
                    total: 0,
                    checkout: true
                }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }
        default:
            return state                  
    }
}
export const CartContext = React.createContext();
const CartContextProvider = (props) => {
    const[state,dispatch] = useReducer(cartReducer,initialState);
    return (
        <div>
            <CartContext.Provider value={{state,dispatch}}>
                {props.children}
            </CartContext.Provider>
        </div>
    );
};

export default CartContextProvider;