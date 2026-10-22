import { Flex } from "faizen-react-components";
import { Link, NavLink } from "react-router-dom";
import Container from "../components/Container";
import logo from "../assets/Logo.png";
import Bars from "../assets/icons/Bars.jsx";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import SearchBar from "../components/SearchBar.jsx";

const Header = () => {
  return (
    <header>
      <nav c="top header" className="border-b border-[#979797] bg-white py-4">
        <Container>
          <Flex className="gap-x-85">
            <Link c="logo" to="/">
              <img src={logo} alt="company logo" />
            </Link>
            <div c="nav-links">
              <ul className="flex w-95.5 items-center gap-10">
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <NavLink className="nav-link" to="shop">
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="contacts">
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </nav>
      <nav
        c="bottom header"
        className="bg-surface border-b border-[#979797] py-4"
      >
        <Container>
          <Flex className="justify-between">
            <button
              c="shop by category"
              className="flex w-1/4 items-center gap-x-3.5 py-5"
            >
              <Bars />
              <p className={`text-ink text-sm`}>Shop by Category</p>
            </button>
            <SearchBar className="placeholder:text-placeholder placeholder:text-sm" />
            <div className="flex w-1/4 items-center justify-end-safe gap-x-10">
              <button>
                <Flex className="items-center gap-x-1">
                  <FaUser />
                  <FaCaretDown />
                </Flex>
              </button>
              <button>
                <FaShoppingCart />
              </button>
            </div>
          </Flex>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
