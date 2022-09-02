import "./Map.css";

const Map = () => {
  return (
    <section className="mapSection">
        <div className="maptext">
      <h2 className="mapH2">FIND US ON THE MAP</h2>
      <p className="mapDesc">
        2215 US Highway 1 South, North Brunswick, NJ 08902
      </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48581.503992715356!2d-74.50820492769282!3d40.445522616474385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c45e57bee9f5%3A0x529e35181b1c0ed0!2sNorth%20Brunswick%20Township%2C%20NJ%2C%20USA!5e0!3m2!1sen!2s!4v1662114803848!5m2!1sen!2s"
        width="100%"
        height="350"
      ></iframe>
    </section>
  );
};

export default Map;
