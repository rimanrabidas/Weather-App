const Loading = () => {
  const load = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex items-center relative overflow-hidden flex-col w-full h-full pl-5 pr-5 bg-violet-100 animate-pulse">
      <div className="flex absolute rotate-[45deg] w-fit h-[100%] shadow">
        <div className="flex w-22 h-[100%] bg-violet-100 "></div>
        <div className="flex w-5 h-[100%] bg-violet-100 m-3"></div>
      </div>
      <div className="flex flex-row w-[110%] h-15 bg-zinc-100 justify-around items-center ">
        <div className="w-12 h-12 rounded-xl bg-violet-100 shadow-sm shadow-black/10"></div>
        <div className="w-25 h-8 mt-4 rounded-b-full bg-violet-200"></div>
        <div className="w-12  h-12 rounded-xl bg-violet-100 shadow-sm shadow-black/10"></div>
      </div>
      <div className="  flex overflow-hidden flex-row w-full min-h-50 max-h-55 h-fit mt-5 rounded-3xl bg-violet-300 mb-10 shadow-xl justify-between">
        <div className="">
          <div className="w-50 h-12 bg-gradient-to-l from-violet-300 to-violet-200"></div>
          <div className="w-30 h-18 bg-gradient-to-l from-violet-300 via-violet-200 to-violet-300 mt-8"></div>
          <div className="w-30 h-8 mt-2 bg-gradient-to-l from-violet-300 to-violet-200"></div>
        </div>
        <div className="">
          <div className="w-30 h-12 mt-5 bg-gradient-to-r from-violet-300 to-violet-200"></div>
          <div className="w-30 h-30 bg-gradient-to-r from-violet-300 via-violet-200 to-violet-300 rounded-full mt-10 mr-5"></div>
        </div>
      </div>
      <div className="flex w-full h-10 mb-5 justify-between">
        <div className="w-10 h-10 rounded-full bg-violet-200"></div>
        <div className="flex w-[40%] h-10 bg-violet-300  rounded-[50%]"></div>
        <div className="w-10 h-10 rounded-full bg-violet-200"></div>
      </div>
      <div className="grid grid-cols-2 gap-5 w-full h-fit bg-violet-200 p-3 rounded-2xl">
        {load.map((num) => (
          <div
            key={num}
            className="flex flex-col rounded-2xl overflow-hidden w-full h-40 bg-violet-100 justify-between items-center shadow-md shadow-zinc-400"
          >
            <div className="w-full h-8 bg-violet-300 rounded-b-4xl"></div>
            <div className="w-16 h-16 rounded-full bg-violet-200"></div>
            <div className="w-full h-10 bg-violet-300 rounded-t-4xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
