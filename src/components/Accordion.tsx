import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import minus from "../../public/minus.svg";
import plus from "../../public/plus.svg";

type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

const Accordion = ({question, answer, turn, setTurn, idx}: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(contentRef.current){
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight *2}px`:"0px"
        }

    },[contentRef, turn, idx])

    const toggleAccordion = () => {
        let newTurn = [...turn!]
        newTurn[idx] = !newTurn[idx]
        setTurn!(newTurn)
    }
  return (
    <div className='flex flex-col items-center justify-center w-full px-2 text-lg  lg:text-base mb-5'>
      <button onClick={toggleAccordion}
       className={`bg-transparent shadow cursor-pointer w-full h-full ${turn![idx]}`}>
        <div className=''>
           <div className={`flex items-center justify-between h-[76px] text-left ${turn![idx] && "bg-[#0054A7] text-white"}`}>
              <span className={`mx-8 text-[20px] font-medium lg:font-semibold lg:text-xl text-sm  ${turn![idx] ? "text-white" :"text-[#0054A7]"}`}>{question}</span>
              <div className="mr-4">
               { turn![idx] ? <span className="text-white text-[40px]"> - </span> :
                <Image src={plus} alt="" width={20} height={20}/>}
              </div>
           </div>
           <div ref={contentRef} className='ml-8 mr-4 overflow-hidden text-left transition-all duration-500 h-full'>
              <p className='text-[18px] py-1 my-3 font-normal leading-normal text-justify whitespace-pre-line'>
                {answer}
              </p>
           </div>
        </div>
      </button>
    </div>
  )
}

export default Accordion
