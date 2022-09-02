import "./Story.css";
import storyImg from "../../images/storyImg.png";
import uberImg from "../../images/uber-logo.png";
import halalImg from "../../images/halal-logo.png";
const Story = () => {
  return (
    <section className=" storySection col-10">
      <div className="storyContainer">
        
        <img className="storyImg col-5" src={storyImg}></img>
        <div className="storyText">
          <h2 className="defaultH2">OUR STORY</h2>
          <div className="underline"></div>
          <p className="storyP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur vulputate molestie. In ut luctus eros. Etiam ut est sem.
            Donec pellentesque condimentum mi quis finibus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
          <button className="storyBtn">KNOW MORE ABOUT US</button>
        </div>
      </div>
      <div className="certification">
        <img src={uberImg} className= "col-2"></img>
        <img src={halalImg} className="col-2"></img>
      </div>
    </section>
  );
};


export default Story
