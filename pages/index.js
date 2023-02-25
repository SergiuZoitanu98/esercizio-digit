import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Header from '@components/Header';
import HomeTemplate from '@templates/Home';

import { useState } from 'react';

const HomePage = ({pizzas, queryPizza}) => {
 
  const labels = useSelector(state => state.misc.labels)



  return (
    <>
     <Header pizzas={pizzas}/>
     <HomeTemplate pizzas={pizzas} queryPizza={queryPizza}/>
    </>
  );
};



HomePage.getInitialProps = async (ctx) => {


  return {
    queryPizza: ctx.query.pizza,
    pizzas: [
      {
        "id": 1,
        "name": "Margherita",
        "toppings": [
          "fresh tomatoes",
          "mozzarella",
          "basil"
        ],
        "price": 7.99
      },
      {
        "id": 2,
        "name": "Marinara",
        "toppings": [
          "fresh tomatoes",
          "garlic",
          "anchovies"
        ],
        "price": 7.99
      },
      {
        "id": 3,
        "name": "Capricciosa",
        "toppings": [
          "fresh tomatoes",
          "mozzarella",
          "olives",
          "artichokes",
          "smoked ham"
        ],
        "price": 12.99
      },
      {
        "id": 4,
        "name": "4 Formaggi",
        "toppings": [
          "mozzarella",
          "gorgonzola",
          "parmesan",
          "fontina"
        ],
        "price": 13.99
      },
      {
        "id": 5,
        "name": "Friarielli",
        "toppings": [
          "mozzarella",
          "sausages sliced",
          "friarielli"
        ],
        "price": 15.99
      },
      {
        "id": 1,
        "name": "Margherita con Bufala",
        "toppings": [
          "fresh tomatoes",
          "bufala",
          "basil"
        ],
        "price": 7.99
      }
    ]
  }
};


export default connect(state => state)(HomePage);
