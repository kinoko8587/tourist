import "./search.scss";
import React, { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "./../../hooks";
import {
  getScenicSpotByCity
} from "../../api/index";
import Card from "../../component/card/card";

function Search(props) {
  const city = useAppSelector((state) => state.search.city);
  const [activityData, setData] = useState([]);

  useEffect(() => {
    getScenicSpotByCity(city.value).then((data) => {
      setData(data);
    });
  })

  const getLists = (data) =>
  data
    .filter((x, index) => x.Picture && index < 3)
    .map((x) => (
      <Card
        key={x.name}
        data={x}
        name={x.Name}
        picture={x.Picture}
        address={x.Address}
        openTime={x.OpenTime}
      ></Card>
    ));

  return (
    <div className="search-page">
      <div className="title">{city.text}</div>
      <div className="tab"></div>
      <div className="content">
      {getLists(activityData)}
      </div>
    </div>
  );
}

export default Search;
