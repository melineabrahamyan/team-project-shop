import { useEffect, useState } from "react"
import { projectFireStore } from "../../firebase"
import './index.css'
import {Item} from '../../constants/itemType'
import {toggleFromProductList } from "../../store/wishlistSlice"
import { useDispatch } from "react-redux"


export default function Category(){
    const [store, setStore]=useState<Item[]>([]);
    const dispatch=useDispatch()
    // let b=store.find(item=>item.similarItems[0]==='Czx3INjIJPFVsW05hGUv')
  
    useEffect(()=>{
        projectFireStore.collection(`/mens`)
        .get()
      .then((snapshot) => {
        setStore(
          //@ts-ignore
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      });
    },[])

    return <div>
        <div className="product-list-container">
        <h2>All</h2>
        <div className="product-list-items">
          {store.map((item) => {
            return (
              <div className="product-list-item">
                <div className="product-list-img-container">
                  <img src={item.images[0]} alt={item.title} />
                  <i
                    onClick={() => {
                      dispatch(toggleFromProductList(item));
                    
                    }}
                    className="fa-regular fa-heart"
                    
                  ></i>
                </div>
                <div className="product-list-product-price">$ {item.price}</div>
                <div className="product-list-product-name">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
}