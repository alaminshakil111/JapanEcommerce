import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Track submenu state

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    {
      label: "Our Service",
      subMenu: [
        { to: "/services/create-website", label: "Create Website" },
        { to: "/services/develop-website", label: "Develop Website" },
        { to: "/services/hiring-developer", label: "Hiring Developer" },
      ],
    },
    { to: "/testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">LOGO</div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link, index) =>
            link.subMenu ? (
              <li key={index} className="relative group">
                <button className="flex items-center gap-1">
                  {link.label} <HiChevronDown />
                </button>
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-md w-48">
                  {link.subMenu.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={subLink.to}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                        {subLink.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`
                  }>
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              {navLinks.map((link, index) =>
                link.subMenu ? (
                  <li key={index}>
                    <button
                      onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                      className="w-full flex justify-between text-gray-700 py-2">
                      {link.label} <HiChevronDown />
                    </button>
                    {isSubMenuOpen && (
                      <ul className="ml-4 space-y-2">
                        {link.subMenu.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={subLink.to}
                              className="block text-gray-600 hover:text-blue-600"
                            >
                              {subLink.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <NavLink
                      to={link.to}
                      className="block py-2 text-gray-700 hover:text-blue-600">
                      {link.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
