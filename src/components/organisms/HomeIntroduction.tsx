import H1Name from "../atoms/H1Name";
import Image from "../atoms/Image";
import Designation from "../atoms/Designation";
import Description from "../atoms/Description";
import ButtonSayHello from "../atoms/ButtonSayHello";

const imageURL =
  "https://res.cloudinary.com/dxnhvq8pl/image/upload/v1678215739/movie%20app%20mini%20project/031A9116_1_nxjvgs.jpg";

const HomeIntroduction = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-20 md:mt-4 min-h-screen pr-10 pl-10">
      <Image src={imageURL} />
      <div className="flex flex-col justify-center items-center md:ml-20 mt-20 md:mt-0 max-w-lg">
        <H1Name name={"Bala Nagendra Kumar"} />
        <div className="w-full flex flex-row justify-center items-center">
          {/* <hr className="w-full text-lg font-black font-blod" /> */}
          <Designation name={"Full Stack Software Developer"} />
          {/* <hr className="w-full text-lg font-black font-blod" /> */}
        </div>
        <Description
          description={
            "Software developers write code using programming languages, build software components, and test their designs. As a part of software testing, developers address issues or errors. After deploying an application, software developers perform maintenance, updates, and upgrades as needed."
          }
        />
        <ButtonSayHello name={"Say Hello"} />
      </div>
    </div>
  );
};

export default HomeIntroduction;
