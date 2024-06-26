/* import { AnyAction } from 'redux';
import { ADD_TO_CART } from '../actions/actionCards';

interface CartState {
  products: any[]; // Puedes reemplazar `any` con el tipo adecuado para tus productos
}

const initialState: CartState = {
  products: [],
};

const cartReducer = (state = initialState, action: AnyAction): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
 */

// store/reducers/cart.ts

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: CartItem;
}

interface RemoveFromCartAction {
  type: 'REMOVE_FROM_CART';
  payload: { id: number };
}

type CartActionTypes = AddToCartAction | RemoveFromCartAction;

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
