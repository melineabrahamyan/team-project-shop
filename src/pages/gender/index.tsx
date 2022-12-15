import { useEffect, useState } from "react";
import { projectFireStore } from "../../firebase";
import Product from "./product";
import "./style.css";
import { addToCart } from "../../store/cartSlice";
import { toggleFromProductList } from "../../store/wishlistSlice";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./style.css";
import { useParams } from "react-router-dom";

export type Tstore = {
  id: string;
  title: string;
  description: string;
  size: string;
  price: number;
  img: string;
};

function Gender() {
  const [store, setStore] = useState<Tstore[]>([]);
  const params = useParams();

  console.log(params, "params");

  const dispatch = useDispatch();

  useEffect(() => {
    projectFireStore
      .collection(`/${params.gender}`)
      .get()
      .then((snapshot) => {
        setStore(
          //@ts-ignore
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      });
  }, [params.gender]);

  return (
    <div className="container">
      {store.map((product) => {
        return (
          <div key={product.id}>
            <FavoriteBorderIcon
              // onClick={() => dispatch(toggleFromProductList(product))}
              className="favoriteIcon"
            />
            <Product {...product} />
            {/* <button onClick={() => dispatch(addToCart(product))}>
              Add to bag
            </button> */}
          </div>
        );
      })}
    </div>
  );
}

export default Gender;
