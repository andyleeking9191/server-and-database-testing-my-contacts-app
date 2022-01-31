import React from "react";
import Searchbox from "../SearchBox/SearchBox";
import styles from "./Navbar.module.css";


const Navbar = (props) => {
    return (
        <div className={styles["navbar"]}>
            <div className={styles["navbar__logo"]}>My Contacts App</div>
            <Searchbox handleTxtChange={props.handleTxtChange}/>
        </div>
    )
}

export default Navbar;