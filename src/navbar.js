import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Dogs", path: "/dogs" },
  { name: "Cats", path: "/cats" },
  { name: "Other Animals", path: "/other-animals" },
];

const Navbar = () => {
  return (
    <div className="navbar w-full bg-base-100 shadow-sm px-4 py-3">
      {/* LEFT — Logo */}
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg">
            🐾
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-tight text-neutral">Hopeful Tails</span>
            <span className="text-xs uppercase opacity-80 text-neutral">Animal Adoption</span>
          </div>
        </Link>
      </div>

      {/* CENTER — Always visible menu */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 gap-2 text-sm font-medium flex-wrap">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex" />
    </div>
  );
};

export default Navbar;