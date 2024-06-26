/* import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
// Importa otros reductores si los tienes

const rootReducer = combineReducers({
  cart: cartReducer,
  // Otros reductores
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
 */

// store/reducers/index.ts

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer'; // Si tienes otros reducers

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer, // Si tienes otros reducers
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
