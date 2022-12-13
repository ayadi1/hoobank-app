import "./Navbar.css";
import { logo } from "../../assets";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import { useState } from "react";
import { navLinks } from "../../constants";
const Links = navLinks.map((link) => (
  <a href={"#" + link.title} key={link.id}>
    {link.title}
  </a>
));
export default function Navbar() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="app__Navbar">
      <div className="app__Navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="app__Navbar-links">{Links}</div>
      <div className="app__Navbar-icons">
        {isShowing ? (
          <HiX color="#fff" onClick={() => setIsShowing((old) => !old)} />
        ) : (
          <HiOutlineMenuAlt1
            color="#fff"
            onClick={() => setIsShowing((old) => !old)}
          />
        )}
      </div>
      <div className="app__Navbar-mobile-menu ">
        {isShowing && (
          <div className="app__Navbar-mobile-menu-links sidebar">{Links}</div>
        )}
      </div>
    </div>
  );
}
