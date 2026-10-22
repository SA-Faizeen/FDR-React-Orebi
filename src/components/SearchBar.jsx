import { TbSearch } from "react-icons/tb";

const SearchBar = () => {
  return (
    <div className="relative w-1/2">
      <input
        type="text"
        placeholder="Search Products"
        className="placeholder:text-placeholder w-full bg-white p-3 placeholder:text-sm"
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
