import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type {RootState} from './index';
import { Item } from '../constants/itemType';


interface CartItem extends Item{
  cartQuantity: number; 
  gender: string
};

type CartState= {
cartItems: CartItem[];
cartTotalQuantity: number;
cartTotalAmount: number;
};

//@ts-ignore
const initialState = { cartItems: [], cartTotalQuantity: 0, cartTotalAmount: 0 } as CartState;


const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
  addToCart(state, action : PayloadAction<Item>) {
    const itemIndex=state.cartItems.findIndex(item=>item.id===action.payload.id)

    if (itemIndex>=0) {
      state.cartItems[itemIndex].cartQuantity+=1;
  } else {
      const tempProduct={...action.payload, cartQuantity: 1};
      //@ts-ignore
      state.cartItems.push(tempProduct)
    }
   
  },
  decreaseCart(state, action: PayloadAction<{id : string}>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
            
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
          state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    removeFromCart(state, action: PayloadAction<{id: string}>) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
        }
        return state;
      });
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state) {
      state.cartItems = [];
    },
},
})

export const selectCart = (state: RootState) => state.cart
export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions
export default cartSlice.reducer