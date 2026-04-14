import { VscBellDot } from "react-icons/vsc";

const header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-neutral-800 text-lg font-extrabold">
        FamilyFriends
      </h1>
      <VscBellDot className="*:last:fill-red-300 *:first:fill-neutral-800 w-6 h-6" />
    </div>
  );
};

export default header;
