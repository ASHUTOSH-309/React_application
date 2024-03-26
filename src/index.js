import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import { TAB_LOGO } from "./utils/constants.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";

//large restaurant object taken from swiggy website
// To access
//name=> restaurantList[i].info.name
//cusines=>restaurantList[i].info.cuisines
//delivery time=> restaurantList[i].info.sla.deliveryTime
//rating=>restaurantList[i].info.avgRating

//cost for two=> restaurantList[i].info.costForTwo
//Imageid=>restaurantList[i].info.cloudinaryImageId

//JS CODE TO CHANGE href property of the existing link tab in the index.html
const tabimage = document.querySelector("#tablogo");

tabimage.href = TAB_LOGO;

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,/* associates the component with the home route in this case */
    errorElement: <Error />,// now the component will be dynamically rendered on the basis of the path which is visited
    children: [

          {
            path:"/",
            element:<Body />
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
     
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
