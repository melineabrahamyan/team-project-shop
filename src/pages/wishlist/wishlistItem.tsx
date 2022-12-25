import { useDispatch } from "react-redux";
import {useState} from 'react';
import {removeFromWishlist} from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";
import "./wishlist.css";
import { useNavigate } from "react-router-dom";
import { WishlistItemType } from "../../store/wishlistSlice";



export default function WishlistItem({item}: {item: WishlistItemType}){
    const dispatch = useDispatch();
  
    const navigate=useNavigate();
    const handleNavigate=(id: string, gender: string, category: string)=>{
      navigate(`/${gender}/${category}/${id}`)
    }
  
  
    const [showSizes, setShowSizes]=useState(false)
    const handleShowSizes=()=>{
        setShowSizes(n=>!n);   
    }
  
    const [choosenSize,setChoosenSize]=useState('')
    const [isSizeChosen, setIsSizeChosen]=useState(false);
    const handleIsSizeShown=(size: string)=>{
        setIsSizeChosen(true);
        setChoosenSize(size)
    }
  
 
    const handleAddToCart=()=>{
        if(isSizeChosen){
            dispatch(addToCart(item ));
            setIsSizeChosen(false);
            setShowSizes(false);   
            setChoosenSize('')
        }else{
            setShowSizes(true)
        }
    }

  return (
              <div key={item.id} className="wishlist-item" >
                <div className="wishlist-img-container">
                  <img src={item.images[0]} alt={item.title} onClick={()=>handleNavigate(item.id, item.gender, item.category)} />
                  <i
                    onClick={() => {
                      dispatch(removeFromWishlist({ id: item.id }));
                     
                    }}
                    className="fa-sharp fa-solid fa-xmark"
                  ></i>
                </div>
                <div className="wishlist-product-price">$ {item.price}</div>
                <div className="wishlist-product-name">{item.title}</div>
                <div>
                <i className="fa-solid fa-horizontal-rule"></i>
                </div>
                {!showSizes?<>
                        
                        <div className="choose-size" onClick={handleShowSizes}>Choose size<i className="fa-solid fa-angle-down"></i></div>
                    </>:'' }
                    
                    {showSizes? <div className="sizes">
                        
                        {item.sizes.map(size=>{
                            return <div className={`${size===choosenSize? 'size choosen-size': 'size'}`} key={size} onClick={()=>{handleIsSizeShown(size)}}>{size}</div>
                        })}
                    </div>: ''}
                    <div className="sp-add-to-cart" onClick={handleAddToCart}>Add to cart</div>
              </div>
            );
}