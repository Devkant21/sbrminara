import React from 'react'
import Image from 'next/image'
const Hero = () => {
    return (
        <div className='p-6 my-5'>
            <Image
                src="/SM1.jpg"
                width={300}
                height={150}
                alt='SBR'
            />

        </div>
    )
}

export default Hero