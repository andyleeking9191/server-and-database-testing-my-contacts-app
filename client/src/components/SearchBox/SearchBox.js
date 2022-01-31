import React from "react";
import styles from "./SearchBox.module.css";

const Searchbox = (props) => {
    return (
        <input 
            className={styles["navbar__searchbox"]}
            type="text"
            placeholder="Search Contacts"
            onChange={props.handleTxtChange}
        >
        </input>
    )
}

export default Searchbox;