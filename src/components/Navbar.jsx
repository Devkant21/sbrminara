import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import Logo from "@/assets/Logo.png";
// import BC from "@/assets/brigade-calista.png";
import Link from "@/components/Link";
import { SelectedPage } from "@/utils/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    return (
        <nav>
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <Image
                            src="/sbr.png"
                            width={75}
                            height={50}
                            alt='SBR logo'
                        />

                        {/* RIGHT SIDE */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Abouts"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="OurPlans"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Contact Us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    {/* <p>Sign In</p> */}
                                    <ActionButton setSelectedPage={setSelectedPage}>
                                        Enquiry
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Abouts"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="OurPlans"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
// import React from 'react'
// import Image from 'next/image'

// const Navbar = () => {
//     return (
//         <div className="bg-slate-500">
//             <ul className="flex justify-between">
//                 <li className="cursor-pointer font-bold p-2 m-5 w-full text-white text-4xl">
//                     <Image
//                         src="/sbr.png"
//                         width={75}
//                         height={50}
//                         alt='SBR logo'
//                     />
//                 </li>
//                 {/* <li className="cursor-pointer font-bold p-6 m-5 text-white text-4xl">Search</li> */}
//                 <ul className="flex justify-between space-x-5 text-3xl text-white p-6 m-5">
//                     <li className="cursor-pointer font-extralight">Home</li>
//                     <li className="cursor-pointer font-extralight">About</li>
//                     <li className="cursor-pointer font-extralight">Services</li>
//                     <li className="cursor-pointer font-extralight">Contact</li>
//                 </ul>
//             </ul>
//         </div>
//         // <div className='flex text-xl justify-between flex-wrap bg-stone-900 p-2'>
//         //     <ul className='flex justify-start'>
//         //         <li>
//         //             <Image
//         //                 src="/sbr.png"
//         //                 width={75}
//         //                 height={50}
//         //                 alt='SBR logo'
//         //             />
//         //         </li>
//         //     </ul>
//         //     <ul className='flex justify-start space-x-5'>
//         //         <li className='cursor-pointer rounded-md p-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Home</li>
//         //         <li className='cursor-pointer rounded-md p-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Service</li>
//         //         <li className='cursor-pointer rounded-md p-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Contact</li>
//         //     </ul>
//         // </div>
//     )
// }

// export default Navbar