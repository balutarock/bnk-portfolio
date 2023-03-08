import React, { useState } from "react";

// import { BsListStars } from "react-icons/Bs";
// import { IoIosClose } from "react-icons/Io";

import NavLinks from "../molecules/NavLinks";
import Anchor from "../atoms/Anchor";
import MobileNav from "../molecules/MobileNav";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="drop-shadow-xl bg-white fixed top-0 left-0 right-0">
      <div className="flex justify-between md:justify-around pt-4 pb-4 pr-4 pl-4 w-full">
        <Anchor data={{ id: 1, title: "Balu" }} />
        <NavLinks />
        <button onClick={onClickMenu} className="md:hidden text-lg">
          {showMenu
            ? // <IoIosClose />
              "X"
            : // <BsListStars />
              "Menu"}
        </button>
      </div>
      {showMenu ? <MobileNav /> : ""}
    </header>
  );
};

export default Header;
