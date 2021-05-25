import React from "react";
import "./style.css";

function SearchForm (props) {
    return (
        <div className="searchBar container-fluid">
          <div className="d-flex">
            <div id="searchText">Employee Search</div>
            <input id="searchBox" className="form-control me-2" type="search" placeholder="Search by name, role or email" aria-label="Search" onChange={props.handleChange} />
          </div>
        </div>
    );
  }
  
  export default SearchForm;