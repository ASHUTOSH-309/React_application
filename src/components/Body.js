import RestaurantCard from "./RestaurantCard.js";
import { restaurantList } from "../utils/constants.js";

import { useState } from "react";

/* const [resList, setresList] = useState(restaurantList); */

export const Body = () => {

  const [resList, setresList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search">SEARCH</div>

      <div className="filter-btn">


        <button  onClick={() => {
          const filteredList = restaurantList.filter((restaurant) => restaurant.info.avgRating >= 4.6 );
          console.log(filteredList)
          setresList(filteredList) 

        }}>Filter restaurants</button>


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
