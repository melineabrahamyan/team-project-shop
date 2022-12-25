import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { addToCart } from "../../store/cartSlice";
import { toggleFromProductList } from "../../store/wishlistSlice";
import { Item } from "../../constants/itemType";
import {projectFireStore} from '../../firebase';
import './index.css'
import SimilarItems from "../../components/similarItems";
import { selectWishlist } from "../../store/wishlistSlice";
import { useSelector } from "react-redux";

export default function SingleProduct(){
    const {gender, category, id}=useParams();
    const dispatch = useDispatch();
    const {wishlistItems}=useSelector(selectWishlist);

    const [singleProduct, setSingleProduct] = useState<Item>();

    useEffect(()=>{
        (
            async () => {
                if (gender && id){
                    const result = await projectFireStore.collection(`/${gender}`)
                        .get()
                        .then((snapshot) => {
                            return snapshot.docs.map((doc) => {
                                return {id: doc.id, ...doc.data()}
                            }).find(product => product.id === id)
                        });
                    setSingleProduct(result as Item);
                  
                }
            }
            
        )()
      
    },[gender, id]);

    const [image, setImage]=useState('');

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
            dispatch(addToCart(singleProduct as Item));
            setIsSizeChosen(false);
            setShowSizes(false);   
            setChoosenSize('')
        }else{
            setShowSizes(true)
        }
    }
   
  
    return <>
     {singleProduct? <div className="sp-si-container">
        <div className="sp-page-container">
             <div className="sp-details-container">
                <h2>{singleProduct.title}</h2>
                <h3>$ {singleProduct.price}</h3>
                <div className="sp-cart-container">
                <i className="fa-solid fa-horizontal-rule"></i>
                    {!showSizes?<>
                        
                        <div className="choose-size" onClick={handleShowSizes}>Choose size<i className="fa-solid fa-angle-down"></i></div>
                    </>:'' }
                    
                    {showSizes? <div className="sizes">
                        {singleProduct.sizes.map(size=>{
                            return <div className={`${size===choosenSize? 'size choosen-size': 'size'}`} key={size} onClick={()=>{handleIsSizeShown(size)}}>{size}</div>
                        })}
                    </div>: ''}
                    <div className="sp-add-to-cart" onClick={handleAddToCart}>Add to cart</div>
                </div>
                <p>{singleProduct.description}</p>
            </div>
            <div className="sp-img-container"> 
                <img src={image || singleProduct.images[0]} alt={singleProduct.title} />
                <i
                    onClick={() => {
                        //@ts-ignore
                        dispatch(toggleFromProductList({...singleProduct, gender}));
                    }}
                    className={`${wishlistItems.find(item=>item.id===singleProduct.id)? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}
                ></i>
             </div>
            <div className="sp-img-list-container">
                  {singleProduct.images.map(img=>{
                    return <div key={img} className='sp-img-small'>
                        <img src={img} onClick={()=>{setImage(img)}}/>
                    </div>
                  })}  
             </div>
        </div>
        {singleProduct.similarItems?.length > 0 ? <div className="sp-similar-items"><SimilarItems 
         //@ts-ignore
            setImage={setImage} gender={gender as string} category={category as string} productsIDs={singleProduct.similarItems} /></div> : ''}
    </div> : ''}
    </>
}

