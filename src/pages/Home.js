import { Link } from "react-router-dom";
import image from "../assets/icons/pizza.jpg";

const divStyle = {
  width: "100%",
  height: "91vh",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
};

const Home = () => {
  return (

    <div
      style={divStyle}
      className=" w3-display-container w3-grayscale-min w3-image"
      id="home"
    >
      <div className="w3-display-bottomleft w3-padding">
        <span className="w3-tag w3-xlarge">Open from 10am to 12pm</span>
        <br />
      </div>

      <div className="w3-display w3-center">
        <br />
        <span className="w3-text-white w3-jumbo " ><b>THIN<br />CRUST PIZZA</b></span>
        <p>
          <Link to="/menu" className="w3-display-middle w3-button w3-xxlarge w3-black">
            Let me see the menu
          </Link>
        </p>
      </div>

    </div>
  );
};

export default Home;
