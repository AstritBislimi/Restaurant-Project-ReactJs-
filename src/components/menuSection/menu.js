import "./menu.css";
import riceImg from "../../images/rice.png";

const Menu = () => {
  return (
    <section className="menuSection col-12">
      <img src={riceImg}></img>
      <div className="menuText">
        <h2 className="defaultH2"> OUR MENU</h2>
        <div className="underline"></div>
        <p className="menuP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur vulputate molestie. In ut luctus eros. Etiam ut est sem.
          Donec pellentesque condimentum mi quis finibus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec consectetur vulputate molestie. In
          ut luctus eros. Etiam ut est sem. Donec pellentesque condimentum mi
          quis finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <button className="storyBtn">Check out full menu</button>
      </div>
    </section>
  );
};


export default Menu
