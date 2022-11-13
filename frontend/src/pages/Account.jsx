import React from 'react'
import AvaBar from '../components/AvaBar'
import TopBar from '../components/TopBar'
import plug from '../img/plug.svg'

export default function Account() {
  return (
    <div className='bg-[#F3F3F3]'>
        <TopBar/>
        <div className='flex pb-[100px]'>
            <div className='sm:ml-[147px]'>
                <AvaBar/>
                <div className='flex ml-[16px] mt-[24px]'>
                    <p className='font-action text-a3 text-blackLight mr-[150px]'>Моя статистика</p>
                    <p className='font-action text-a3 text-blackLight'>Ноябрь 2022</p>
                </div>
                <div className='flex mt-[24px] ml-[15px]'>
                    <div className='bg-white rounded-[12px]'>
                        <p className='text-a3 font-action text-blackLight pl-[20px] pt-[12px] pr-[73px] mb-[11px]'>Донаты</p>
                        <p className='text-a1 font-action text-blackLight pl-[20px] pb-[13px] pr-[73px]'>250K</p>
                    </div>
                    <div className='bg-white rounded-[12px] ml-[8px]'>
                        <p className='text-a3 font-action text-blackLight pl-[20px] pt-[12px] pr-[73px] mb-[11px]'>Час стрима</p>
                        <p className='text-a1 font-action text-blackLight pl-[20px] pb-[13px] pr-[73px]'>1562 рубля</p>
                    </div>
                </div>
                <div className='flex flex-col bg-white rounded-[12px] ml-[15px] mt-[10px]'>
                    <p className='text-a3 font-action text-blackLight pl-[21px] pt-[18px] pr-[73px]'>Донатеры</p>
                    <div className='flex mt-[16px] pl-[21px]'>
                        <p className='text-blackLight text-b4 font-body mr-[174px]'>Kasper_Ahaha</p>
                        <p className='text-blackLight text-b4 font-body'>50.000</p>
                    </div>
                    <div className='flex mt-[16px] pl-[21px]'>
                        <p className='text-blackLight text-b4 font-body mr-[193px]'>Nastia_2009</p>
                        <p className='text-blackLight text-b4 font-body'>2.000</p>
                    </div>
                    <div className='flex mt-[16px] pl-[21px]'>
                        <p className='text-blackLight text-b4 font-body mr-[202px]'>Stihin_ABC</p>
                        <p className='text-blackLight text-b4 font-body'>1.500</p>
                    </div>
                    <div className='flex mt-[16px] pl-[21px]'>
                        <p className='text-blackLight text-b4 font-body mr-[218px]'>Vlad_A4</p>
                        <p className='text-blackLight text-b4 font-body'>1.000</p>
                    </div>
                    <div className='flex mt-[16px] pl-[21px]'>
                        <p className='text-blackLight text-b4 font-body mr-[213px]'>Kasper_Kek</p>
                        <p className='text-blackLight text-b4 font-body'>500</p>
                    </div>
                </div>
            </div>
            <img src={plug} alt="" className='ml-[148px] mt-[131px]'/>
        </div>
    </div>
  )
}
