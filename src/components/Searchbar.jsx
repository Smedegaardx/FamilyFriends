import { CgSearch } from "react-icons/cg";

const SearchBar = () => {
  return (
    <div className="flex flex-row gap-4 py-5">
      <div className="bg-red-300 w-12.5 h-12.5 rounded-full flex justify-center items-center">
        <CgSearch className="text-white rotate-y-180 h-6.5 w-6.5 ml-px mt-0.5" />
      </div>
      <input
        type="text"
        placeholder="search breeds"
        className="rounded-full px-6 text-zinc-300 w-68 border-zinc-300 border"
      ></input>
    </div>
  );
};

export default SearchBar;
