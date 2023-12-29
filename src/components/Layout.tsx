import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import down from "../../public/down.svg";
import Accordion from './Accordion';

type Props = {
    question :string,
    answer: string,
    idx: number
}

interface LayoutProps {
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    data: Props[]
}

const Layout = ({ data, turn, setTurn}:LayoutProps) => {
  return (
    <div className='relative'>
      {data.map((el,i)=>{
        return (
            <div className='w-full' key={"questions"+i}>
                <Accordion
                question={el.question}
                answer={el.answer}
                turn={turn}
                setTurn={setTurn}
                idx={el.idx}
                />
            </div>
        )
      })}
    </div>
  )
}

export default Layout
