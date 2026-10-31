import { Flex } from "faizen-react-components";
import { Link, NavLink } from "react-router-dom";
import Container from "../components/Container";
import logo from "../assets/Logo.png";
import Bars from "../assets/icons/Bars.jsx";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import SearchBar from "../components/SearchBar.jsx";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  function showCategoryMenu() {
    document.querySelector(".category-menu")
    .classList
    .toggle("shown");
  }

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
            <div className="group relative w-1/4">
              <button
                type="button"
                className="flex items-center gap-x-3.5 py-5"
                onClick={showCategoryMenu}
              >
                <Bars />
                <p className="text-ink text-sm">Shop by Category</p>
              </button>

              <div className="category-menu">
                <ul>
                  <li className="category-item">
                    <span>Accessories</span>
                  </li>
                  <li className="category-item">
                    <span>Furniture</span>
                  </li>
                  <li className="category-item">
                    <span>Electronics</span>
                  </li>
                  <li className="category-item">
                    <span>Clothes</span>
                  </li>
                  <li className="category-item">
                    <span>Bags</span>
                  </li>
                  <li
                    className="category-item"
                    style={{ borderBottomWidth: 0 }}
                  >
                    <span>Home appliances</span>
                  </li>
                </ul>
              </div>
            </div>

            <SearchBar className="placeholder:text-placeholder placeholder:text-sm" />
            <div className="flex w-1/4 items-center justify-end-safe gap-x-10">
              <button>
                <Flex className="items-center gap-x-1">
                  <FaUser />
                  <FaCaretDown />
                </Flex>
              </button>
              <button className="relative">
                <FaShoppingCart />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#15CBA5] text-xs font-bold text-white">
                    {totalQuantity}
                  </span>
                )}
              </button>
            </div>
          </Flex>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
