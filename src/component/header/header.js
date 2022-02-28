import "./header.scss";
import logo from "../../image/logo.png";
import menu from "../../image/menu.png";
import {
  Topic1,
  Topic2,
  Topic3,
  Topic4,
  Topic5,
  Topic6,
  Topic7,
  Topic8,
} from "../../image";

function Header(props) {
  const config = [
    { icon: Topic1, name: "歷史文化" },
    { icon: Topic2, name: "戶外踏青" },
    { icon: Topic3, name: "宗教巡禮" },
    { icon: Topic4, name: "親子活動" },
    { icon: Topic5, name: "風景區" },
    { icon: Topic6, name: "美食品嘗" },
    { icon: Topic7, name: "住宿推薦" },
    { icon: Topic8, name: "觀光活動" },
  ];
  const topic = config.map((x) => (
    <div className="topic">
      <img src={x.icon} className="" alt="logo" />
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
        <div className="line"></div>
        <div className="title">精選主題</div>
        <div className="topic-list">{topic}</div>
      </div>
    </div>
  );
}

export default Header;

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

// const images = importAll(require.context('../../image', false, '/\.png/'));

{
  /* <img src={images['0.png']} /> */
}
