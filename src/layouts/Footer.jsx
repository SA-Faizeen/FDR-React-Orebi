import { Flex } from "faizen-react-components";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Container from "../components/Container";
import FooterColumn from "../components/FooterColumn";
import logo from "../assets/Logo.png";

const menuLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contacts" },
  { label: "Journal", to: "/journal" },
];

const shopLinks = [
  { label: "Category 1", to: "/shop" },
  { label: "Category 2", to: "/shop" },
  { label: "Category 3", to: "/shop" },
  { label: "Category 4", to: "/shop" },
  { label: "Category 5", to: "/shop" },
];

const helpLinks = [
  { label: "Privacy Policy", to: "#" },
  { label: "Terms & Conditions", to: "#" },
  { label: "Special E-shop", to: "#" },
  { label: "Shipping", to: "#" },
  { label: "Secure Payments", to: "#" },
];

const socials = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebookF />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FaLinkedinIn />,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-surface mt-35 h-auto w-full py-13.75">
      <Container>
        <Flex className="justify-between">
          <Flex className="gap-x-24">
            <FooterColumn title="MENU" links={menuLinks} />
            <FooterColumn title="SHOP" links={shopLinks} />
            <FooterColumn title="HELP" links={helpLinks} />
          </Flex>

          <div>
            <p className="text-ink text-base leading-6.75 font-bold">
              (052) 611-5711
            </p>
            <p className="text-ink text-base leading-6.75 font-bold">
              company@domain.com
            </p>
            <p className="text-body mt-3 text-sm">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>

          <Link to="/" className="block w-30 shrink-0">
            <img src={logo} alt="Orebi logo" />
          </Link>
        </Flex>

        <Flex className="mt-16 items-center justify-between">
          <div className="flex gap-x-5">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-ink text-base"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-body text-sm">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
