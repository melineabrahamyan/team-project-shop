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
import Pagination from "../../components/paginationControlled";
import PaginationControlled from "../../components/paginationControlled";

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
  const [dataStore, setDataStore] = useState<Tstore[]>([]);
  const [page, setPage] = useState(1);
  const params = useParams();

  console.log(params, "params");

  const dispatch = useDispatch();

  const loadCountPerPage = 10;

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);

    setDataStore(
      store.slice(
        pageNumber * loadCountPerPage - loadCountPerPage,
        pageNumber * loadCountPerPage
      )
    );
  };

  useEffect(() => {
    projectFireStore
      .collection(`/${params.gender}`)
      .get()
      .then((snapshot) => {
        const response = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //@ts-ignore
        setStore(response);
        //@ts-ignore
        setDataStore(response.slice(0, loadCountPerPage));
        console.log(dataStore);
      });
  }, [params.gender]);

  return (
    <div>
      <div className="container">
        {dataStore.map((product) => {
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
      {/* <button onClick={handleLoadMore}>LOAD MORE PRODUCTS</button> */}
      {/* @ts-ignore */}
      <PaginationControlled handlePageClick={handlePageClick} />
    </div>
  );
}

export default Gender;
