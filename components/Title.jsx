
import React from "react";

const Title = (props) => {
    const { text } = props;

    
    
    return (
        <div className="title">
          <h1>{text || "default title"}</h1>
          <div className="title-underline"></div>
        </div>
    );
    }
export default Title;