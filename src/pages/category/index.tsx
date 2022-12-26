import React, {useEffect, useState} from "react"
import { useSelector , useDispatch} from "react-redux"
import './index.css'
import {toggleFromProductList, WishlistItemType } from "../../store/wishlistSlice"
import { getProducts, selectProducts } from "../../store/productsSlice"
import { selectWishlist } from "../../store/wishlistSlice"
import { useNavigate, useParams } from "react-router"
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";




export default function Category(){
    const [FiterPrduct,SetFiterPrduct] = useState<WishlistItemType[]>([])
    const products = useSelector(selectProducts);
    const {wishlistItems}=useSelector(selectWishlist);
    const dispatch=useDispatch();
    const {gender, category}=useParams();

    useEffect(()=>{
        // @ts-ignore
        SetFiterPrduct(products)

        //@ts-ignore
        dispatch(getProducts([gender, category]))
    },[gender, category]);


    const navigate=useNavigate();
    const handleNavigate=(id: string)=>{
        navigate(`${id}`)
    }

    useEffect(()=>{
        // @ts-ignore
        return SetFiterPrduct(products)
    },[products]);


    const [value1, setValue1] = useState<number[]>([0, 100]);
    const minDistance = 10;
    const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number,) => {

        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
        let resulut = products.filter((item)=>{

            return (item.price > value1[0]) && (item.price < value1[1])

        })

        // @ts-ignore
        SetFiterPrduct(resulut)
    };


    const [size, SetSize] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        let resulut =  products.filter((i:any)=> i.sizes.find((i:any)=> i === event.target.value))
        // @ts-ignore
        SetFiterPrduct(resulut)
        SetSize(event.target.value)
    };


    return <div>
        <div className="product-list-container">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={size}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value={'xs'}>XS</MenuItem>
                    <MenuItem value={'s'}>S</MenuItem>
                    <MenuItem value={'m'}>M</MenuItem>
                    <MenuItem value={'l'}>L</MenuItem>
                    <MenuItem value={'xl'}>XL</MenuItem>
                </Select>
                <div className='filter_box'>
                    <h3>By Price</h3>
                    <Box sx={{ width: 300}}>
                        <Slider sx={{color: 'black', height: '1px'}}
                            getAriaLabel={() => 'Minimum distance'}
                            value={value1}
                            onChange={handleChange1}
                            valueLabelDisplay="auto"
                            disableSwap
                        />
                    </Box>
                </div>
            </FormControl>

            <div className="product-list-items">
                {FiterPrduct.map((item) => {
                    if(item){
                        return (
                            <div key={item.id} className="product-list-item">
                                <div className="product-list-img-container" onClick={()=>handleNavigate(item.id)}>
                                    <img src={item.images[0]} alt={item.title} />
                                    <i
                                        onClick={(e) => {
                                            dispatch(toggleFromProductList(item));
                                            e.stopPropagation();
                                        }}
                                        className={`${wishlistItems.find(i=>i.id===item.id)? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}
                                    ></i>
                                </div>
                                <div className="product-list-product-price">$ {item.price}</div>
                                <div className="product-list-product-name">{item.title}</div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    </div>
}