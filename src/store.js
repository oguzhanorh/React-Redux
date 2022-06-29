//Store bizim statelere ait tüm verileri tutmamızı sağlar böylelikle alt componentlerden üst componentlere veri akışı kolay bir şekilde sağlanır.

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
