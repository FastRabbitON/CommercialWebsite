import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NavBarMainStyle.css"

const NavBarMain = () => {


    const [isMobileOpen, setIsMobileOpen] = useState(false);


    const ChangeMobileOpen = () => {
        setIsMobileOpen(!isMobileOpen);
    }



    return (
        <div>

            <div className="MainBarContainer">

                <Link className="Link" to="/">
                    <div className="LogoContainer">

                        <div className="MainLogo">Kraft</div>

                        <div className="SubLogo">Meble na wymiar</div>

                    </div>
                </Link>

                <div className="MainBarButtons">
                    <button> <Link className="Link" to="/"> GALERIA </Link> </button>
                    <button> <Link className="Link" to="/produkcja"> PRODUKCJA </Link></button>
                    <button> <Link className="Link" to="/kontakt"> KONTAKT </Link></button>
                </div>

            </div>



            <div className={`BurgerBtn ${isMobileOpen ? "on" : ""}`}
                onClick={() => ChangeMobileOpen()}>

                <span ></span>
                <span ></span>
                <span ></span>

            </div>





            <div className={`MobileMenu ${isMobileOpen ? "on" : ""}`}>
                <div className="MobileMenuContent">
                    <button onClick={() => ChangeMobileOpen()}> <Link className="Link" to="/"> GALERIA </Link> </button>
                    <button onClick={() => ChangeMobileOpen()}> <Link className="Link" to="/produkcja"> PRODUKCJA </Link></button>
                    <button onClick={() => ChangeMobileOpen()}> <Link className="Link" to="/kontakt"> KONTAKT </Link></button>
                </div>

            </div>




        </div>
    );
};

export default NavBarMain;