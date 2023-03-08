import H1Name from "../atoms/H1Name";
import Description from "../atoms/Description";
import SkillCard from "../molecules/SkillCard";

// import { AiFillHtml5 } from "react-icons/Ai";

const frontendSkills = [
  {
    id: 0,
    title: "HTML",
    level: "Intermediat",
    // icon: <AiFillHtml5 className="text-lg" />,
  },
  {
    id: 1,
    title: "CSS",
    level: "Intermediat",
    // icon: <AiFillHtml5 className="text-lg" />,
  },
  {
    id: 2,
    title: "JavaScript",
    level: "Intermediat",
    // icon: <AiFillHtml5 className="text-lg" />,
  },
  {
    id: 3,
    title: "Bootstrap",
    level: "Intermediat",
    // icon: <AiFillHtml5 className="text-lg" />,
  },
  {
    id: 4,
    title: "Git",
    level: "Intermediat",
    // icon: <AiFillHtml5 className="text-lg" />,
  },
  {
    id: 5,
    title: "React JS",
    level: "Intermediat",
    // icon: <AiFillHtml5 className="text-lg" />,
  },
  {
    id: 6,
    title: "Next JS",
    level: "Intermediat",
    // icon: <AiFillHtml5 className="text-lg" />,
  },
  {
    id: 7,
    title: "Tailwind CSS",
    level: "Intermediat",
    // icon: <AiFillHtml5 className="text-lg" />,
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <H1Name name={"Skills"} />
        <Description description={"My technical level"} />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center m-2">
        <SkillCard heading={"Frontend"} skillsList={frontendSkills} />
        <SkillCard heading={"Backend"} skillsList={frontendSkills} />
      </div>
    </div>
  );
};

export default Skills;
