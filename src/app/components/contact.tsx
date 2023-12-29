"use client";

import { useState } from "react";
import ButtonGroup from "../contact/buttonGroup";
import contactInfo from "../../../public/contactData.json";

enum countryName {
  Algeria = "Algeria",
  Tunisia = "Tunisia",
  Morocco = "Morocco",
}

export default function Contact() {
  const [country, setCountry] = useState<string>(countryName.Algeria);

  let selectedContact = contactInfo[0];

  const handleSelectCountry = (selectedCountry:any) => {
    setCountry(selectedCountry);
  };
  
  if(country === countryName.Tunisia) {
    selectedContact = contactInfo[1];
  }
  else if(country === countryName.Morocco) {
    selectedContact = contactInfo[2];
  }


  return (
    <div className="relative">
     <div style={{ zIndex: "9999", top: "40%", right: "80%" }}
      className="vertical transform rotate-90 transform-origin-right-top font-megrim text-[#4D4D4D] opacity-30 text-[60px] pt-2 pr-2 whitespace-nowrap uppercase cursor-vertical absolute block h-auto direction-rtl font-semibold">
        Contact - Us
      <span style={{ display: "inline-block", borderLeft: "4px solid #4D4D4D", height: "60px", rotate:"90deg" }} className="absolute top-[27px] -right-[60px]"></span>
    </div>
      <div className="z-0 absolute min-h-full w-full left-0 top-0 bg-cover"></div>
      <div id="contact-wrapper" className="z-50 py-20 relative">
        <div className="  flex justify-center items-end gap-3 text-secondary">
          <hr className="mb-1 border-b border-secondary w-12"></hr>
          <h2 className="uppercase font-bold ">Contact Us</h2>
        </div>
        <div id="text" className="flex justify-center">
          <h3 className="text-center text-4xl font-bold">
            Let&apos;s Connect
          </h3>
        </div>
        <ButtonGroup onSelectCountry={handleSelectCountry}/>
        <div className="flex flex-col lg:flex lg:flex-row max-w-7xl mx-auto z-50">
          <div id="form" className="ml-[100px] mr-12 w-[60%]">
            <h2 className="text-[35px] mb-8 font-bold text-center sm:text-left">Send your message</h2>
            <form className="space-y-4">
              <input
                name="name"
                placeholder="Name"
                className="pl-5 hover:border-secondary focus:outline-none p-4 focus:border-secondary bg-white h-12 border-gray-300 border w-full"
              ></input>
              <input
                name="eMail"
                placeholder="E-Mail"
                className="pl-5 hover:border-secondary focus:outline-none p-4 focus:border-secondary bg-white h-12 border-gray-300 border w-full"
              ></input>
              <input
                name="subject"
                placeholder="Subject"
                className="pl-5 hover:border-secondary focus:outline-none p-4 focus:border-secondary bg-white h-12 border-gray-300 border w-full"
              ></input>
              <textarea
                placeholder="Window Message"
                name="message"
                className="border hover:border-secondary focus:outline-none p-4 focus:border-secondary h-56 w-full border-gray-300 resize-none"
              ></textarea>
              {/* Button */}
              <div className="mx-2 py-6 flex justify-center sm:justify-start">
                <button className="group relative bg-secondary hover:bg-[#0e7ceb] py-3 px-6 text-white outline-none  focus:bg-secondary">
                  <span
                    className="absolute -start-2 -top-2 block h-5 w-5 border-s-4 border-t-4 border-secondary group-hover:border-[#0e7ceb] group-focus:border-[#0e7ceb]"
                    aria-hidden="true"
                  ></span>
                  <span className="uppercase font-bold">Send the message</span>
                  <span
                    className="absolute -bottom-2 -end-2 block h-5 w-5 rotate-180 border-s-4 border-t-4 border-secondary group-hover:border-[#0e7ceb] group-focus:border-secondary"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </form>
          </div>
          <address id="details" className="mx-2 sm:mx-12 space-y-8 w-[40%]">
            <h2 className="text-[35px] text-left mb-8 font-bold not-italic ">
              Contact Details
            </h2>

            <div id="address" className="flex flex-col sm:flex sm:flex-row items-center">
              <div className="flex h-16 rounded-full w-16 min-w-C64 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-map-marker text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Our address
                </div>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Mediterranean+Float+Glass+SPA/@36.5860674,3.1697604,19z/data=!4m10!1m2!2m1!1zMjksIFJvdXRlIGRlIE1lZnRhaCDigJMgbCJBcmJhw6Ig4oCTIDA5MzAwIFcuIEJsaWRh!3m6!1s0x12b22aecb27883c9:0xbd00be4555591d53!8m2!3d36.5864023!4d3.1718132!15sCjMyOSwgUm91dGUgZGUgTWVmdGFoIOKAkyBsIkFyYmHDoiDigJMgMDkzMDAgVy4gQmxpZGGSAQ5nbGFzc19pbmR1c3RyeeABAA!16s%2Fg%2F11byyjjl1y?entry=ttu"
                  className="text-gray-500 font-medium not-italic"
                >
                  {selectedContact.address}
                </a>
              </div>
            </div>
            <div id="phone" className="flex flex-col sm:flex sm:flex-row items-center">
              <div className="flex h-16 rounded-full w-16 min-w-C64 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-phone text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Phone
                </div>
                <a
                  target="_blank"
                  href="callto:+21321448644"
                  className="text-gray-500 font-medium not-italic"
                >
                  {selectedContact.phone}
                </a>
              </div>
            </div>
            <div id="phone" className="flex flex-col sm:flex sm:flex-row items-center">
              <div className="flex h-16 rounded-full w-16 min-w-C64 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-print text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Fax
                </div>
                <a
                  target="_blank"
                  className="text-gray-500 font-medium not-italic"
                >
                  {selectedContact.fax}
                </a>
              </div>
            </div>
            <div id="commercial" className="flex flex-col sm:flex sm:flex-row items-center">
              <div className="flex h-16 rounded-full w-16 min-w-C64 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-envelope text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Commercial et Marketing
                </div>
                <a
                  target="_blank"
                  href="mailto:contact@mfg.dz"
                  className="text-gray-500 font-medium not-italic"
                >
                  {selectedContact.email}
                </a>
              </div>
            </div>
            <div id="service" className="flex flex-col sm:flex sm:flex-row items-center">
              <div className="flex h-16 rounded-full w-16 min-w-C64 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-envelope text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Served Local Market
                </div>
                {
                  selectedContact.localMarketInfo.map((email:string) => {
                    return (
                      <a
                      key={email}
                      target="_blank"
                      href={`mailto:${email}`}
                      className="text-gray-500 font-medium not-italic"
                    >
                      {email}
                    </a>
                    )
                  })
                }
              </div>
            </div>
            <div id="commercial" className="flex flex-col sm:flex sm:flex-row items-center">
              <div className="flex h-16 rounded-full w-16 min-w-C64 justify-center items-center bg-secondary">
                <span>
                  <i className="fa fa-2x fa-envelope text-white"></i>
                </span>
              </div>
              <div className="flex flex-col mx-3 my-2">
                <div className="font-medium text-secondary not-italic ">
                  Export Market Service
                </div>
               {
                  selectedContact.exportMarketInfo.map((email:string) => {
                    return (
                      <a
                      key={email}
                      target="_blank"
                      href={`mailto:${email}`}
                      className="text-gray-500 font-medium not-italic"
                    >
                      {email}
                    </a>
                    )
                  })
               }
              </div>
            </div>
          </address>
        </div>
      </div>
    </div>
  );
}
