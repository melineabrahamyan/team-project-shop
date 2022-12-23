import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { Item } from '../constants/itemType';

export interface WishlistItemType extends Item{
  gender: string; 
};


type WishlistState = {
  wishlistItems: WishlistItemType[];
};

//@ts-ignore
const initialState = { wishlistItems: localStorage.getItem('Wishlist-Items')? JSON.parse(localStorage.getItem('Wishlist-Items')) : [] } as WishlistState;

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleFromProductList(
      state,
      action: PayloadAction<WishlistItemType>
    ) {
      console.log(action.payload)
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex>=0) {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.wishlistItems.push(action.payload);
      }
      localStorage.setItem('Wishlist-Items', JSON.stringify(state.wishlistItems));
    },

    removeFromWishlist(state, action: PayloadAction<{ id: string }>) {
      state.wishlistItems.map((wishlistItem) => {
        if (wishlistItem.id === action.payload.id) {
          state.wishlistItems = state.wishlistItems.filter(
            (item) => item.id !== wishlistItem.id
          );
        }

        return state;
      });
      localStorage.setItem('Wishlist-Items', JSON.stringify(state.wishlistItems));
    },
    
  },
});

export const selectWishlist = (state: RootState) => state.wishlist;
export const { toggleFromProductList, removeFromWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
