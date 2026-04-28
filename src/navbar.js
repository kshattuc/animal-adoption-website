const navItems = [
  { name: "Home", path: "/" },
  { name: "Dogs", path: "/dogs" },
  { name: "Cats", path: "/cats" },
  { name: "Other Animals", path: "/other-animals" }
];

const Navbar = () => {
  return (
    <ul className="nav justify-content-end">
      {navItems.map((item, index) => (
        <li className="nav-item" key={index}>
          <a className="nav-link" href={item.path}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;