import React from 'react'
import logo from "../img/logo.svg"

export default function TopBar() {
  return (
    <div className='hidden sm:flex sm:align-middle'>
        <img src={logo} alt=""  className='w-[82.5px] h-[20px] ml-[34.5px]'/>
        <p className='font-head text-darkGray text-[20px] ml-[1082spx]'>Сервис сбора донатов</p>
    </div>
  )
}
