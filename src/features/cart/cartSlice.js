//Bir slice nesnesi, Redux storenunun bir parçasını temsil eder(key & value) gibi. Slice yapısı ile Action'lar otomatik olarak oluşturulur.
//Reducer: State ve action’ı parametre alan ve yeni state’i dönen pure bir fonksiyondur. Action’ın type’ına göre state’i değiştirir ve yeni state’i geri döner.
//payload : göndereceğimiz veriyi içerir.

import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 5,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
