import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type {RootState} from './index'

type WishlistItem={
     id: number, price: number, name : string
};

type WishlistState= {
    wishlistItems: WishlistItem[];
};
  
const initialState = { wishlistItems: [] } as WishlistState;

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
      toggleFromProductList(state, action : PayloadAction<{id: number, price: number,name: string}>) {
        const itemIndex=state.wishlistItems.findIndex(item=>item.id===action.payload.id)
  
        if (itemIndex>=0) {
            state.wishlistItems = state.wishlistItems.filter(
                (item) => item.id !== action.payload.id
              )
        } else {
          state.wishlistItems.push(action.payload)
         }
      },
      
        removeFromWishlist(state, action: PayloadAction<{id: number}>) {
          state.wishlistItems.map((wishlistItem) => {
            if (wishlistItem.id === action.payload.id) {
                state.wishlistItems = state.wishlistItems.filter(
                (item) => item.id !== wishlistItem.id
              );
            }
  
            return state;
          });
        },
    },
  })
  
  export const selectWishlist = (state: RootState) => state.wishlist;
  export const { toggleFromProductList, removeFromWishlist } = wishlistSlice.actions
  export default wishlistSlice.reducer;