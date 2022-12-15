import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  removeFromWishlist,
  selectWishlist,
} from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";
import "./wishlist.css";

export default function Wishlist() {
  const wishlist = useSelector(selectWishlist);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="wishlist-container">
        <h2>Wishlist</h2>
        <div className="wishlist-items">
          {wishlist.wishlistItems.map((item) => {
            return (
              <div key={item.id} className="wishlist-item">
                <div className="wishlist-img-container">
                  <img src={item.images[0]} alt={item.title} />
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
                <div>choose size<i className="fa-solid fa-angle-down"></i></div>
                <div className="wishlist-add-to-cart" onClick={()=>{dispatch(addToCart(item))}}>Add to cart</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
