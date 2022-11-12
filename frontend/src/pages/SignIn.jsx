import React from 'react'
import TopBar from '../components/TopBar'
import logoBig from '../img/logoBig.svg'
import SignInForm from '../components/SignInForm'

export default function SignIn() {
  return (
    <div className='sm:bg-[#F3F3F3] sm:pb-[125px]'>
        <TopBar/>
        <div className='mt-[175px] sm:flex sm:ml-[249px] sm:mt-[200px]'>
          <img src={logoBig} alt="" className='hidden sm:inline-block'/>
          <SignInForm/>
        </div>
    </div>
  )
}
