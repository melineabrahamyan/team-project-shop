import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
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
            return snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
             })
    }); 
  }

  return projectFireStore.collection(`/${gender}`)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
       }).filter(product=>{
         //@ts-ignore
        return product.category===category
       })
    });          
},)



const productsSlice=createSlice({
    name: 'products',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.fulfilled, (state, action ) => {
            //@ts-ignore
            state.products=action.payload
          })
          
      },
})



export const selectProducts = (state: RootState) => state.products.products;
export default productsSlice.reducer;