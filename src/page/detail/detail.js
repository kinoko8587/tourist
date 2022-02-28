import "./detail.scss";
import logo from "../../image/logo.png";
import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import locationIcon from "../../image/icon/location.png";
import timeIcon from "../../image/icon/time.png";
import phoneIcon from "../../image/icon/phone.png";
import arrowIcon from "../../image/icon/arrow.png";

function Detail(props) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  const { state } = useLocation();
  return (
    <div className="detail-page">
      <div className="title">
        <img
          src={arrowIcon}
          className="icon"
          alt="arrow"
          onClick={handleOnClick}
        />
        <span>{state.Name}</span>
      </div>
      <img src={state.Picture} alt="img" />
      <div className="contact">
        <div>
          <img src={locationIcon} className="icon" alt="location" />
          <span>{state.Address}</span>
        </div>
        <div>
          <img src={timeIcon} className="icon" alt="time" />
          <span>{state.OpenTime}</span>
        </div>
        <div>
          <img src={phoneIcon} className="icon" alt="phone" />
          <span>{state.Phone}</span>
        </div>
      </div>
      <span>景點介紹</span>
      <div>{state.Description}</div>
      <span>交通方式</span>
      <div>{state.TravelInfo}</div>
    </div>
  );
}

export default Detail;
