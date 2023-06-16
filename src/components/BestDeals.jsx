import React from 'react'
import house1 from '../assets/house7.jpg'
import house2 from '../assets/house8.jpg'
import house3 from '../assets/house9.jpg'
import house4 from '../assets/house10.jpg'
import house5 from '../assets/house11.jpg'
import house6 from '../assets/house12.jpg'
import { IoLocationOutline } from 'react-icons/io5'

const BestDeals = () => {
    return (
        <div className=''>
            <div className='w-11/12 md:w-1/2 xl:w-1/3 m-auto text-center py-10'>
                <h1 className='text-4xl font-bold'>Amenities</h1>
                <p className='text-xs p-4 text-gray-400'>SBR Minara brings to you a wide range of amenities.</p>
            </div>
            <div className="deals w-full  grid lg:grid-flow-col grid-row-2  gap-8">
                <div className="deal relative col-span-2 row-span-2">
                    <img src={house1} alt="" className='rounded-xl w-full h-full object-cover' />
                    <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                        <h1 className='text-3xl font-thin'>Gym</h1>
                        {/* <p className='flex items-center space-x-2 text-sm'><IoLocationOutline/>Kissimmee.Florida US</p> */}
                    </div>
                </div>
                <div className="deal relative col-span-1 row-span-2">
                    <img src={house2} alt="" className='rounded-xl w-full h-full object-cover' />
                    <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                        <h1 className='text-3xl font-thin'>Infinity Swimming Pool</h1>
                        {/* <p className='flex items-center space-x-2 text-sm'><IoLocationOutline/>Kissimmee.Florida US</p> */}
                    </div>
                </div>
                <div className="deal relative  col-span-1 row-span-1">
                    <img src={house3} alt="" className='rounded-xl w-full h-full object-cover' />
                    <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                        <h1 className='text-3xl font-thin'>Meditation Center</h1>
                        {/* <p className='flex items-center space-x-2 text-sm'><IoLocationOutline />Kissimmee.Florida US</p> */}
                    </div>
                </div>
                <div className="deal relative col-span-1 row-span-1">
                    <img src={house4} alt="" className='rounded-xl w-full h-full object-cover' />
                    <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                        <h1 className='text-3xl font-thin'>Tennis Court</h1>
                        {/* <p className='flex items-center space-x-2 text-sm'><IoLocationOutline />Kissimmee.Florida US</p> */}
                    </div>
                </div>
                <div className="deal relative col-span-1 row-span-1">
                    <img src={house5} alt="" className='rounded-xl w-full h-full object-cover' />
                    <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                        <h1 className='text-3xl font-thin'>Basketball Court</h1>
                        {/* <p className='flex items-center space-x-2 text-sm'><IoLocationOutline />Kissimmee.Florida US</p> */}
                    </div>
                </div>
                <div className="deal relative col-span-1 row-span-1">
                    <img src={house5} alt="" className='rounded-xl w-full h-full object-cover' />
                    <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                        <h1 className='text-3xl font-thin'>Clubhouse</h1>
                        {/* <p className='flex items-center space-x-2 text-sm'><IoLocationOutline />Kissimmee.Florida US</p> */}
                    </div>
                </div>

                <div className="deal relative col-span-1 row-span-1">
                    <img src={house6} alt="" className='rounded-xl' />
                    <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                        <h1 className='text-3xl font-thin'>Skating Rink</h1>
                        {/* <p className='flex items-center space-x-2 text-sm'><IoLocationOutline />Kissimmee.Florida US</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestDeals