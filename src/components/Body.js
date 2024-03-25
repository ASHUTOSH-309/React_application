import RestaurantCard from "./RestaurantCard.js"; // default export=> simple import
import { restaurantList } from "../utils/constants.js"; // named export => kavach import

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
/* const [resList, setresList] = useState(restaurantList); */

export const Body = () => {
  const [resList, setresList] = useState([]);

  useEffect(() => {
    //it will be called after component rendering
    console.log("use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8909295&lng=75.7916167&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setresList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (resList.length === 0) {
    return( 
    <div>
    <Shimmer />
     <Shimmer />
     <Shimmer />
    </div>
    
    
    )
  }
// conditional rendering 
  return resList.length === 0? (<Shimmer />): (
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
