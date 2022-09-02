import "./Footer2.css";
import logo from "../../images/logo.png";

const Footer2 = () => {
  return (
    <section className="copyright">
      <img src={logo}></img>
      <div className="copyrightText">
        <p className="copyrightP">
          Copyright © 2020 Restaurant Name. All Rights Reserved.
        </p>
        <p className="copyrightP">
          Website designed by <span>Astrit Bislimi</span>
        </p>
        <button className="footerBtn">Order Online</button>
      </div>
    </section>
  );
};

export default Footer2;
