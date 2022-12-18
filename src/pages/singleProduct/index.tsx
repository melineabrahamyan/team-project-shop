import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleProduct, selectSingleProduct,selectProducts } from "../../store/productsSlice";
import { useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";

export default function SingleProduct(){

    const {gender, id}=useParams();
    const dispatch=useDispatch();
     const singleProduct=useSelector(selectSingleProduct);
    // const products=useSelector(selectProducts)

    useEffect(()=>{
        //@ts-ignore
        dispatch(getSingleProduct([gender, id]))
        // dispatch(getSingleProduct(id))
    },[]);

    console.log(singleProduct)
    const {title, price, description, images}=singleProduct;
    const [image, setImage]=useState(singleProduct?.images[0])
    return <div>
        <h3>{title}</h3>
        <h3>$ {price}</h3>
        <h3 onClick={()=>dispatch(addToCart(singleProduct))}>Add to cart</h3>
        <p>{description}</p>
        
        <img src={image}/>
       
       {images.map(img=>{
        return <div key={img}>
            <img src={img} onClick={()=>{setImage(img)}}/>
        </div>
       })}
    </div>
    return <div>

    </div>
}