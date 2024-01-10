import { SIDE_LABELS } from "@/utils/constants";

export default function SideLabels() {
  return (
    <div className="grid grid-rows-[4fr,1fr,3fr,2fr] w-[100px] h-full text-gray-500 font-bold">
      {SIDE_LABELS.map((label, index) => (
        <p
          key={index}
          className={`text-center h-full flex justify-center items-center border-r border-gray-300 ${
            index !== SIDE_LABELS.length - 1 ? "border-b" : ""
          }`}
        >
          {label}
        </p>
      ))}
    </div>
  );
}
