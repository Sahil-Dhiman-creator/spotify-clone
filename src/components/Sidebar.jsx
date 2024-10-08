import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            
        <div className='flex items-center gap-5 h-[1px] mt-1 pl-8 cursor-pointer'>
                
                <p className='font-bold text-red-600 text-2xl ml-10'>Sahil Dhiman</p>
            </div>

            <div
            onClick={() =>navigate('/')}
            className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold text-sm'>Home</p>
            </div>

            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold text-sm'>Search</p>
            </div>
        </div>

        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} alt="" />
                        <p className='font-semibold'>Your Library</p>
                </div>

                <div className='flex items-center gap-3'>
                    <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="" />
                    <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="" />
                </div>
            </div>

                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create Your First PlayList</h1>
                    <p className='font-light'>It's easy we will help you </p>
                    <button className='px-4 py-1 bg-green-300 hover:bg-green-700 text-[15px] text-black rounded-full mt-4'>Create PlayList</button>
                </div>
               
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Let's FindSome PodCasts to Follow</h1>
                    <p className='font-light'>We'll kep you Update on New Episodes</p>
                    <button className='px-4 py-1 bg-green-300 hover:bg-green-700 text-[15px] text-black rounded-full mt-4'>Browse-Podcasts</button>
                </div>
        </div>
    </div>
  )
}

export default Sidebar