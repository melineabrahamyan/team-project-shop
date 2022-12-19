import React, { useEffect, useState } from "react";
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
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export type Tstore = {
  id: string;
  title: string;
  description: string;
  sizes: any;
  price: number;
  img: string;
};

function Gender() {
  const [store, setStore] = useState<Tstore[]>([]);
  const [FiterPrduct,SetFiterPrduct] = useState<Tstore[]>([])
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
        SetFiterPrduct(
            //@ts-ignore
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
        )
      });
  }, [params.gender]);





    return (
    <div className="container">

      {FiterPrduct.map((product) => {
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
