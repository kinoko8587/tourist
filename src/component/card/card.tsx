import "./card.scss";
import locationIcon from "../../image/icon/location.png";
import timeIcon from "../../image/icon/time.png";
import shareIcon from "../../image/icon/share.png";
import { useNavigate } from "react-router-dom";
import  { useCallback } from "react";

function Card(props) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/tourist/detail", { state: props.data, replace: true }),
    [navigate]
  );
  return (
    <div className="card" onClick={handleOnClick}>
      <img src={props.picture} alt="img" />
      <div className="detail">
        <span className="name">{props.name}</span>
        <div>
          <img src={locationIcon} className="icon" alt="location" />
          <span>{props.address}</span>
        </div>
        <div>
          <img src={timeIcon} className="icon" alt="time" />
          <span>{props.openTime}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
