import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://e7.pngegg.com/pngimages/47/533/png-clipart-swiggy-office-business-online-food-ordering-delivery-bangalore-business-food-text-thumbnail.png"
          alt="logo image is here"
        />
      </div>

      <div className="navItems">
        <ul>
          <li>home</li>
          <li>About us</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
  
  <div className="restaurant-card">


<div className="card-image">
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/535fc9f9c135f7982317bbb6a64a1ffc" alt="it's here" />
</div>   

<h3>VEG FAST FOOD</h3>
<h4>chinese,south indian,north-indian</h4>
<h4>40 minutes</h4>
<h4>400 FOR TWO</h4>



  </div>)
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">SEARCH</div>

      <div className="res-container">//restaurant cards
      
      <RestaurantCard />
      
      </div>
    </div>
  );
};

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
