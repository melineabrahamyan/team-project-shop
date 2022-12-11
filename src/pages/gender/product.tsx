import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { toggleFromProductList } from "../../store/wishlistSlice";
import { useDispatch } from "react-redux";

export default function Product({
  title,
  size,
  price,
  img,
  id,
}: {
  title: string;
  size: string;
  price: number;
  img: string;
  id: string;
}) {
  return (
    <div className="photoCard">
      {/* <FavoriteBorderIcon onClick={() => dispatch(toggleFromProductList(product))} className="favoriteIcon"/> */}
      <img src={img} alt="" className="image" />
      <div>{title}</div>
      <div>{size}</div>
      <div>{price}</div>
    </div>
  );
}
