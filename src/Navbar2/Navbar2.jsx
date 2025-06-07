import "./Navbar2.css";

export const Navbar2 = ({
  text = "undefined",
  text2 = "undefined",
  visibleComponent = undefined,
  visibleComponent2 = undefined,
  visibleComponent3 = undefined,
  visibleComponent4 = undefined,
  visibleComponent5 = undefined,
  visibleComponent6 = undefined,
  visibleComponent7 = undefined,
  className,
  ...props
}) => {
  return (
    <div className={"navbar-2 " + className}>
      <div className="container">
        <div className="column"></div>
        <div className="column2">
          <div className="home">Home </div>
          <div className="portfolio">Portfolio </div>
          <div className="about-us">About Us </div>
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};
