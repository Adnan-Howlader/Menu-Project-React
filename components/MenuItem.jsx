import React from "react";

const MenuItem = (props) => {
  const { item } = props;

  return (
    <>
      <article className="item">
        <img src={item.img} alt={item.title} className="item-img" />

        <div className="item-info">
          <header>
            <h4 className="item-title">{item.title}</h4>
            <h4 className="item-price">${item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </article>
    </>
  );
};

export default MenuItem;
