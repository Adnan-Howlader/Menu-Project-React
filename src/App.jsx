import Title from "../components/Title";
import Menu from "../components/Menu";
import data from "./data"
import React from "react";

const App = () => {
  
  return (<main>
    <section className="menu>">
      <Title text="our menu" />
      <Menu items={data} />
     
    </section>

  </main>);
};
export default App;
