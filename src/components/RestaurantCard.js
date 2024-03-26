import { CLOUDINARY_IMAGE } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
          <div className="card-image">
                  <img
                    src={`${CLOUDINARY_IMAGE}${restaurant.info.cloudinaryImageId}`}
                    alt="it's here"
                  />
          </div>

          <h3>{restaurant.info.name}</h3>
          <h4>{restaurant.info.cuisines.join(",")}</h4>
          <h4 className="cuisines">{restaurant.info.sla.deliveryTime} minutes</h4>
          <h4>{restaurant.info.avgRating}</h4>
          <h4>{restaurant.info.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
