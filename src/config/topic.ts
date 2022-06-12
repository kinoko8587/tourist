import {
    Topic1,
    Topic2,
    Topic3,
    Topic4,
    Topic5,
    Topic6,
    Topic7,
    Topic8,
  } from "../image";

interface ITopic {
    icon: any;
    name: string;
  }
  export const topic: Array<ITopic> = [
    { icon: Topic1, name: "歷史文化" },
    { icon: Topic2, name: "戶外踏青" },
    { icon: Topic3, name: "宗教巡禮" },
    { icon: Topic4, name: "親子活動" },
    { icon: Topic5, name: "風景區" },
    { icon: Topic6, name: "美食品嘗" },
    { icon: Topic7, name: "住宿推薦" },
    { icon: Topic8, name: "觀光活動" },
  ];
  

// function importAll(r) {
//     let images = {};
//     r.keys().map((item) => {
//       images[item.replace("./", "")] = r(item);
//     });
//     return images;
//   }
  
  // const images = importAll(require.context('../../image', false, '/\.png/'));
  
  {
    /* <img src={images['0.png']} /> */
  }