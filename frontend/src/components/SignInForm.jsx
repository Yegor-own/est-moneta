import React, {useState} from 'react'
import { Link } from "react-router-dom";

export default function SignInForm() {
	const [logIn, setLogIn] = useState(() => {
    return {
        email: "",
        password: ""
    }
  })

	const changeInputSignIn = event => {
    event.persist()
    setLogIn(prev => {
        return {
            ...prev,
            [event.target.name]: event.target.value,
        }
    })
	}

  return (
    <div className='flex flex-col text-center items-center sm:ml-[255px]'>
        <p className='text-[28px]'>💌</p>
        <h1 className='text-h1 text-darkGray font-head'>Вход</h1>
        <p className='text-a1 sm:text-a2 font-action text-gray'>Введи почту, чтобы продолжить</p>
        <form className='flex flex-col'>
					<input
						name="email"
						id="email"
						type="email"
						placeholder="Электронная почта"
						value={logIn.email}
						onChange={changeInputSignIn}
						className="w-[330px] h-[55px] font-action bg-mobileBG border-[1.68px] border-mobileBG text-a2 sm:text-a1 text-pc mb-[8px] sm:w-[548.83px] sm:h-[91.47px] rounded-[12px]"/>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Пароль"
						value={logIn.password}
						onChange={changeInputSignIn}
						className="w-[330px] h-[55px] font-action bg-mobileBG border-[1.68px] border-mobileBG text-a2 sm:text-a1 text-pc mb-[8px] sm:w-[548.83px] sm:h-[91.47px] rounded-[12px]"/>
					<p className='w-[330px] h-[55px] sm:w-[548.83px] sm:h-[91.47px] py-[17px] px-[116.5px] sm:py-[31.5px] sm:px-[208px] cursor-pointer text-white text-a2 sm:text-a1 font-action bg-red rounded-[15px]'>Продолжить</p>
					<p className='text-gray text-a1 font-action'>Ещё нет аккаунта? <span><Link to="/signup" className='underline text-black font-action text-a1'>Регистрация</Link></span></p>
				</form>
    </div>
  )
}
