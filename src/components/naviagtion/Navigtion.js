import "./Navigation.css";

const Naviagtion = (props) => {
  return (
    <nav className="mainNav col-12">
      <p className="logo">logo</p>
      <ul className="navUl">
        <li className="navLi">
          <a className="navLink">Home</a>
        </li>
        <li className="navLi">
          <a className="navLink">Menu</a>
        </li>
        <li className="navLi">
          <a className="navLink">Banquet Facility</a>
        </li>
        <li className="navLi">
          <a className="navLink">Gallery</a>
        </li>
        <li className="navLi">
          <a className="navLink">CATERING</a>
        </li>
        <li className="navLi">
          <a className="navLink">Contact us</a>
        </li>
        <li className="navLi">
          <button className="navBtn">BOOK A BANQUET</button>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Naviagtion;
