import React from 'react'
import avatar from "../img/avatar.svg" 

export default function AvaBar(props) {
  return (
    <div className='w-[375px] h-[228px] text-center items-center flex flex-col bg-white rounded-b-[32px] sm:bg-[#F3F3F3]'>
        <img src={avatar} alt="" className='mt-[60px]'/>
        <h1 className='font-head text-h2 text-blackLight'>Nikita_Lol229</h1>
    </div>
  )
}
