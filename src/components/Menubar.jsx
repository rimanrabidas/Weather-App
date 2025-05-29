import { FiMinimize2 } from "react-icons/fi";
import { IoMoon, IoSunny } from "react-icons/io5";
import { UseApi } from "../../BioContext";
import { TiHome } from "react-icons/ti";
import { MdSearch } from "react-icons/md";
import {
  FaAngleDown,
  FaAngleUp,
  FaArrowTrendUp,
  FaLinkedin,
  FaSquareGithub,
} from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import { FaTelegramPlane, FaTwitterSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiSolidWidget } from "react-icons/bi";

const Menubar = ({
  menubar,
  setMenubar,
  setSearchPage,
  searchPage,
  homepageForecast,
  setHomepageForecast,
  menuItem,
  hideToggle,
  hideWeight,
}) => {
  const { setTheme, theme } = UseApi();
  const handleSearchBer = () => {
    setSearchPage(!searchPage);
    setMenubar(!menubar);
  };

  const [weightBer, setWeightBer] = useState(true);

  useEffect(() => {
    if (menubar === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menubar]);

  if (menubar === false) return null;
  return (
    <div
      className={` ${
        menubar === false
          ? "w-0 h-0 fixed top-7 left-10"
          : "w-full h-full fixed"
      } overflow-hidden transition-all duration-100 top-0 left-0 z-50   bg-black/70`}
    >
      <div
        className={`relative flex flex-col lg:w-[30%] w-[70%] h-full ${
          theme === true ? "bg-violet-100" : "bg-zinc-800"
        } rounded-tr-2xl rounded-br-2xl `}
      >
        <FiMinimize2
          onClick={() => setMenubar(!menubar)}
          className={` sideBerAndLocationTrack size-11 border-1 border-black/20 p-2 rounded-md ${
            theme === true ? "text-violet-700" : "text-zinc-200"
          } hover:scale-105 cursor-pointer absolute top-2 right-2`}
        />

        <div
          onClick={() => setTheme(!theme)}
          className="ThemeIcon flex justify-center items-center size-11 border-1 border-black/20 p-2 rounded-md hover:scale-105 cursor-pointer absolute top-2 left-2"
        >
          {theme === false ? (
            <IoSunny className=" ThemeChange size-12 text-yellow-400" />
          ) : (
            <IoMoon className=" ThemeChange size-12 text-zinc-900" />
          )}
        </div>
        <div
          className={` flex flex-col gap-4 w-full h-[75%] mt-13 p-2 ${
            theme === true ? "text-black/80" : "text-white/80"
          }`}
        >
          <div className="w-full h-[1px] bg-zinc-300"></div>

          <NavLink
            to={"/"}
            onClick={() => setMenubar(!menubar)}
            className="flex w-full h-fit text-xl gap-5 items-center"
          >
            <TiHome className="size-8" /> Home
          </NavLink>
          <div
            onClick={handleSearchBer}
            className="flex w-full h-fit text-xl gap-5 items-center"
          >
            <MdSearch className="size-8" /> Search{" "}
          </div>
          <NavLink
            to={"/forecast"}
            className="flex w-full h-fit text-xl gap-5 items-center"
          >
            <FaArrowTrendUp className="size-8" /> Forecast
          </NavLink>

          <div className={`flex w-full h-fit items-center flex-row gap-5  `}>
            <IoMdMoon className="size-8 " />
            <p className="text-xl">Theme </p>
            <button
              onClick={() => setTheme(!theme)}
              className={`w-12 h-5 rounded-full  menuShadow ${
                theme === true ? "bg-black" : "bg-amber-400"
              } flex items-center`}
            >
              {" "}
              <div
                className={`w-6 h-4  rounded-full  ${
                  theme === true ? "bg-white ml-0.5" : "ml-5.5 bg-black/80"
                } `}
              ></div>
            </button>
          </div>
          <div className="flex w-full h-fit items-center flex-row gap-5  ">
            <p>Hourly Forecast On Homepage</p>
            <button
              onClick={() => setHomepageForecast(!homepageForecast)}
              className={`w-12 h-5 rounded-full  menuShadow ${
                homepageForecast === false ? "bg-black" : "bg-violet-500"
              } flex items-center`}
            >
              {" "}
              <div
                className={`w-6 h-4  rounded-full  ${
                  homepageForecast === false
                    ? "bg-white ml-0.5"
                    : "ml-5.5 bg-black/80"
                } `}
              ></div>
            </button>
          </div>
          <div
            onClick={() => setWeightBer(!weightBer)}
            className={`${weightBer ? "rounded-2xl" : "rounded-t-2xl"} ${
              theme === true ? "bg-white/40" : "bg-black/20"
            } flex text-xl items-center p-1 justify-between pr-5  `}
          >
            <div className="flex items-center gap-2">
              <BiSolidWidget className="size-8" /> Weight Hide
            </div>{" "}
            {weightBer ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          <div
            className={`${weightBer ? "h-0" : "h-48"} ${
              theme === true ? "bg-white/40" : "bg-black/20"
            } w-full flex flex-col overflow-hidden transition-all duration-300 -mt-3 rounded-b-2xl`}
          >
            {menuItem.map(({ id, description }) => (
              <div
                key={id}
                className="flex w-full  justify-between p-1 pl-3 pr-3"
              >
                {" "}
                {description}{" "}
                <button
                  onClick={() => hideToggle(id)}
                  className={`w-12 h-5 rounded-full  menuShadow ${
                    hideWeight[id] ? "bg-black" : "bg-violet-500"
                  } flex items-center`}
                >
                  {" "}
                  <div
                    className={`w-6 h-4  rounded-full  ${
                      hideWeight[id] ? "bg-white ml-0.5" : "ml-5.5 bg-black/80"
                    } `}
                  ></div>
                </button>{" "}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex flex-col w-full h-20 items-center justify-center gap-2 ${
            theme === true ? "text-black/80" : "text-white/80"
          }`}
        >
          <div className=" flex w-full h-fit gap-2 items-center justify-center">
            {" "}
            <p> Contact me</p> / <p>Socials</p>{" "}
          </div>
          <div className="flex w-full h-fit gap-5 items-center justify-center">
            <FaLinkedin className="size-6" />
            <FaSquareGithub className="size-6" />
            <FaTwitterSquare className="size-6" />
            <FaTelegramPlane
              className={`size-6 ${
                theme === true
                  ? "text-violet-100 bg-black/80"
                  : "bg-white/80 text-black/80"
              }  rounded-sm p-[2px]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
