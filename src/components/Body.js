import RestaurantCard from "./RestaurantCard.js";
import { restaurantList } from "../utils/constants.js";



const Body = () => {
  return (
    <div className="body">
      <div className="search">SEARCH</div>

      <div className="res-container">
        {restaurantList.map((restaurant, i) => (
          
          <RestaurantCard restaurant={restaurantList[i]} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
