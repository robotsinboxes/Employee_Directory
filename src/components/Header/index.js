import React from "react";
import "./style.css";

function Header (props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div id="title">DUNDER MIFFLIN
            <br></br> Employee Directory</div>
            <div id="caption">"The people person's paper people"</div>
        </div>
    );
  }
  
  export default Header;