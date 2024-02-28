const RestaurantCard = ({restaurant}) => {
    return (
    
    <div className="restaurant-card">
  
  
  <div className="card-image">
    
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`} alt="it's here" />
  
  </div>   
  
  <h3>{restaurant.info.name}</h3>
  <h4>{restaurant.info.cuisines.join(',')}</h4>
  <h4 className="cuisines">{restaurant.info.sla.deliveryTime} minutes</h4>
  <h4>{restaurant.info.costForTwo}</h4>
  
  
  
    </div>)
  };

  export default RestaurantCard;