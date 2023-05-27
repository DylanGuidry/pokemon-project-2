import React from "react";
import './searchbar.css'
import {  useState } from "react";

function Searchbar() {
    const [searchInput, setSearchInput] = useState('')

    function handleChange(e) {
        setSearchInput(e.target.value)
    }

    return (
        <div className="search-box-container">
            <div className="input-group mb-3 search-bar">
                <input type="text" className="form-control search-bar" placeholder="Search for a Pokemon" aria-label="Search for a Pokemon" aria-describedby="basic-addon2" onChange={(e) => handleChange(e)} value={searchInput}/>
            </div>
        </div>
    );
}

export default Searchbar;