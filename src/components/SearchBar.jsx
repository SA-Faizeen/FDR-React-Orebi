import { TbSearch } from "react-icons/tb";

const SearchBar = ({ placeholder="Search Products", className="" }) => {
  return (
    <div className="relative w-1/2">
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full bg-white p-3 ${className}`}
      />
      <button
        type="button"
        aria-label="Search"
        className="text-ink absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
      >
        <TbSearch size={18} />
      </button>
    </div>
  );
};

export default SearchBar;
