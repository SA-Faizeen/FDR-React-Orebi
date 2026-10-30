import { FaChevronDown } from "react-icons/fa6";
import LayoutBtn from "./LayoutBtn";

/**
 * Layout-only toolbar above the product grid: view buttons on the left,
 * sort and show boxes on the right. Nothing here is interactive yet.
 */
const ShopToolbar = () => {
  return (
    <div className="flex items-center justify-between pb-10">
      <div className="flex items-center gap-x-2.5">
        <LayoutBtn type="grid" />
        <LayoutBtn type="list" />
      </div>

      <div className="text-muted flex items-center gap-x-10 text-sm">
        <div className="flex items-center gap-x-3">
          <span>Sort By:</span>
          <button
            type="button"
            className="border-line flex w-56 items-center justify-between border px-4 py-2"
          >
            Featured
            <FaChevronDown size={10} />
          </button>
        </div>
        <div className="flex items-center gap-x-3">
          <span>Show:</span>
          <button
            type="button"
            className="border-line flex w-28 items-center justify-between border px-4 py-2"
          >
            36
            <FaChevronDown size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopToolbar;