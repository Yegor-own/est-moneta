import React from 'react'
import TopBar from '../components/TopBar'
import SignUpForm from '../components/SignUpForm'
import logoBig from '../img/logoBig.svg'

export default function SignUp() {
  return (
    <div className='sm:bg-[#F3F3F3] sm:pb-[125px]'>
    <TopBar/>
    <div className='mt-[36px] sm:flex sm:ml-[249px] sm:mt-[20px]'>
      <img src={logoBig} alt="" className='hidden sm:inline-block'/>
      <SignUpForm/>
    </div>
</div>
  )
}
