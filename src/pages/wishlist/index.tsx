import { useSelector } from "react-redux";
import { selectWishlist, WishlistItemType} from "../../store/wishlistSlice";
import "./wishlist.css";
import WishlistItem from "./wishlistItem";

export default function Wishlist() {
  const wishlist = useSelector(selectWishlist);
 
  return (
    <div>
      <div className="wishlist-container">
        <h2>Wishlist</h2>
        <div className="wishlist-items">
          {wishlist.wishlistItems.map((item) => {
            return <WishlistItem item={item as WishlistItemType}/>
          })}
        </div>
      </div>
    </div>
  );
}
