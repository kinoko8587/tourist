import "./index.scss";
import banner from "../../image/banner.png";
import location from "../../image/location.png";
import Card from "../../component/card/card";
import React, { useState, useEffect } from "react";

import {
  getScenicSpot,
  getRestaurant,
  getHotel,
  getActivity,
} from "../../api/index";
function Index(props) {
  const [scenicSpotData, setData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    getScenicSpot().then((data) => {
      setData(data);
    });
    getRestaurant().then((data) => {
      setRestaurantData(data);
    });
    getHotel().then((data) => {
      setHotelData(data);
    });
    getActivity().then((data) => {
      setActivityData(data);
    });
  }, []);

  const getLists = (data) =>
    data
      .filter((x, index) => x.Picture && index < 3)
      .map((x) => (
        <Card
          data={x}
          name={x.Name}
          picture={x.Picture}
          address={x.Address}
          openTime={x.OpenTime}
        ></Card>
      ));
  return (
    <div className="index-page">
      {" "}
      <div className="banner">
        <div>
          探索。
          <br /> 福爾摩沙
        </div>
        <img src={banner} alt="banner" />
      </div>
      <div className="content">
        <div className="title">
          <img src={location} alt="location" />
          熱門景點
        </div>
        <div className="row">{getLists(scenicSpotData)}</div>
        <div className="title">
          <img src={location} alt="location" />
          觀光活動
        </div>
        <div className="row">{getLists(activityData)}</div>
        <div className="title">
          <img src={location} alt="location" />
          美食品嘗
        </div>
        <div className="row">{getLists(restaurantData)}</div>
        <div className="title">
          <img src={location} alt="location" />
          住宿推薦
        </div>
        <div className="row">{getLists(hotelData)}</div>
      </div>
    </div>
  );
}

export default Index;
