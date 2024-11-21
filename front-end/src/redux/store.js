import { productReducer } from './reducers/productReducer';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    product: productReducer.reducer
  }
});
