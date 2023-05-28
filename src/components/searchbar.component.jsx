import React, { useState } from "react";
import "./searchbar.css";
import { useNavigate } from "react-router-dom";

function Searchbar() {
const [searchInput, setSearchInput] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const navigate = useNavigate();

function handleKeyDown(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
    }
}

const handleSubmit = () => {
    if (searchInput.trim() === "") {
        setError("Please enter a valid search input.");
        return;
    }
    setLoading(true);
    setError(null);
    navigate(`/pokemonDetails/${searchInput.toLowerCase()}`);
};

return (
        <div className="search-box-container">
        <div className="input-group mb-3 search-bar">
                <input
                type="text"
                className="form-control search-bar"
                placeholder="Search for a Pokemon"
                aria-label="Search for a Pokemon"
                aria-describedby="basic-addon2"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    );
}

export default Searchbar;
