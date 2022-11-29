import { Link } from "react-router-dom";

export default function Navbar(){
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
        {/* <Login/> popup */}
    </div>
    )
}