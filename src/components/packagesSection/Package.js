import "./Package.css";
import cat1 from "../../images/cat1.png";
import cat2 from "../../images/cat2.png";
import cat3 from "../../images/cat3.png";

const Package = () => {
  return (
    <section className="packageSection">
      <h2 className="packageH2">CATERING FOR ALL OCCASIONS GURU CATERS</h2>
      <div className="pckImgs col-10">
        <img src={cat1} className="col-3"></img>
        <img src={cat2} className="col-3"></img>
        <img src={cat3} className="col-3"></img>
      </div>
      <button className="pckBtn">See all packages</button>
    </section>
  );
};

export default Package;
