import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
const {resId}=useParams();



  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API+resId
    );
    const json = await data.json();
    // await is required even when we are converting the data to json

    console.log(json);
    setresInfo(json);
  };

  if (resInfo === null) {
    return <Shimmer />;
    //without this  the below destructing won't be possible as we might try to destructure from a null resInfo state varible
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  
    const {cards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id }>
            {item?.card?.info?.name} - <span>{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
