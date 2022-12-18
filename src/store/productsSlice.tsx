import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import type {RootState} from './index';
import { Item } from '../constants/itemType';
import { projectFireStore } from '../firebase';

type ProductsState= {
    products: Item[];
    singleProduct: Item
};
    //@ts-ignore
const initialState = {products: [], singleProduct: {}} as ProductsState;


export const getProducts=createAsyncThunk('products', async([gender, category]: string[])=>{
  if(category==='all'){
    return projectFireStore.collection(`/${gender}`)
        .get()
        .then((snapshot) => {
        //@ts-ignore
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



export const getSingleProduct=createAsyncThunk('single-product', async([gender, id]: string[])=>{
    return projectFireStore.collection(`/${gender}`)
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => {
              return {id: doc.id, ...doc.data()}
         }).find(product=>product.id===id)
      });          
  },)

const productsSlice=createSlice({
    name: 'products',
    initialState,
    reducers: {
      // getSingleProduct(state, action ) {
      //   //@ts-ignore
      //   state.singleProduct= state.products.find(product=>{
      //    return product.id===action.payload.id
      //   })
      // },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.fulfilled, (state, action) => {
            //@ts-ignore
            state.products=action.payload
          })
          .addCase(getSingleProduct.fulfilled, (state, action) => {
            //@ts-ignore
            state.singleProduct=action.payload
          })
      },
})



export const selectProducts = (state: RootState) => state.products.products;
// export const { getSingleProduct } = productsSlice.actions
export const selectSingleProduct = (state: RootState) => state.products.singleProduct;
export default productsSlice.reducer;