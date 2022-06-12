import "./header.scss";
import logo from "../../image/logo.png";
import menu from "../../image/menu.png";
import Selector from '../selector/selector';
import { topic } from "../../config/topic";
import { useAppSelector, useAppDispatch } from './../../hooks';
import { setTopic } from "../../store/searchSlice";
import React, { useState  } from 'react';
import { useNavigate } from "react-router-dom";
import  { useCallback } from "react";

function Header(props) {
  const navigate = useNavigate();
  const topicState = useAppSelector(state => state.search.topic);
  const dispatch = useAppDispatch();
  const clickTopic = (name) =>{dispatch(setTopic(name));}
  const search = useCallback(
    () => navigate("/tourist/search", { state: props.data, replace: true }),
    [navigate]
  );

  const topicList= topic.map((x) => (
    <div className={x.name===topicState?"topic  isSelected":"topic"} key={x.name} onClick={()=>clickTopic(x.name)}>
      <img src={x.icon} alt="logo" />
      {x.name}
    </div>
  ));

  return (
    <div className="header">
      <div className="nav">
        <img src={menu} className="menu-icon" alt="menu" />
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="menu">
        <img src={logo} className="logo" alt="logo" />
        <Selector></Selector>
        <div className="line"></div>
        <div className="title">精選主題</div>
        <div className="topic-list">{topicList}</div>
        <div className="button" onClick={()=>search()}>開始搜尋</div>
      </div>
    </div>
  );
}

export default Header;
