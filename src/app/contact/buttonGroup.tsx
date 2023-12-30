// ButtonGroup.jsx
import React from "react";

function ButtonGroup({ onSelectCountry }: any) {
  const [isSelected, setIsSelected] = React.useState<string | null>("Algeria");

  const selectedButtonStyle =
    "w-[208px] h-[56px] max-lg:w-[150px] group relative bg-secondary hover:bg-[#0e7ceb] py-3 max-lg-py-1 px-6 max-lg:px-2 max-sm:text-xs max-sm:py-0 text-white outline-none focus:bg-secondary";
  const unSelectedButtonStyle =
    "w-[208px] h-[56px] max-lg:w-[150px] group relative bg-inherit text-[#0e7ceb] hover:text-white hover:bg-[#0e7ceb] py-3 max-lg-py-1 px-6 max-lg:px-2 max-sm:text-xs max-sm:py-0 text-[#0e7ceb] outline-none focus:bg-secondary border-2 border-[#0e7ceb]";

  const handleCountryClick = (country: any) => {
    onSelectCountry(country);
    setIsSelected(country);
  };

  return (
    <div>
      <div className="mx-2 py-6 gap-[20px] my-14 flex justify-center max-lg:gap-3">
        <button
          onClick={() => handleCountryClick("Algeria")}
          className={isSelected === "Algeria" ? selectedButtonStyle : unSelectedButtonStyle}
        >
          <span className="lg:font-medium max-lg:text-sm">Contact Algeria</span>
        </button>
        <button
          onClick={() => handleCountryClick("Tunisia")}
          className={isSelected === "Tunisia" ? selectedButtonStyle : unSelectedButtonStyle}
        >
          <span className="lg:font-medium max-lg:text-sm">Contact Tunisia</span>
        </button>
        <button
          onClick={() => handleCountryClick("Morocco")}
          className={isSelected === "Morocco" ? selectedButtonStyle : unSelectedButtonStyle}
        >
          <span className="lg:font-medium max-lg:text-sm">Contact Morocco</span>
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
