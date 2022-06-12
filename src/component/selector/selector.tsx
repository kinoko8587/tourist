import "./selector.scss";
import dropdown from "../../image/icon/dropdown.png";
import cancel from "../../image/cancel.png";
import { location } from "../../config/location";
import React, { useState  } from 'react';
import { useAppSelector, useAppDispatch } from './../../hooks';
import { setCity,deleteCity } from "../../store/searchSlice";

function Selector(props) {
  const city = useAppSelector(state => state.search.city)
  const dispatch = useAppDispatch()
  const [isShow, setIsShow] = useState(false);
  const clickDropdown = () =>{setIsShow(!isShow)} ;
  const clickItem = (city) =>{dispatch(setCity(city));setIsShow(false)} ;
  const clickCancel=(event)=>{dispatch(deleteCity()); event.stopPropagation()};

  const getList = () => location.map((x) => <div key={x.text} onClick={()=>clickItem(x)}>{x.text}</div>);
  const getText=()=>{
    if(city){
      return  <div>
      <span>{city.text}</span>
      <img src={cancel} className="cancel-icon" alt="cancel" onClick={(e)=>clickCancel(e)}/>
      </div>
    }else{
      return <span className="default">目的地</span>
    }
  }

  return (
    <div className="selector">
      <div className="dropdown" onClick={()=>clickDropdown()}>
       {getText()}
        <img src={dropdown} className="icon" alt="dropdown" />
      </div>
      <div className={isShow?"dropdown-list  show":"dropdown-list "}>{getList()}</div>
    </div>
  );
}

export default Selector;
