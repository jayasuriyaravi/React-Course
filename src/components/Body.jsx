
import Restcard from "./Restcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function Body() {

    const[restData,setRestData] = useState([]);
    const[searchText,setSearchText] = useState("");
    const[filteredList,setFilteredList] = useState([]);

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async()=>{
      try{
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0849557&lng=80.2101342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

      let json = await data.json()

      console.log(json)

      setRestData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      setFilteredList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      }
      catch(error){
        console.log(error)
      }
    }

    // conditional rendering
    if(restData.length===0){
      return <Shimmer/>
    }

  return (
    <div className="body-con">
      <div className="features">
        <input type="text" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }} placeholder="Enter the text for search"/>

        {/* search button */}
        <button onClick={()=>{
            const filteredList = restData.filter((r)=> r.info.name.toLowerCase().includes(searchText.toLowerCase()));
           setFilteredList(filteredList)
           
        }}>search</button>

        {/* filter by rating*/}
        <button onClick={()=>{
            const filteredList = restData.filter((r)=> r.info.avgRating>4.4);
           setFilteredList(filteredList)
           
        }}>filter</button>
      </div>

      {/* rest card */}
      <div className="card">
      {filteredList.map((r,i) => (
        <Restcard key={i} rest={r} />
      ))}
      </div>
    </div>
  );
}


export  default Body;
