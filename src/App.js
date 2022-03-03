import "./app.scss";
import Header from "./component/header/header";
import { Routes, Route } from "react-router-dom";
import Index from "./page/index/index";
import Detail from "./page/detail/detail";
import Search from "./page/search/search";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route exact path="/tourist" element={<Index />} />
          <Route path="/tourist/search" element={<Search />} />
          <Route path="/tourist/detail" element={<Detail />} />
        </Routes>
        <footer>TAIWAN TRAVEL</footer>
      </div>
    </div>
  );
}

export default App;
