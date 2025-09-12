import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RestMenu() {
  const { id } = useParams();
  const [restMenu, setRestMenu] = useState(null);

  useEffect(() => {
    getRestMenu();
  }, []);

  const getRestMenu = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0448827&lng=80.124266&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
    );

    let json = await data.json();
    setRestMenu(json);
  };
  //   conditional redering
  if(!restMenu){
    return <h2>Loding the rest menu</h2>
  }
  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
  } = restMenu.data.cards[2].card.card.info;

  return (
    <div className="menu-con">
      <div className="rest-details">
        <h1 className="restName">{name}</h1>
        <p className="rating">{avgRating + " (" + totalRatingsString + ") "}</p>
        <p className="price">{costForTwoMessage}</p>
        <p className="cusi">{cuisines.join(" ,")}</p>
        <p className="areaName">Outlet-{areaName}</p>
        <p className="time">
          {sla.minDeliveryTime + " - " + sla.maxDeliveryTime}mins
        </p>
      </div>
      <h1>Menu</h1>
      <div className="menu-card">
        <h3 className="menu-name">Double Chicken Roll</h3>
        <p className="menu-price">168.57</p>
        <p className="menu-rating">4.2 (168)</p>
      </div>
    </div>
  );
}
export default RestMenu;

// KFC
// 4.2 (29K+ ratings)
// ₹400 for two
// Burgers,Fast Food
// Outlet-Porur
// 35-45 mins

//Menu
// Double Chicken Roll
// 168.57
// 4.2
// (168)
// Double fun with double chicken strip filling, layerful parantha onions and two spicy sauce [1 unit of Double Chicken Roll, Serves 1]
