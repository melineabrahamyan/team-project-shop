import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { toggleFromProductList, removeFromWishlist, selectWishlist } from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";

export default function Wishlist(){
    const wishlist=useSelector(selectWishlist);
    const dispatch=useDispatch();

    const dummyWishlist=[{id: 1, price : 200, name: 'item 1'}, {id: 2, price: 300, name : 'item 2'}];
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
    real wishlist
    
    {wishlist.wishlistItems.map(item=>{
        return <div>
        <div key={item.id}>price: {item.price}, name: {item.name}</div>
        <button onClick={()=>{dispatch(addToCart(item))}}>add to cart</button>
        <button onClick={()=>{dispatch(toggleFromProductList(item))}}>toggle</button>
        <button onClick={()=>{dispatch(removeFromWishlist({id: item.id}))}}>remove from wishlist</button>
        </div>
    })}
    
</div>
}