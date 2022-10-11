import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const clientsProductsSlice = createSlice({
    name: 'clientsProducts',
    initialState: [],
    reducers: {
        setClientsProducts: (state, action) => {
            const clientsProducts = action.payload;
            return clientsProducts;
        }
    }
})

export const getProductsThunk =() => dispatch => {
    axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then(res => dispatch(setClientsProducts(res.data)));
}

export const { setClientsProducts } = clientsProductsSlice.actions;

export default clientsProductsSlice.reducer;
