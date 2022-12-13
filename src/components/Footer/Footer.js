import "./Footer.css";
import { footerLinks, socialMedia } from "../../constants";
import { logo } from "../../assets";
import LinksList from "./LinksList";
import Img from "../Hero/Img";
export default function Footer() {
  return (
    <div className="app__Footer">
      <div className="app__Footer-links">
        <div className="app__Footer-links__logo">
          <img src={logo} alt="logo" />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="app__Footer-links__list">
          {footerLinks.map((link) => (
            <LinksList key={link.title} title={link.title} links={link.links} />
          ))}
        </div>
      </div>
      <div className="app__Footer-social">
        <p>
          &copy; coded by{" "}
          <a href="https://www.linkedin.com/in/oussama-ayadi1/">
            oussama ayadi
          </a>
        </p>
        <div className="app__Footer-social-links">
          {socialMedia.map((icon, i) => (
            <Img key={i} img={icon.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
