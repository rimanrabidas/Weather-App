const Temperature = () => {

    const temperatureLine = [
        {
            id: 1,
            img:"/icons8-rain-cloud-64.png",
            value: "18°C",
            description: "06:00",
        },
        {
            id: 2,
            img:"/icons8-haze-64.png",
            value: "20°C",
            description: "09:00",
        },
        {
            id: 3,
            img:"/icons8-wet-64.png",
            value: "23°C",
            description: "12:00",
        },
        {
            id: 4,
            img:"/icons8-rainfall-64.png",
            value: "25°C",
            description: "03:00",
        },
    ];

  return (
     <div className='flex flex-col w-full h-fit mb-20'>
          <div className="flex flex-row justify-between items-center  ">
              <h1 className="text-3xl font-bold text-black/90">Temperature</h1>
          </div>
  
          <div className=" flex-row w-full h-fit justify-around bg-gradient-to-b from-violet-100 via-50% via-white to-violet-100 grid grid-cols-4 gap-[10%] pt-3 pb-3 mt-2 rounded-2xl">
             
          {   temperatureLine.map(({id,img,value,description})=>(
   <div key={id} className="flex flex-col text-white/90 justify-center items-center bg-gradient-to-bl from-violet-400 to-violet-700 h-fit rounded-2xl hover:scale-105 cursor-pointer" >
   <h2 className='text-md font-bold pt-2'>{value}</h2>
   <img className='size-10' src={img} alt="Rain" />
   <p className='text-sm text-white/60 pb-2'>{description}</p>
   </div> ))}
             
          </div>
      </div>
  )
}

export default Temperature;
