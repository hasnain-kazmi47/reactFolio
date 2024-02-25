import heroImg from "./assets/img/hero-bg.jpg";
import { useSelector } from "react-redux";

const Hero = () => {
  const userData = useSelector((state) => {
    return state.data
  })
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              {/* <p className="display-6 color-d">Hello, world!</p> */}
              <h1 className="hero-title mb-4">{userData.name && `I am ${userData.name}`}</h1>
              <p className="hero-subtitle">
                <span
                  className="typed"
                  data-typed-items="Designer, Developer, Freelancer, Photographer"
                ></span>
              </p>
              {/* <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p>  */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}
    </>
  );
};

export default Hero;
