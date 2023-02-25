import classes from "./Home.module.scss";
import { useEffect, useState } from "react";
function HomeTemplate({
    pizzas,
    queryPizza
}) {

    const [selectedPizza, setSelectedPizza] = useState(pizzas[0])

    useEffect(() => {
        if (selectedPizza) {
            if ('URLSearchParams' in window) {
                var searchParams = new URLSearchParams(window.location.search)
                searchParams.set("pizza", selectedPizza.name);
                var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
                history.pushState(null, '', newRelativePathQuery);
            }
        }
    }, [selectedPizza])

    useEffect(() => {
        if(queryPizza){
            let selectedPizzaFromParams = pizzas.filter(pizza => pizza.name == queryPizza)[0]
            if(selectedPizzaFromParams){
                setSelectedPizza(selectedPizzaFromParams)
            }
        }
    }, [queryPizza])
    return (
        
        <div className={classes.home_page}>
            <div className={classes.home_page__pizzas}>
                <div className={classes.home_page__pizzas_title}>
                    Our pizza's
                </div>
                <div className={classes.home_page__pizzas_list}>
                    {pizzas.map((pizza, index) => {
                        return <div
                            onClick={(e) => { setSelectedPizza(pizzas[index]) }}
                            className={[classes.home_page__pizza, selectedPizza.name === pizza.name ? classes.home_page__pizza_active : ""].join(" ")}
                        >
                            {pizza.name} - {pizza.price}
                        </div>
                    })}
                </div>
            </div>
            <div className={classes.home_page__pizza_detail}>
                {selectedPizza && (
                    <div className={classes.home_page__pizza_detail_list}>
                        <span>
                            <b>Name:</b>
                            {selectedPizza.name}
                        </span>
                        <span>
                            <b>Price:</b>
                            {selectedPizza.price}
                        </span>
                        <ul>
                            {selectedPizza.toppings.map((topping) => <li>{topping}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomeTemplate;
