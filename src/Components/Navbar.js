import React from 'react';
import Button from '@mui/material/Button';
import "../App.css";
import Styles from "../Modules/Navbar.module.css";
import { NavLink,Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useSelector } from 'react-redux';

    const NavButton = styled(Button)({
        color: "#333",
        transition: "0.3s",
        borderColor: "#333",
        padding: "4px 6px",
        fontSize:"12px",
        "&:hover": {
            color: "white",
            backgroundColor: "black",
            borderColor: "white",
        }
    })
    const Navbar = () => {
        const [toggle, setToggle] = useState(false);
        const cardCount = useSelector((state) => state.card)

    return (
        <section className={Styles.navbar}>
            <div className='container'>
                <nav>
                    <h2 className={Styles.logo}>Shooping App</h2>
                    <div className={Styles.links}>
                        <ul className={Styles.navLinks}>
                            <li className={Styles.navItem}><NavLink className={Styles.textDeco}  activeclassname="active"  to="/">Home</NavLink></li>
                            <li className={Styles.navItem}><NavLink className={Styles.textDeco} to="/products">Products</NavLink></li>
                            <li className={Styles.navItem}><NavLink className={Styles.textDeco} to="/about">About</NavLink></li>
                            <li className={Styles.navItem}><NavLink className={Styles.textDeco} to="/contact">Contact</NavLink></li>
                        </ul>
                        <div className={Styles.navBtns}>
                            <Link className={Styles.cardLink} to='/login' variant="outlined"><LoginIcon fontSize="small"  />Login</Link>
                            <Link className={Styles.cardLink} to='/signup' variant="outlined"><PersonAddIcon fontSize="small"  />Signup</Link>
                            <Link className={Styles.cardLink} to='/card' variant="outlined"><AddShoppingCartIcon fontSize="small"  />Card({cardCount.length})</Link>
                        </div>
                    </div>
                    <div className={Styles.menuIcon} onClick={()=> setToggle(!toggle)}>
                        <MenuIcon fontSize='large' />
                    </div>
                </nav>
                <div className={toggle? Styles.openMegaMenu : Styles.closeMegaMenu}>
                    <ul className={Styles.menuLinks}>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)} to="/">Home</NavLink></li>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)}to="/products">Products</NavLink></li>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)} to="/about">About</NavLink></li>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)}to="/contact">Contact</NavLink></li>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)} to="/login">Login</NavLink></li>
                        <li className={Styles.menuItem}><NavLink className={Styles.textDeco} onClick={()=>setToggle(!toggle)} to="/signup">Signup</NavLink></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export {NavButton};
export default Navbar;
