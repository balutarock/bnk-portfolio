import { SlBadge } from "react-icons/Sl";
import { BsBagHeart } from "react-icons/Bs";
import { BiSupport } from "react-icons/Bi";
import Label from "../atoms/Label";
import Card from "../atoms/Card";

const list = [
  {
    id: 0,
    title: "Experience",
    description: "1 Year",
    icon: <SlBadge className="text-xl" />,
  },
  {
    id: 1,
    title: "Completed",
    description: "10+ Projects",
    icon: <BsBagHeart className="text-xl" />,
  },
  {
    id: 2,
    title: "Support",
    description: "Online 24/7",
    icon: <BiSupport className="text-xl" />,
  },
];

const AboutMeList = () => {
  return (
    <ul className="flex flex-row justify-center items-center flex-wrap mt-4">
      {list.map((each) => (
        <li key={each.id}>
          <Card
            childElements={
              <li>
                {each.icon}
                <Label name={each.title} styles={"font-semibold text-sm"} />
                <Label
                  name={each.description}
                  styles={"text-gray-500 text-sm"}
                />
              </li>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default AboutMeList;
