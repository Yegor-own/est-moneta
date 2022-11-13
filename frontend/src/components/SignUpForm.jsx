import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { DOMAIN } from './Config'
import axios from 'axios';
import validator from 'validator';

export default function SignUpForm() {
	const [signUp, setSignUp] = useState(() => {
    return {
		nick: "",
		fi: "",
		phone: "",
        email: "",
        password: "",
		password2: "",
    }
  })

	const changeInputSignUp = event => {
    event.persist()
    setSignUp(prev => {
        return {
            ...prev,
            [event.target.name]: event.target.value,
        }
    })
	}

	const submitCheckIn = event => {
		event.preventDefault();
		if(!validator.isEmail(signUp.email)) {
			alert("Вы не ввели электронную почту")
		}else{
			axios.post(DOMAIN + "/users/create", {
				nickname: signUp.nick,

				email: signUp.email,
				password: signUp.password,
			}).then(res => {
				// console.log(res.data);
			}).catch(() => {
				alert("An error occurred on the server")
			})
		}
	}

	return (
	<div className='flex flex-col text-center items-center sm:ml-[255px]'>
		<p className='text-[28px]'>💌</p>
		<h1 className='text-h1 text-darkGray font-head'>Вход</h1>
		<p className='text-a1 sm:text-a2 font-action text-gray'>Введи почту, чтобы продолжить</p>
		<form className='flex flex-col'>
			<input
				name="nick"
				id="nick"
				type="text"
				placeholder="Никнейм"
				value={signUp.nick}
				onChange={changeInputSignUp}
				className="w-[330px] h-[55px] font-action bg-mobileBG border-[1.68px] border-mobileBG text-a2 sm:text-a1 text-pc mb-[8px] sm:w-[548.83px] sm:h-[91.47px] rounded-[12px]"/>
			<input
				type="text"
				name="fi"
				id="fi"
				placeholder="Фамилия и имя"
				value={signUp.fi}
				onChange={changeInputSignUp}
				className="w-[330px] h-[55px] font-action bg-mobileBG border-[1.68px] border-mobileBG text-a2 sm:text-a1 text-pc mb-[8px] sm:w-[548.83px] sm:h-[91.47px] rounded-[12px]"/>
			<input
				type="tel"
				name="phone"
				id="phone"
				placeholder="Номер телефона"
				value={signUp.phone}
				onChange={changeInputSignUp}
				className="w-[330px] h-[55px] font-action bg-mobileBG border-[1.68px] border-mobileBG text-a2 sm:text-a1 text-pc mb-[8px] sm:w-[548.83px] sm:h-[91.47px] rounded-[12px]"/>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Электронная почта"
				value={signUp.email}
				onChange={changeInputSignUp}
				className="w-[330px] h-[55px] font-action bg-mobileBG border-[1.68px] border-mobileBG text-a2 sm:text-a1 text-pc mb-[8px] sm:w-[548.83px] sm:h-[91.47px] rounded-[12px]"/>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Пароль"
				value={signUp.password}
				onChange={changeInputSignUp}
				className="w-[330px] h-[55px] font-action bg-mobileBG border-[1.68px] border-mobileBG text-a2 sm:text-a1 text-pc mb-[8px] sm:w-[548.83px] sm:h-[91.47px] rounded-[12px]"/>
			<input
				type="password"
				name="password2"
				id="password2"
				placeholder="Пароль"
				value={signUp.password2}
				onChange={changeInputSignUp}
				className="w-[330px] h-[55px] font-action bg-mobileBG border-[1.68px] border-mobileBG text-a2 sm:text-a1 text-pc mb-[8px] sm:w-[548.83px] sm:h-[91.47px] rounded-[12px]"/>
			<Link to="/account" className='w-[330px] h-[55px] sm:w-[548.83px] sm:h-[91.47px] py-[17px] px-[116.5px] sm:py-[31.5px] sm:px-[208px] cursor-pointer text-white text-a2 sm:text-a1 font-action bg-red rounded-[15px]'>Зарегистрироваться</Link>
			<p className='text-gray text-a1 font-action'>Уже есть аккаунт? <span><Link to="/" className='underline text-black font-action text-a1'>Вход</Link></span></p>
		</form>
	</div>
  )
}
