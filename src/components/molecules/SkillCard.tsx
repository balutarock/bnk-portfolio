import { TiTickOutline } from "react-icons/Ti";
import Label from "../atoms/Label";
import Card from "../atoms/Card";

const SkillCard = (props: any) => {
  const { heading, skillsList } = props;
  return (
    <Card
      childElements={
        <>
          <Label name={"front end"} styles={"text-normal font-semibold mb-4"} />
          <ul className="flex flex-row justify-between items-center flex-wrap">
            {skillsList.map((each: any) => (
              <li
                className="flex flex-row justify-center items-center mr-4"
                key={each.id}
              >
                <TiTickOutline className="mr-2" />
                <div>
                  <Label name={each.title} styles={"text-sm font-semibold"} />
                  <Label name={each.level} styles={"text-sm text-gray-400"} />
                </div>
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
};

export default SkillCard;
