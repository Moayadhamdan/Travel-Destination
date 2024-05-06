import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar(){
  return (
    <div className="navbar-container">
      <h1 className="navbar-title">Travel Destination</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default NavBar;
