import {
  Bars3Icon,
  BellAlertIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
export default function Headers() {
  return (
    <div className="px-5 py-3 flex justify-between border-b fixed top-0 z-[100] right-0 left-0 bg-white">
      <div className="flex items-center gap-5">
        <Bars3Icon className="h-6 w-6" />
        <p className="text-2xl text-red-500 font-extrabold fredoka-google">
          Sanjivani
        </p>
      </div>
      <div>
        <div className="flex items-center gap-5">
          <BellAlertIcon className="h-6 w-6" />
          <Cog6ToothIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
