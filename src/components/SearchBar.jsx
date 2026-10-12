import { TbSearch } from "react-icons/tb";

const SearchBar = () => {
  return (
    <div className="relative w-1/2">
      <input
        type="text"
        placeholder="Search Products"
        className="w-full bg-white p-5 placeholder:text-[#c4c4c4] placeholder:text-sm"
      />
      <button
        type="button"
        aria-label="Search"
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-ink"
      >
        <TbSearch size={18} />
      </button>
    </div>
  );
};

export default SearchBar;