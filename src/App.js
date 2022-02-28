import "./app.scss";
import Header from "./component/header/header";
import { Routes, Route, Link } from "react-router-dom";
import Index from "./page/index/index";
import Detail from "./page/detail/detail";
import Search from "./page/search/search";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="search" element={<Search />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
        <footer>TAIWAN TRAVEL</footer>
      </div>
    </div>
  );
}

export default App;
