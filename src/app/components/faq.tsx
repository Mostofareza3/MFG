"use client";

import Layout from "@/components/Layout";
import { useState } from "react";
import data from "../../../public/data.json"

export default function FAQSection() {
  const [leftActive, setLeftActive] = useState([false, false, false, false, false]);
  const [rightActive, setRightActive] = useState([false, false, false, false, false]);

  return (
    <div className="my-20 mb-40">
      {/* <div className="z-0 absolute min-h-full w-full left-0 top-0 bg-cover bg-contactImg"></div> */}

      <div className="z-50 py-20 relative">
        <div className="  flex justify-center items-end gap-3 text-secondary">
          <hr className="mb-1 border-b border-secondary w-12"></hr>
          <h2 className="uppercase font-bold ">Having Questions?</h2>
        </div>
        <div id="text" className="flex justify-center">
          <h3 className="text-center text-4xl mb-8 mt-4 font-bold">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="flex items-center justify-center py-5 max-w-7xl mx-auto gap-4">
            <div className="flex flex-col lg:flex lg:flex-row w-full mx-auto z-50">
                <Layout
                data={data.slice(0, 5)}
                turn={leftActive}
                setTurn={setLeftActive}
                />
            </div>
            <div className="flex flex-col lg:flex lg:flex-row w-full mx-auto z-50">
                <Layout
                data={data.slice(5, 10)}
                turn={rightActive}
                setTurn={setRightActive}
                />
            </div>
        </div>
      </div>
    </div>
  );
}
