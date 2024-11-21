import { createSlice } from '@reduxjs/toolkit';

export const productReducer = createSlice({
  name: 'product',
  initialState: { value: { name: '', model: '' } },
  reducers: {
    addProduct: (state, value) => {
      state.value = value.payload;
    }
  }
});

export const { addProduct } = productReducer.actions;
export const selectProduct = (state) => state.product.value;
export default productReducer.reducer;
