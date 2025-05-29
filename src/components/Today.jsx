import { GiNinjaStar } from "react-icons/gi";
import { UseApi } from "../../BioContext";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";

const Today = ({ highLightItem, hideToggle, hideWeight }) => {
  const { theme } = UseApi();
  const [hideIcon, setHideIcon] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
  });
  const ToggleIcon = (id) => {
    setHideIcon((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div className="flex flex-col mt-6 w-full h-fit lg:absolute lg:right-5 lg:top-13  lg:w-[60%] ">
      <div className="flex flex-row justify-between items-center  ">
        <div className="size-8">
          <GiNinjaStar
            className={`Rotate size-8 ${
              theme === true ? "text-violet-600" : "text-zinc-400"
            }`}
          />
        </div>
        <h1
          className={`boxShadow2 flex relative z-1 flex-row justify-center items-center text-xl font-bold text-white/90 pl-5 pr-5 pb-2 pt-2 rounded-b-[50%] rounded-t-[50%] outline-none  ${
            theme === true
              ? "bg-gradient-to-b from-violet-100 via-violet-600 to-violet-100"
              : "bg-zinc-700"
          }`}
        >
          {" "}
          Highlights
        </h1>

        {/*UseLess hai bhai*/}
        <div
          className={`outline-1 ${
            theme === true ? "outline-violet-600" : "outline-zinc-400"
          } w-[50%] left-10 absolute `}
        ></div>
        <div
          className={`outline-1 ${
            theme === true ? "outline-violet-600" : "outline-zinc-400"
          } w-[50%] right-10 absolute `}
        ></div>

        <p className="flex flex-row justify-center items-center ">
          <GiNinjaStar
            className={`Rotate2 size-8 ${
              theme === true ? "text-violet-600" : "text-zinc-400"
            }`}
          />
        </p>
      </div>

      <div
        className={` overflow-x-scroll grid grid-cols-2 lg:grid-cols-6 w-[98%] ml-1 h-fit ${
          theme === true
            ? "bg-gradient-to-b from-violet-50 to-white boxShadow3 "
            : "bg-gradient-to-b from-zinc-800 to-white/10 boxShadow3dark"
        } gap-5 p-3 mt-4 rounded-2xl`}
      >
        {highLightItem.map(
          ({ id, pic, value, description, math }) =>
            hideWeight[id] && (
              <div
                onClick={() => ToggleIcon(id)}
                key={id}
                className={`flex flex-col relative boxShadow text-white/90 ${
                  hideWeight[id] ? "block" : "hidden"
                } justify-between items-center ${
                  theme === true
                    ? "bg-violet-100 "
                    : "bg-gradient-to-b from-zinc-400 to-zinc-700 "
                }min-w-23 min-h-40 rounded-3xl hover:scale-105 cursor-pointer`}
              >
                <div
                  onClick={() => hideToggle(id)}
                  className={`${
                    hideIcon[id] ? "w-0 h-8" : "w-8 h-8"
                  } transition-all duration-100  overflow-hidden absolute top-[30%] left-[70%] flex `}
                >
                  <FaCommentAlt className="absolute size-8 text-white" />
                  <FaEyeSlash className="absolute size-4 top-1 left-2 text-black" />
                </div>
                <p
                  className={`flex shadow-xl rounded-t-2xl rounded-b-[100%] justify-center text-sm font-bold w-full  pb-1 pt-1 ${
                    theme === true
                      ? "bg-gradient-to-t from-violet-200 to-violet-600"
                      : "bg-gradient-to-t from-zinc-700 to-zinc-600"
                  }`}
                >
                  {description}
                </p>
                <span>{pic}</span>
                <h2
                  className={`flex rounded-b-3xl value rounded-t-[100%] justify-center text-xl font-bold pb-1 pt-1 w-full text-white/90 ${
                    theme === true
                      ? "bg-gradient-to-t from-violet-200 to-violet-600"
                      : "bg-gradient-to-t from-zinc-600 to-zinc-700"
                  }`}
                >
                  {value}
                  {math}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Today;
