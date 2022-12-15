import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type {RootState} from './index';
import { Item } from '../constants/itemType';
import { projectFireStore } from '../firebase';

type ProductsState= {
    products: Item[];
};
    
const initialState = {products: []} as ProductsState;


export const getProducts=createAsyncThunk('products', async([gender, category]: string[])=>{
  if(category==='all'){
    return projectFireStore.collection(`/${gender}`)
        .get()
        .then((snapshot) => {
        //@ts-ignore
            return snapshot.docs.map((doc) => {
                return doc.data();
             })
    }); 
  }

  return projectFireStore.collection(`/${gender}`)
    .get()
    .then((snapshot) => {
    //@ts-ignore
      return snapshot.docs.map((doc) => {
           if(doc.data().category===category){
            return doc.data()
           }
       })
});
    
           
},)

const productsSlice=createSlice({
    name: 'products',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        //@ts-ignore
        [getProducts.pending]: (state)=>{
            state.loading=true
        },
        //@ts-ignore
        [getProducts.fulfilled]: (state, action:PayloadAction<Item>)=>{
            state.loading=false;
            state.products=action.payload
        },
        //@ts-ignore
        [getProducts.rejected]: (state)=>{
            state.loading=false
        },
    }
})



export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;