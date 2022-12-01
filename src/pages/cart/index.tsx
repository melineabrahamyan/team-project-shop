import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { addToCart, decreaseCart, removeFromCart, getTotals, clearCart , selectCart } from "../../store/cartSlice";
import './cart.css'
import { Link } from "react-router-dom";

export default function Cart(){
    const cart = useSelector(selectCart);
    const dispatch=useDispatch();

    const dummyCart = [{
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
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
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