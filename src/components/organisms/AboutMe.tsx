import Designation from "../atoms/Designation";
import Description from "../atoms/Description";
import AboutMeImage from "../atoms/AboutMeImage";
import H1Name from "../atoms/H1Name";
import AboutMeList from "../molecules/AboutMeList";
import ButtonSayHello from "../atoms/ButtonSayHello";

const imageURL =
  "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1678215739/movie%20app%20mini%20project/031A9116_1_nxjvgs.jpg";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <H1Name name={"About Me"} />
        <Description description={"My Introduction"} />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <AboutMeImage src={imageURL} />
        <div className="flex flex-col justify-center items-center">
          <AboutMeList />
          <Description
            description={
              "Software developers write code using programming languages, build software components, and test their designs. As a part of software testing, developers address issues or errors. After deploying an application, software developers perform maintenance, updates, and upgrades as needed."
            }
          />
          <ButtonSayHello name={"Download CV"} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
