import classes from "./header.module.scss";
import { useState } from "react";
function Header({
  pizzas
}) {

  const [pizzasList, setPizzasList] = useState([])

  const performSearch = (text) => {

    let searchedPizzas = pizzas.filter((pizza) => pizza.name.toLowerCase().includes(text.toLowerCase()))
    setPizzasList(text.length ? searchedPizzas : []);

  }



  return (
    <div className={classes.header}>
      <img src="https://th.bing.com/th/id/R.b65d69d3f7e03c51b2d84f676adca79f?rik=DOCCNQRrf4rieA&pid=ImgRaw&r=0" height={50} className={classes.header__logo} />
      <div className={classes.header__right_side}>
        <input placeholder="Pizza name" type="text" onChange={(e) => {
          e.preventDefault();
          performSearch(e.currentTarget.value)
        }} />
        <div className={classes.header__search_list}>
          {pizzasList.length > 0 && pizzasList.map((pizza) => {
            return <a href={`/?pizza=${pizza.name}`} className={classes.header__search_pizza}>{pizza.name}</a>
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
