import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Input, Button } from "../FormElements";

export default function SearchBar(props) {
  const { searchQuery, onSearchChange } = props;

  return (
    <div className="relative w-full">
      <IoIosSearch
        className="absolute left-[12px] top-[50%] transform -translate-y-[50%] text-[#9CA3AF]"
        size={24}
      />
      <Input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-[45px] pr-10 py-3"
      />
      {searchQuery && (
        <Button
          variant="ghost"
          className="absolute right-[12px] top-[50%] transform -translate-y-[50%] text-[#9CA3AF] hover:text-[#4B5563] p-0 bg-transparent"
          onClick={() => onSearchChange("")}
        >
          <RxCross2 size={20} />
        </Button>
      )}
    </div>
  );
}
