import {Routes,Route} from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import TourDetails from "./components/TourDetails/TourDetails";
const data = require("./data/db.json");

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home data={data} />}></Route>
        <Route path="/city/:id" element={<TourDetails description={data}/>}></Route>
      </Routes>

  
    </div>
  );
}

export default App;
