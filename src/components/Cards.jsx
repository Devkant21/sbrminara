import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Cards = () => {
    const [info, setInfo] = useState("0")


    return (
        <div className="grid grid-cols-4 gap-4 p-4 m-4">
            <div className="card rounded-xl">
                <Image src="/SM1.jpg" width={2160} height={200} alt="Sunset in the mountains" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <Image src="/SM1.jpg" width={2160} height={200} alt="Sunset in the mountains" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <Image src="/SM1.jpg" width={2160} height={200} alt="Sunset in the mountains" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <Image src="/SM1.jpg" width={2160} height={200} alt="Sunset in the mountains" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <Image src="/SM1.jpg" width={2160} height={200} alt="Sunset in the mountains" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <Image src="/SM1.jpg" width={2160} height={200} alt="Sunset in the mountains" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <Image src="/SM1.jpg" width={2160} height={200} alt="Sunset in the mountains" />
                <div className="p-4 m-5">
                    <h3>Restaurant Name</h3>
                    <h4>Biryani, Kebab</h4>
                    <h4>$50 for two</h4>
                </div>
            </div>
            <div className="card rounded-xl">
                <Image src="/SM1.jpg" width={2160} height={200} alt="Sunset in the mountains" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>


        </div>
        // <div className='col-span-4'>
        //     <div className="max-w-sm rounded overflow-hidden shadow-lg">
        //         <Image src="/SM1.jpg" width={2160} height={200} alt="Sunset in the mountains" />
        //         <div className="px-6 py-4">
        //             <div className="font-bold text-xl mb-2">Exterior</div>
        //             <p className="text-white text-base">
        //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //             </p>
        //         </div>
        //         <div className="px-6 pt-4 pb-2">
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        //         </div>
        //     </div>
        //     <div className="max-w-sm rounded overflow-hidden shadow-lg">
        //         <Image src="/SM1.jpg" width={2160} height={200} alt="Sunset in the mountains" />
        //         <div className="px-6 py-4">
        //             <div className="font-bold text-xl mb-2">Exterior</div>
        //             <p className="text-white text-base">
        //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //             </p>
        //         </div>
        //         <div className="px-6 pt-4 pb-2">
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Cards