import "./Footer1.css";

const Fotter1 = () => {
  return (
    <section className="footer">
      <div className="col-3">
        <h2 className="footerH2">Have a Message?</h2>
        <form className="footerForm">
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="number" placeholder="Number"></input>
          <textarea placeholder="Your Message..."></textarea>
          <button className="formBtn">Send Inquiry</button>
        </form>
      </div>
      <div className="col-3">
        <h2 className="footerH2">Contact us</h2>
        <p className="footerP">
          2215 US Highway 1 South,<br></br> North Brunswick,<br></br> NJ 08902
        </p>
        <h2 className="footerH2 paddingH2">Call us at</h2>
        <p className="footerP"><b>P:</b> 123.456.789</p>
        <p className="footerP"><b>M:</b> 123.456.789</p>
        <p className="footerP"><b>M:</b> 123.456.789</p>
        <p className="footerP"><b>FAX:</b> 123.456.789</p>
        <p className="footerP"><b>Email:</b> 123.456.789</p>
      </div>
      <div className="col-3">
        <h2 className="footerH2">Quick Links</h2>
        <a className="footerP">Home</a>
        <a className="footerP">Menu</a>
        <a className="footerP">Banquet Facility</a>
        <a className="footerP">Gallery</a>
        <a className="footerP">Catering</a>
        <a className="footerP">Events</a>
        <a className="footerP">Contact us</a>
      </div>
      <div className="col-3">
        <h2 className="footerH2">Hours of operation</h2>
        <p className="footerOPs">6 DAYS OPEN</p>
        <p className="footerP">Monday, Wednesday-Friday: <br></br> 11:00AM to 3:00PM</p>
        <p className="footerP">Monday, Wednesday-Friday: <br></br> 5:00PM to 9:30PM</p>
        <p className="footerP">Saturday-Sunday: <br></br>10:00AM to 9:30PM</p>
        <p className="footerP">Tuesday <br></br>Closed</p>
      </div>
    </section>
  );
};

export default Fotter1;
