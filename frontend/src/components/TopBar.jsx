import React from 'react'
import logo from "../img/logo.svg"

export default function TopBar() {
  return (
    <div className='hidden sm:flex sm:align-middle sm:bg-white sm:rounded-b-[25px] sm:h-[52px]'>
        <img src={logo} alt=""  className='w-[82.5px] h-[20px] ml-[34.5px] mt-[16px]'/>
        <p className='font-head text-darkGray text-[20px] ml-[1082px] mt-[5px]'>Сервис сбора донатов</p>
    </div>
  )
}
