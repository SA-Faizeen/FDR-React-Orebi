import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

const LayoutBtn = ({ type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-gray-mid border-line hover:bg-ink border bg-white p-2.5 hover:text-white hover:border-ink transition-colors duration-300`}
    >
      {type === "grid" ? <IoGrid /> : <FaThList />}
    </button>
  );
};

export default LayoutBtn;
