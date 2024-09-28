import { Route, Routes } from "react-router-dom";
import Programs from "../Tabs/Admin/Information/programs/Programs";
import Levels from "../Tabs/Admin/Information/levels/Levels";

export default function NavigationComponent() {
  return (
    <div className="bg-gray-200 w-full p-4 mt-[55px]">
      <Routes>
        <Route path="/admin/information/programs" element={<Programs />} />
        <Route path="/admin/information/levels" element={<Levels />} />
      </Routes>
    </div>
  );
}
