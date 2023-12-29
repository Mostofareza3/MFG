import Image from "next/image";

const Map = () => {
  return (
    <div className="flex flex-col h-500 relative mt-12 !mb-[35rem]">
      <div  style={{height:'500px'}} className="absolute z-20 h-500 w-full left-0 top-0 bg-cover !bg-[#0054A7] opacity-60"></div>
      <div style={{height:'500px'}} className="absolute z-10  w-full left-0 top-0 bg-cover bg-map-img"></div>
      <div className="mx-auto absolute z-50 flex justify-center w-full top-[225px] left-1">
            <div className="flex h-16 rounded-full w-16 min-w-C64 justify-center items-center bg-secondary">
                <span>
                <i className="fa fa-2x fa-map-marker text-white"></i>
                </span>
              </div>
      </div>
    </div>
  );
};

export default Map;
