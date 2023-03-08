import Anchor from "../atoms/Anchor";

const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Skills", link: "/skills" },
  { id: 4, title: "Services", link: "/#" },
  { id: 5, title: "Portfolio", link: "/#" },
  { id: 6, title: "Contact", link: "/#" },
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
