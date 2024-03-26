import RestaurantCard from "./RestaurantCard.js"; // default export=> simple import
import { restaurantList } from "../utils/constants.js"; // named export => kavach import

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
/* const [resList, setresList] = useState(restaurantList); */

export const Body = () => {
  const [resList, setresList] = useState([]);
  const [textbox_content, settext_box_content] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  let initial_list = [];

  useEffect(() => {
    //it will be called after component rendering
    console.log("use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8909295&lng=75.7916167&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json);
    setresList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    global_data=  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  };

  // conditional rendering
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <input
        type="text"
        value={textbox_content}
        className="search-textbox"
        onChange={(event) => {
          if ((event.target.value.trim() == '')) {
                console.log("tera dibba khali hai")
                settext_box_content('')
                   setfilteredRestaurant(resList);
          } else {
            settext_box_content(event.target.value);
            const newList = resList.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(textbox_content.toLowerCase())
            );
            setfilteredRestaurant(newList);
          }
        }}
      />
      <button className="search" onClick={() => {}}>
        SEARCH
      </button>

      <div className="res-container">
        {filteredRestaurant.map((restaurant, i) => (
          <RestaurantCard
            restaurant={filteredRestaurant[i]}
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
