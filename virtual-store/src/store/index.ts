/* import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";

const store = configureStore({
  reducer: {
    //users
    products: productsReducer
  },
});

export default store;
 */

// store/index.ts

import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
