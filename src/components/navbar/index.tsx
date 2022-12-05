import { Link } from "react-router-dom";
import SignIn from "../signIn";
import {useAuth} from "../../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../../store/userSlice";

export default function Navbar(){
    const dispatch = useDispatch()
    const {isAuth,email} = useAuth()

    console.log(isAuth)
    return (
    <div>
        <Link to='/'>Home</Link>
        {'   '}
        <Link to='/about'>About</Link>
        {'   '}
        <input type='text' placeholder="Search..."/>
        <Link to='/wishlist'>Wishlist</Link>
        {'    '}
        <Link to='/cart'>Cart</Link>
        {isAuth ? <button onClick={()=>dispatch(removeUser())}>{email}</button>:<SignIn/>}
    </div>
    )
}