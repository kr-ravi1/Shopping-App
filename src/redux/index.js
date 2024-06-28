import { createSlice } from '@reduxjs/toolkit';
//initial state
const card = [];
// create slice that include the reducer 
const CardSlice = createSlice({
    name: "card",
    initialState: card,
    reducers: {
        addItem: (state,action) => {
            const product = action.payload;
            //Check if this product is exist
            const exist = state.find(item => item.id === product.id);
            if (exist) {
                // if this item is exist => increase the quantity
                state.map((item) => {
                    return item.id === product.id ?  item.quantity += 1  : item
                })
            } else {
                // if this item is  not exist => create new variable that include new properity (quantity) then push it to card
                const newProduct = { ...product, quantity: 1 };
                state.push(newProduct);
                
            }
        },
        deleteItem: (state,action) => {
            const product = action.payload;
            ////Check if this product is exist
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.quantity === 1) {
                // if this item quantity equal 1 => delete this item
                return state.filter((item)=> item.id !== product.id)
            } else {
                // if this item quantity more than 1 => decrease quantity
                state.map((item) => 
                    item.id === product.id ? item.quantity = item.quantity - 1 : item
                )
            }
        }
    }
});

export const { addItem, deleteItem } = CardSlice.actions;
export default CardSlice.reducer