import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { addToCart, decreaseCart, removeFromCart, getTotals, clearCart , selectCart } from "../../store/cartSlice";

export default function Cart(){
    const cart = useSelector(selectCart);
    const dispatch=useDispatch();

    const dummyCart=[{id: 1, price : 200, name: 'item 1'}, {id: 2, price: 300, name : 'item 2'}];

    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);

    const {cartItems, cartTotalAmount, cartTotalQuantity}=cart;

    return <div>
        dummy cart <br/>
        <button onClick={()=>{dispatch(clearCart())}}>clear cart</button>
        {dummyCart.map(item=>{
            return <div>
            <div key={item.id}>price: {item.price}, name: {item.name}</div>
            <button onClick={()=>{dispatch(addToCart(item))}}>+</button>
            <button onClick={()=>{dispatch(decreaseCart({id: item.id}))}}>-</button>
            <button onClick={()=>{dispatch(removeFromCart({id: item.id}))}}>remove from cart</button>
            </div>
        })} <br/><br/>
        real cart
        <button onClick={()=>{dispatch(clearCart())}}>clear cart</button>
        {cartItems.map(item=>{
            return <div>
            <div key={item.id}>price: {item.price}, name: {item.name}</div>
            <button onClick={()=>{dispatch(addToCart(item))}}>+</button>
            {item.cartQuantity}
            <button onClick={()=>{dispatch(decreaseCart({id: item.id}))}}>-</button>
            <button onClick={()=>{dispatch(removeFromCart({id: item.id}))}}>remove from cart</button>
            </div>
        })} <br/>
        <div>total amount {cartTotalAmount}</div>
        <div>total quantity {cartTotalQuantity}</div>
    </div>
}