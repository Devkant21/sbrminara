import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='p-5 text-xl'>
            <ul className='flex justify-center space-x-5'>
                <ul>
                    <li>
                        <Image
                            src="/sbr.png"
                            width={100}
                            height={50}
                            alt='SBR logo'
                        />
                    </li>
                </ul>
                <li className='cursor-pointer bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>Home</li>
                <li className='cursor-pointer bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>Service</li>
                <li className='cursor-pointer bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar