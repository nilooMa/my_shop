const splitTitle = (title) => {
    const titleArr = title.split(" ");
    return `${titleArr[0]} ${titleArr[1]}`;
}

const isInCart = (state,id) => {
    if(state.selectedItems.find(item => item.id === id)){
        return true
    }
    else{ 
        return false;
    }
}

const getQuantity = (state,id) => {
        const indexI = state.selectedItems.findIndex(item => item.id === id);
        if(indexI === -1) {
            return false;
        }
        else {
            return state.selectedItems[indexI].quantity;
        }
}

export {splitTitle, isInCart, getQuantity}