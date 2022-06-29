//Store bizim statelere ait tüm verileri tutmamızı sağlar böylelikle alt componentlerden üst componentlere veri akışı kolay bir şekilde sağlanır.

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
