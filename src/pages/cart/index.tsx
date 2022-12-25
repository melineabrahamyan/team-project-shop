import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { addToCart, decreaseCart, removeFromCart, getTotals, clearCart , selectCart } from "../../store/cartSlice";
import './cart.css'
import { Link } from "react-router-dom";

export default function Cart(){
    const cart = useSelector(selectCart);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);

    const {cartItems, cartTotalAmount, cartTotalQuantity}=cart;


    return <div>
        <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cartItems &&
              cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-product">
                    <img src={item.images[0]} alt={item.title} onClick={()=>{console.log(item)}}/>
                    <div>
                      <h3>{item.title}</h3>
                      <button onClick={() => dispatch(removeFromCart({id: item.id}))}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">$ {item.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => {dispatch(decreaseCart({id: item.id}))}}>
                      -
                    </button>
                    <div className="count">{item.cartQuantity}</div>
                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    $ {item.price * item.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => {dispatch(clearCart())}}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">$ {cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
        <div>total quantity {cartTotalQuantity}</div>
    </div>
}