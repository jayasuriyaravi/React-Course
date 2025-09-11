import { RestImg } from "../utils/data";

function Restcard(restData) {
  
  const { rest } = restData;

  const { name, areaName, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    rest.info;

  return (
    <div className="card-container">
      <img className="rest-img" src={RestImg + cloudinaryImageId}></img>
      <div className="card-des">
        <p>{name}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <p>{areaName}</p>
        <p>{cuisines.join(", ")}</p>
      </div>
    </div>
  );
}

export default Restcard;
