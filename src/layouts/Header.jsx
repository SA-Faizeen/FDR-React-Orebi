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
      <nav c="top header" className="py-4 bg-white border-b	 border-[#979797]">
        <Container>
          <Flex className="gap-x-85">
            <Link c="logo" to="/">
              <img src={logo} alt="company logo" />
            </Link>
            <div c="nav-links">
              <ul className="flex items-center gap-10 w-95.5">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <NavLink to="shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="about">About</NavLink>
                </li>
                <li>
                  <NavLink to="contacts">Contacts</NavLink>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </nav>
      <nav c="bottom header" className="py-4 bg-surface border-b border-[#979797]">
        <Container>
          <Flex className="justify-between">
            <button
              c="shop by category"
              className="flex items-center w-1/4 gap-x-3.5 py-5"
            >
              <Bars />
              <p className={`text-sm text-ink`}>Shop by Category</p>
            </button>
            <SearchBar />
            <div className="flex w-1/4 items-center gap-x-10 justify-end-safe">
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
