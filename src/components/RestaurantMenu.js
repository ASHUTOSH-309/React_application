import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
 
 const [resInfo ,setresInfo]=useState(null)
 
 
    useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8909295&lng=75.7916167&restaurantId=735127&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
// await is required even when we are converting the data to json

    console.log(json);
    setresInfo(json);
  
  };

if(resInfo===null){
    return <Shimmer />
    //without this  the below destructing won't be possible as we might try to destructure from a null resInfo state varible
}



  const { name,cuisines,costForTwoMessage}=resInfo?.data?.cards[2]?.card?.card?.info; 
 


  return (resInfo === null) ? (<Shimmer />):
  (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
        <h3>{costForTwoMessage}</h3>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
