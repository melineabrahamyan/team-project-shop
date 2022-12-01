import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { toggleFromProductList, removeFromWishlist, selectWishlist } from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";
import './wishlist.css'


export default function Wishlist(){
    const wishlist=useSelector(selectWishlist);
    const dispatch=useDispatch();

    const dummyWishlist=[{
        id: 1,
        price: 200,
        name: 'item 1',
        image: 'https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/20093ef2_2ae0.jpg',
        desc : 'description of image 1'
      },
      {
        id: 2,
        price: 300,
        name: 'item 2',
        image: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0b%2F8f%2F0b8fc6bc3f1b4d6284225a3a148b9a387df1bf42.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D', 
        desc : 'description of image 2'
      },
      {
        id: 3,
        price: 300,
        name: 'item 2',
        image: 'https://m.media-amazon.com/images/I/61v+wyEpXzL._AC_UY1000_.jpg', 
        desc : 'description of image 2'
      },
      {
        id: 4,
        price: 300,
        name: 'item 2',
        image: 'https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/5013/113/450/5013113450_1_1_3.jpg?t=1664283032008', 
        desc : 'description of image 2'
      },
      {
        id: 5,
        price: 300,
        name: 'item 2',
        image: 'https://www.bodenimages.com/productimages/r1aproductlarge/22wwin_r0211_blk_m01.jpg', 
        desc : 'description of image 2'
      },
      {
        id: 6,
        price: 300,
        name: 'item 2',
        image: 'https://matalan-content.imgix.net/uploads/asset_file/asset_file/433549/1663766844.630607-S2931188_C333_Alt1.jpg?ixlib=rails-4.2.0&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=1000&h=1400&fit=fit&s=8cadc9403fce83443460b8449782ece7', 
        desc : 'description of image 2'
      },
      {
        id: 7,
        price: 300,
        name: 'item 2',
        image: 'https://asset.promod.com/product/149094-gz-1659364401.jpg?auto=webp&quality=80', 
        desc : 'description of image 2'
      },

    ];
    
    return <div>
    dummy wishlist <br/>
    
    {dummyWishlist.map(item=>{
        return <div>
        <div key={item.id}>price: {item.price}, name: {item.name}</div>
        <button onClick={()=>{dispatch(addToCart(item))}}>add to cart</button>
        <button onClick={()=>{dispatch(toggleFromProductList(item))}}>toggle</button>
        <button onClick={()=>{dispatch(removeFromWishlist({id: item.id}))}}>remove from wishlist</button>
        </div>
    })} <br/><br/>
    
    <div className="wishlist-container">
    <h2>Wishlist</h2>
    <div className="wishlist-items">
    {wishlist.wishlistItems.map(item=>{
        return <div className="wishlist-item">
            <div className="wishlist-img-container">
                <img src={item.image} alt={item.name} />
                <i onClick={()=>{dispatch(removeFromWishlist({id: item.id}))}} className="fa-sharp fa-solid fa-xmark"></i>
            </div>
            <div className="wishlist-product-price">$ {item.price}</div>
            <div className="wishlist-product-name">{item.name}</div>
            <div className="wishlist-add-to-cart" onClick={()=>{dispatch(addToCart(item))}}>Add to cart</div>
        </div>
    })}
    </div>
        
    </div>

</div>
}