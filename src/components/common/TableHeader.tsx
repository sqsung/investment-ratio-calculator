import { TABLE_HEADERS } from "@/utils/constants";

export default function TableHeader() {
  return (
    <div className="flex h-[50px] w-full bg-primary text-gray-100 font-bold">
      <p className="w-[100px] h-full flex justify-center items-center">구분</p>
      <div className="flex w-full justify-between">
        {TABLE_HEADERS.map((header, index) => (
          <p key={index} className="w-full h-full flex justify-center items-center">
            {header}
          </p>
        ))}
      </div>
    </div>
  );
}
