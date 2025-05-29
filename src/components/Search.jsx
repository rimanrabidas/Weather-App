import { BiCurrentLocation } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import { GiModernCity } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { IoChevronBack, IoClose } from "react-icons/io5";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { UseApi } from "../../BioContext";
import { FaRedo } from "react-icons/fa";
import { useEffect, useRef } from "react";

const Search = ({ searchPage, setSearchPage, handleGeolocation }) => {
  const {
    inputCity,
    setInputCity,
    handleSearch,
    theme,
    setCity,
    history,
    setHistory,
    suggestions,
    setSuggestions,
    searchError,
    setSearchError,
  } = UseApi();
  console.log("i am suggestions :", suggestions);
  const handleBin = (value) => {
    console.log(value);
    const updateHistory = history.filter((curHistory) => curHistory !== value);
    setHistory(updateHistory);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputCity.trim() !== "") {
      handleSearch(inputCity);
    }
  };
  const inputRef = useRef(null);
  useEffect(() => {
    if (searchPage) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [searchPage]);

  const searchList = [
    {
      id: 1,
      img: <GiModernCity className="p-2 size-10 " />,
      heading: "London",
    },
    {
      id: 2,
      img: <GiModernCity className="p-2 size-10 " />,
      heading: "New York",
    },
    { id: 3, img: <GiModernCity className="p-2 size-10 " />, heading: "paris" },
    { id: 4, img: <GiModernCity className="p-2 size-10 " />, heading: "Tokyo" },
    { id: 5, img: <GiModernCity className="p-2 size-10 " />, heading: "Dubai" },
    {
      id: 6,
      img: <GiModernCity className="p-2 size-10 " />,
      heading: "Berlin",
    },
  ];

  useEffect(() => {
    if (searchPage === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchPage]);

  if (searchPage === false) return null;

  return (
    <div
      className={`flex ${
        searchPage === false
          ? "w-0  h-0  top-10 left-[50%]"
          : "w-full  h-[132%] "
      } transition-all duration-100 overflow-hidden  fixed  z-2 flex-col items-center  top-0 left-0 right-0 ${
        theme === true
          ? "bg-violet-100 lg:bg-black/50"
          : "lg:bg-white/50 bg-zinc-800"
      } `}
    >
      <div
        className={`flex  flex-col w-full h-full items-center ${
          theme === true ? "lg:bg-violet-100" : " lg:bg-zinc-800"
        } lg:w-[40%] lg:left-[30%] `}
      >
        <div
          className={`${!searchPage ? "hidden" : "block"} ${
            theme === true
              ? "bg-violet-100 headerLight"
              : "bg-zinc-800 headerDark"
          } w-full h-fit pb-1 pt-3 pr-5 pl-5 fixed top-0 right-0 flex flex-row justify-between lg:justify-evenly`}
        >
          <IoChevronBack
            onClick={() => setSearchPage(!searchPage)}
            className={` sideBerAndLocationTrack size-11 border-1 border-black/20 p-2 rounded-md  ${
              theme === true ? "text-violet-700 " : "text-zinc-200 "
            } hover:scale-105 cursor-pointe`}
          />
          <BiCurrentLocation
            onClick={handleGeolocation}
            className={` sideBerAndLocationTrack size-11 border-1  border-black/20 p-2 rounded-md ${
              theme === true ? "text-violet-700 " : "text-zinc-200 "
            } hover:scale-105 cursor-pointer `}
          />
        </div>

        <div className="w-[90%] h-12 mt-18 bg-white/80 flex justify-between items-center rounded-full">
          <input
            type="text"
            onKeyDown={handleKeyDown}
            ref={inputRef}
            placeholder={searchError ? searchError : "Search location"}
            value={inputCity}
            onChange={(e) => {
              setInputCity(e.target.value);
              setSearchError("");
            }}
            className={`${
              searchError
                ? "placeholder: text-red-600"
                : "placeholder: text-black "
            } outline-none capitalize text-black  text-md h-full w-[75%] ml-5`}
          />
          <button onClick={handleSearch}>
            <IoMdSearch
              className={`size-10  rounded-full p-2 mr-1  ${
                theme === true ? "bg-violet-600 " : "bg-zinc-800 "
              } hover:scale-105 cursor-pointer`}
            />
          </button>
        </div>
        {/*for suggestion  */}
        {suggestions && (
          <ul className="absolute z-1 top-25 gap-2 w-[90%] h-fit flex flex-col max-h-full mt-6 overflow-scroll rounded-2xl bg-white cursor-pointer">
            {suggestions.map((item, inx) => (
              <li
                key={inx}
                className="flex flex-row items-center p-2 text-md text-black rounded-full gap-2 hover:bg-black/10"
                onClick={() => {
                  setCity(`${item.city}`);
                  setHistory((prev) => [...prev, item.city]);
                  setInputCity("");
                  setSuggestions([]);
                  setSearchError("");
                }}
              >
                <IoMdSearch className="size-6" />
                {item.city}, {item.state}, {item.country}
              </li>
            ))}
          </ul>
        )}

        {/*for suggestion */}
        <div
          onClick={() => setHistory([])}
          className={`flex flex-row w-[90%] min-h-10 h-fit mt-4 justify-between overflow-hidden  ${
            theme === true ? "bg-red-400 " : "bg-black/80 "
          } rounded-2xl `}
        >
          <p
            className={`flex flex-row justify-center items-center text-xl text-white/90  ${
              theme === true
                ? " bg-gradient-to-b from-violet-100 to-violet-600 "
                : " bg-gradient-to-b from-zinc-400 to-zinc-700  "
            }outline-none font-bold rounded-tr-full rounded-l-2xl w-[60%] h-full`}
          >
            Search History
          </p>
          <span className="flex flex-row justify-center items-center  ">
            Clear All
            <FiTrash2 className="size-10 p-2.5 " />
          </span>
        </div>
        <div
          className={`flex flex-col justify-around items-center w-[90%] mt-3 min-h-14  max-h-32 rounded-2xl overflow-x-scroll ${
            theme === true
              ? "bg-white text-black/90"
              : "bg-black shadow-md shadow-white/20 text-white/90"
          } text-xl  font-bold capitalize`}
        >
          {history.map((hist, index) => (
            <div
              key={index}
              className={`flex flex-row m-2 p-1 w-[95%] rounded-xl ${
                theme === true ? "bg-violet-100 " : "bg-zinc-800 "
              } text-sm h-full justify-between items-center`}
            >
              <h1
                onClick={() => setCity(hist)}
                className="flex items-center gap-2 text-[1.1rem] pl-3 w-[85%] h-full"
              >
                <FaRedo className="size-4 rotate-260 font-bold" />
                {hist}
              </h1>
              <FaDeleteLeft
                onClick={() => handleBin(hist)}
                className="size-6 mr-2"
              />
            </div>
          ))}
        </div>
        <div
          className={`flex mt-3 flex-row justify-center items-center text-[1.5rem] text-white/90 ${
            theme === true
              ? "bg-gradient-to-b from-violet-100 to-violet-600 "
              : "bg-gradient-to-b from-zinc-500 to-zinc-700 "
          }  outline-none font-bold  rounded-b-full  w-[90%] h-fit`}
        >
          Famous Cities
        </div>

        <div className="flex flex-col items-center min-h-55 max-h-88 pb-44 overflow-x-scroll mt-4 w-[90%] border-l border-white/80 border-r ">
          {searchList.map((list) => (
            <div
              key={list.id}
              onClick={() => setCity(list.heading)}
              className={`flex flex-row w-[90%] mb-4 shadow-sm  h-fit ${
                theme === true
                  ? "bg-white/80 shadow-violet-600 text-black/90"
                  : "bg-white/20 shadow-black text-white/80 "
              } justify-between rounded-full items-center`}
            >
              <div
                className={`flex ml-0.5 justify-center items-center ${
                  theme === true
                    ? "bg-gradient-to-bl from-violet-400 to-violet-700 text-white/80 "
                    : "bg-zinc-800 text-white/80"
                }  rounded-full `}
              >
                {list.img}
              </div>
              <span className="flex flex-col justify-center  items-center">
                <h1 className="text-xl capitalize font-bold">{list.heading}</h1>
              </span>
              <div className=" hover:scale-105 cursor-pointer">
                <MdOutlineAddLocationAlt
                  className={`size-10  m-0.5 p-2.5 rounded-full ${
                    theme === true
                      ? "text-white/90 bg-violet-500 "
                      : "bg-zinc-800 text-white/80"
                  } `}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          onClick={() => setSearchPage(!searchPage)}
          className={`${
            !searchPage ? "hidden" : "block"
          } flex justify-center items-center w-22 h-9 rounded-full fixed bottom-8 ${
            theme === true ? "bg-violet-500 " : "bg-zinc-200 "
          } shadow-lg shadow-black/40 hover:scale-105 cursor-pointer`}
        >
          <IoClose
            className={`size-12 ${
              theme === true ? "text-white/90 " : "text-black/80 "
            }`}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
