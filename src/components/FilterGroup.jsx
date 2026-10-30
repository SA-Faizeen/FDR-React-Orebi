import { GoDotFill } from "react-icons/go";

/**
 * A titled list of filter options.
 * @param {Object} props
 * @param {string} props.title - Group heading
 * @param {{ label: string, color?: string }[]} props.items - Options; a color adds a dot
 */
const FilterGroup = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-ink pb-8.75 text-xl font-bold">{title}</h3>
      <ul className="flex flex-col gap-5">
        {items.map((item) => (
          <li key={item.label} className="shop-category">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-x-2.5"
            >
              {item.color && <GoDotFill color={item.color} />}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;