
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return <>
        <div className="div1">
            <h1 className="amazon">AMAZON</h1>
            <NavLink to='/' className='nav1'>Home</NavLink>
            <NavLink to='/about' className='nav1'>About</NavLink>
            <NavLink to='/contact' className='nav1'>Contact</NavLink>
            <NavLink to='/product' className='nav1'>Product</NavLink>
        </div>
    </>
} export default Navbar;