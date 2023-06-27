import { Link } from "react-router-dom";
import image from "../assets/icons/pizza.jpg";

const divStyle = {
  width: "100%",
  height: "95vh",
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
        </div>

        <div className="w3-display-top w3-center">
          <span className="w3-text-white w3-hide-large w3-hide-medium" ><b>thin<br />CRUST PIZZA</b></span>
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
