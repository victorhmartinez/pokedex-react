import React from "react";
import style from "./Header.module.css"
const Header = () => {
    return ( 
        <>
        <div className={style.containerNav}>
        <div className={style.navOpcion} >
            <span>Home</span>
        </div>
        <div className={style.hero}>
            <h1 className={style.hero_title}>POKEDEX</h1>
        </div>
        </div>
        </>
     );
}
 
export default Header;