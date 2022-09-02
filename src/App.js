import Naviagtion from "./components/naviagtion/Navigtion";
import Header from "./components/header/Header";
import headerImg from "./images/header.png";
import Pickup from "./components/pickupSection/Pickup";
import Story from "./components/ourStory/Story";
import storyBck from "./images/whiteBck.png";
import Package from "./components/packagesSection/Package";
import pckImg from "./images/pckImg.png";
import Menu from "./components/menuSection/menu";
import "./App.css";
import "./reset.css";
import Map from "./components/mapSection/Map";
import Fotter1 from "./components/footerFirstSection/Fotter1";
import Footer2 from "./components/footerSecSection/Footer2";
function App() {
  return (
    <div>
      <Naviagtion />
      <div
        style={{ backgroundImage: `url("${headerImg}")` }}
        className="bckImg"
      >
        <Header />
      </div>
      <div>
        <Pickup />
      </div>
      <div
        className="storyBck"
        style={{ backgroundImage: `url("${storyBck}")` }}
      >
        <Story />
      </div>
      <div className="pckBck" style={{ backgroundImage: `url("${pckImg}")` }}>
        <Package />
      </div>
      <Menu />
      <Map />
      <Fotter1 />
      <Footer2 />
    </div>
  );
}

export default App;
