//Bir slice nesnesi, Redux storenunun bir parçasını temsil eder(key & value) gibi. Slice yapısı ile Action'lar otomatik olarak oluşturulur.

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});
export default cartSlice.reducer;
