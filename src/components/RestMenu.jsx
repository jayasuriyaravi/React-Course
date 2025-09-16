import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import useRestMenu from "../utils/useRestmenu";

function RestMenu() {
  const { id } = useParams();

  const restMenu = useRestMenu({ id });

  console.log(restMenu);
  //   conditional redering
  if (!restMenu) {
    return <h2>Loading the rest menu</h2>;
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

  const items =
    restMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
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
      {items.map((i) => {
        return <MenuCard key={i.card.info.id} items={i} />;
      })}
      
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
