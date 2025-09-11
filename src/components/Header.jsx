import { LogoImg } from "../utils/data";
function Header() {
  return (
    <div className="head-container">
      <img className="img-con" src={LogoImg} alt="JS Workshop" />
      <div className="nav-cont">
        <ul className="nav-items">
          <li>Home</li>
          <li>offer</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;