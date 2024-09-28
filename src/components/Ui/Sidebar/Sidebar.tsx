import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  BookOpenIcon,
  CalendarDateRangeIcon,
  ListBulletIcon,
  PresentationChartBarIcon,
  SparklesIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
      className={`top-0 left-0 h-screen w-[65px]`}
    >
      <div
        className="fl
      ex flex-col fixed top-14 z-[100] bg-white border "
      >
        <Link to={"/admin/information/programs"}>
          <div
            className={`flex items-center font-serif p-5 gap-5 hover:bg-gray-200`}
          >
            <p className="">
              <CalendarDateRangeIcon className="h-6 w-6" />
            </p>
            {isOpen && <p>Programs</p>}
          </div>
        </Link>
        <Link to={"/admin/information/mcourses"}>
          <div
            className={`flex items-center font-serif p-5 gap-5 hover:bg-gray-200`}
          >
            <p className="">
              <AcademicCapIcon className="h-6 w-6" />
            </p>
            {isOpen && <p>Courses Master</p>}
          </div>
        </Link>
        <div
          className={`flex items-center font-serif p-5 gap-5 hover:bg-gray-200`}
        >
          <p className="">
            <PresentationChartBarIcon className="h-6 w-6" />
          </p>
          {isOpen && <p>Activities</p>}
        </div>
        <Link to={"/admin/information/mactivity"}>
          <div
            className={`flex items-center font-serif p-5 gap-5 hover:bg-gray-200`}
          >
            <p className="">
              <ListBulletIcon className="h-6 w-6" />
            </p>
            {isOpen && <p>Activity Master</p>}
          </div>
        </Link>
        <Link to={"/admin/information/levels"}>
          <div
            className={`flex items-center font-serif p-5 gap-5 hover:bg-gray-200`}
          >
            <p className="">
              <ArrowTrendingUpIcon className="h-6 w-6" />
            </p>
            {isOpen && <p>Course Level</p>}
          </div>
        </Link>
        <div
          className={`flex items-center font-serif p-5 gap-5 hover:bg-gray-200`}
        >
          <p className="">
            <UserIcon className="h-6 w-6" />
          </p>
          {isOpen && <p>Volunteer</p>}
        </div>
        <div
          className={`flex items-center font-serif p-5 gap-5 hover:bg-gray-200`}
        >
          <p className="">
            <UserGroupIcon className="h-6 w-6" />
          </p>
          {isOpen && <p>Participants</p>}
        </div>
        <div
          className={`flex items-center font-serif p-5 gap-5 hover:bg-gray-200`}
        >
          <p className="">
            <SparklesIcon className="h-6 w-6" />
          </p>
          {isOpen && <p>Sadhana</p>}
        </div>
        <div
          className={`flex items-center font-serif p-5 gap-5 hover:bg-gray-200`}
        >
          <p className="">
            <BookOpenIcon className="h-6 w-6" />
          </p>
          {isOpen && <p>Program Registers</p>}
        </div>
      </div>
    </div>
  );
}
