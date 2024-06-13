import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import NavbarResponsive from "./NavbarResponsive";
import "./Navbar.css";
const Navbar = () => {
  const [scrollVal, setScrollVal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollVal(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundImage: `${
          scrollVal
            ? "linear-gradient(318deg, #9066dd -12.31%, #fff0 97.92%), linear-gradient(#160040, #160040)"
            : "none"
        }`,
        backgroundSize: "100% 100%",
        transition: "box-shadow 0.3s ease",
      }}
      className={`h-20 flex items-center xs:justify-between lg:justify-evenly xs:px-5 lg:px-5 ${
        scrollVal ? "fixed top-0 left-0 w-full z-50" : ""
      }`}
    >
      {/**logo */}
      <div>
        <h3 className="font-medium">
          <span className="text-primaryText">
            Mo.Mubarak<span className="text-[18px] animate-pulse">👨‍💻</span>
          </span>
        </h3>
        <span className="text-xs capitalize text-gray-500 animate-pulse">
          software engineering
        </span>
      </div>
      {/**ul list */}
      <ul className="nav-links hidden  lg:flex lg:items-center lg:justify-center md:gap-0 lg:gap-0  ">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="artical"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Artical
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="certificates"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Certificates
          </Link>
        </li>
        <li className="bg-bgColorBtn shadow-lg hover:bg-bgColorBtnHover hover:text-primaryText hover:transition hover:duration-150">
          <Link
            activeClass="active"
            to="talk"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Talk to us
          </Link>
        </li>
      </ul>

      <NavbarResponsive />
    </nav>
  );
};

export default Navbar;
