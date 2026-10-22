import { Link } from "react-router-dom";

/**
 * A footer column with a bold heading and a list of links.
 * @param {Object} props
 * @param {string} props.title - Column heading
 * @param {{ label: string, to: string }[]} props.links - Links shown under the heading
 */
const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-y-4.25">
      <p className="text-ink text-base font-bold">{title}</p>
      <ul className="flex flex-col gap-y-1.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="text-body hover:text-ink text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
