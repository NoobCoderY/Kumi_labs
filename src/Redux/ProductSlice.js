import  Json_data from "../Constants/data.json"
const { createSlice,  } = require('@reduxjs/toolkit');


const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [...Json_data.category],
    },
    reducers: {
        addProduct(state, action) {
            state.push(action.payload);
        },
        removeProduct(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    
    },
   
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;



