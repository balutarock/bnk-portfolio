// import { AiOutlineHome } from "react-icons/Ai";
// import {
//   MdPersonOutline,
//   MdOutlineHomeRepairService,
//   MdOutlineImageSearch,
// } from "react-icons/Md";
// import { FcDocument } from "react-icons/Fc";
// import { CiPaperplane } from "react-icons/Ci";

import Anchor from "../atoms/Anchor";

const navLinks = [
  {
    id: 1,
    title: "Home",
    // icon: <AiOutlineHome className="text-lg" />
  },
  {
    id: 2,
    title: "About",
    // icon: <MdPersonOutline className="text-lg" />
  },
  {
    id: 3,
    title: "Skills",
    // icon: <FcDocument className="text-lg" />
  },
  {
    id: 4,
    title: "Services",
    // icon: <MdOutlineHomeRepairService className="text-lg" />,
  },
  {
    id: 5,
    title: "Portfolio",
    // icon: <MdOutlineImageSearch className="text-lg" />,
  },
  {
    id: 6,
    title: "Contact",
    // icon: <CiPaperplane className="text-lg" />
  },
];

const MobileNav = () => {
  return (
    <div className="flex flex-wrap justify-center items-center pl-4 pr-4 md:hidden">
      {navLinks.map((each: any) => (
        <div
          key={each.id}
          className="flex flex-col justify-center items-center mr-5 mb-5"
        >
          {/* <div>{each.icon}</div> */}
          <Anchor data={{ id: each.id, title: each.title }} />
        </div>
      ))}
    </div>
  );
};

export default MobileNav;
