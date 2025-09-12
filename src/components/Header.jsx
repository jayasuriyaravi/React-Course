import { LogoImg } from "../utils/data";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="head-container">
      <img className="img-con" src={LogoImg} alt="JS Workshop" />
      <div className="nav-cont">
        <ul className="nav-items">
         <Link to="/"><li>Home</li></Link>
         <Link to="/contact"><li>contact</li></Link>
         <Link to="/about"><li>about</li></Link>
         <Link to="/cart"><li>cart</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;