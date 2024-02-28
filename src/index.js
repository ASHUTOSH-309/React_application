import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Body from "./components/Body.js";

//large restaurant object taken from swiggy website
// To access 
//name=> restaurantList[i].info.name
//cusines=>restaurantList[i].info.cuisines
//delivery time=> restaurantList[i].info.sla.deliveryTime
//cost for two=> restaurantList[i].info.costForTwo
//rating=>restaurantList[i].info.avgRating
//Imageid=>restaurantList[i].info.cloudinaryImageId





const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); 


