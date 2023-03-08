import Anchor from "../atoms/Anchor";

const navLinks = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Skills" },
  { id: 4, title: "Services" },
  { id: 5, title: "Portfolio" },
  { id: 6, title: "Contact" },
];

const NavLinks = () => {
  return (
    <ul className="flex flex-wrap hidden md:flex">
      {navLinks.map((each: any) => (
        <li className="ml-4" key={each.id}>
          <Anchor data={each} />
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
