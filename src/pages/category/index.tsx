import { useEffect } from "react"
import { useSelector , useDispatch} from "react-redux"
import './index.css'
import {toggleFromProductList } from "../../store/wishlistSlice"
import { getProducts, selectProducts } from "../../store/productsSlice"
import { useNavigate, useParams } from "react-router"


export default function Category(){
    const products=useSelector(selectProducts);
    const dispatch=useDispatch();
    const {gender, category}=useParams();
  
    useEffect(()=>{
        //@ts-ignore
        dispatch(getProducts([gender, category]))
    },[gender, category]);


    const navigate=useNavigate();
    const handleNavigate=(id: string)=>{
      navigate(`${id}`)
    }

    return <div>
        <div className="product-list-container">
        <h2>{category?.toUpperCase()}</h2>
        <div className="product-list-items">
          {products.map((item) => {
            if(item){
              return (
                <div key={item.id} className="product-list-item">
                  <div className="product-list-img-container" onClick={()=>handleNavigate(item.id)}>
                    <img src={item.images[0]} alt={item.title} />
                    <i
                      onClick={(e) => {
                        dispatch(toggleFromProductList(item));
                        e.stopPropagation();
                      }}
                      className="fa-regular fa-heart"
                    ></i>
                  </div>
                  <div className="product-list-product-price">$ {item.price}</div>
                  <div className="product-list-product-name">{item.title}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
}