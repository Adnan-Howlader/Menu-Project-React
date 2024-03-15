import MenuItem from "./MenuItem";
import Category from "./Category";
import React from "react";

const Menu = ({ items }) => {

  const [ITEMS, setITEM] = React.useState(items);
  
  const changeItems = (category) => {
    if (category === "all") {
      setITEM(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setITEM(newItems);
  }


  
  
  return (<>
   <Category func={changeItems} />
 
    <div className="item-container">
      {ITEMS.map((item) => {
        const { id } = item;

        return <MenuItem key={id} item={item} />;
      })}
    </div>
    </>
  );
};

export default Menu;
