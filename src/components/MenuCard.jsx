import { RestImg } from "../utils/data";

function MenuCard({ items }) {
  const { info } = items.card;
  const {name,description,defaultPrice,ratings,imageId} = info;
  const{rating,ratingCountV2}=ratings.aggregatedRating
  return (
    <div className="menu-card">
      <div className="items-detail">
        <h3 className="menu-name">{name}</h3>
        <p className="menu-price">{defaultPrice/100}</p>
        <p className="menu-rating">{rating +"("+ratingCountV2+")"}</p>
        {/* <p className="menu-des">{description}</p> */}
      </div>
      <img src={RestImg+imageId} alt="" className="item-img" />
    </div>
  );
}
export default MenuCard;
