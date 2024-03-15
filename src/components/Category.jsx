import React from "react";

function Category({func}) {
    return ( <>
     
        <div className="btn-container">
            <button className="filter-btn" type="button" onClick={()=>func("all")}>
                all
            </button>
            <button className="filter-btn" type="button" onClick={()=>func("breakfast")}>
                breakfast
            </button>
            <button className="filter-btn" type="button" onClick={()=>func("lunch")}>
                lunch
            </button>
            <button className="filter-btn" type="button" onClick={()=>func("shakes")} >
                shakes
            </button>
        </div>
      
    </> );
}

export default Category;