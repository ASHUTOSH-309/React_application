import RestaurantCard from "./RestaurantCard.js"; // default export=> simple import
import { restaurantList } from "../utils/constants.js"; // named export => kavach import

import { useEffect, useState } from "react";

/* const [resList, setresList] = useState(restaurantList); */

export const Body = () => {
  const [resList, setresList] = useState(restaurantList);

  useEffect(() => {

    console.log("use effect called")
  }, []);

  return (
    <div className="body">
      <div className="search">SEARCH</div>

      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating >= 4.2
            );
            console.log(filteredList);
            setresList(filteredList);
          }}
        >
          Filter restaurants 4.2
        </button>

        <button
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating >= 4.4
            );
            console.log(filteredList);
            setresList(filteredList);
          }}
        >
          Filter restaurants 4.4
        </button>

        <button
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating >= 4.6
            );
            console.log(filteredList);
            setresList(filteredList);
          }}
        >
          Filter restaurants 4.6
        </button>
      </div>

      <div className="res-container">
        {resList.map((restaurant, i) => (
          <RestaurantCard
            restaurant={resList[i]}
            //initially this loop was running same number of times as there were elements in resList but we were passing wrong props to the Restaurantcard component
            key={restaurant.info.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
// named and default exports can be used simultaneously for a component
