import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16 ">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <Image alt="logo" src="/sbr.png" width={50} height={50} />
                    <p className="my-5">
                        Artist;apos, impressions. Images and materials shown are indicative. This final product may differ based on availability.
                    </p>
                    <p>© 2023 SBR Group Ltd All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Active Livings</p>
                    <p className="my-5">Calm Island</p>
                    <p>Naturescapes</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Address</h4>
                    <p className="my-5">
                        Sy. No. 165, Devanahalli Airport Road, Bommenahalli village, next to
                        Saint Gobain Pvt. Ltd, opp. Brigade Buena vista, Bengaluru,
                        Karnataka 560049
                    </p>
                    <p>(+91) 90353-00700</p>
                </div>
            </div>
        </footer>




        // <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        //     <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        //         <div className="sm:flex sm:items-center sm:justify-between">
        //             <a href="/" className="flex items-center mb-4 sm:mb-0">
        //                 <Image src="/sbr.svg" className="h-8 mr-3" alt="Flowbite Logo" width={100} height={80} />
        //                 <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SBR Minara</span>
        //             </a>
        //             <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        //                 <li>
        //                     <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="hover:underline">Contact</a>
        //                 </li>
        //             </ul>
        //         </div>
        //         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        //         <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">SBR Group™</a>. All Rights Reserved.</span>
        //     </div>
        // </footer>


    )
}

export default Footer