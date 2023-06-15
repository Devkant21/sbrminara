import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

import Image from "next/image";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                {/* <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p> */}
            </div>
            {/* <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
        <Image src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </a> */}
            <Image src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red-400">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10 text-3xl">
                    Key Highlights

                    <ul className="text-2xl p-4">
                        <li>5 mins drive from Kadugodi Metro Station</li>
                        <li>Main Road Property</li>
                        <li>Miven Technique Construction</li>
                        <li>1 Min from Bus stand</li>
                        <li>World class amenities</li>
                    </ul>
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* ROW 1 */}
                    <div className="grid grid-cols-3 lg:gap-3 justify-items-center">
                        <div className="py-10">
                            <div className="rounded overflow-hidden shadow-lg">
                                <a href="/" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/SM1.jpeg"
                                        width={300}
                                        height={200}
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">
                                            GYM
                                        </div>
                                        {/* <p>Conkriti website</p> */}
                                    </div>
                                    <div className="grid grid-flow-col gap-5 pb-2 px-6">
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">react</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">typescript</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">tailwindcss</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">framer-motion</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 lg:gap-3 justify-items-center">
                        <div className="py-10">
                            <div className="rounded overflow-hidden shadow-lg">
                                <a href="/" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/SM1.jpeg"
                                        width={300}
                                        height={200}
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">
                                            Meditation Center
                                        </div>
                                        {/* <p>Conkriti website</p> */}
                                    </div>
                                    <div className="grid grid-flow-col gap-5 pb-2 px-6">
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">react</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">tailwindcss</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">framer-motion</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 lg:gap-3 justify-items-center">
                        <div className="py-10">
                            <div className="rounded overflow-hidden shadow-lg">
                                <a href="/" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/SM1.jpeg"
                                        width={300}
                                        height={200}
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">
                                            Pet Park
                                        </div>
                                        {/* <p>Conkriti website</p> */}
                                    </div>
                                    <div className="grid grid-flow-col gap-5 pb-2 px-6">
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">react</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">typescript</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">tailwindcss</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">framer-motion</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 lg:gap-3 justify-items-center">
                        <div className="py-10">
                            <div className="rounded overflow-hidden shadow-lg">
                                <a href="/" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/SM1.jpeg"
                                        width={300}
                                        height={200}
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">
                                            Clubhouse
                                        </div>
                                        {/* <p>Conkriti website</p> */}
                                    </div>
                                    <div className="grid grid-flow-col gap-5 pb-2 px-6">
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">react</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">typescript</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">tailwindcss</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">framer-motion</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 lg:gap-3 justify-items-center">
                        <div className="py-10">
                            <div className="rounded overflow-hidden shadow-lg">
                                <a href="/" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/SM1.jpeg"
                                        width={300}
                                        height={200}
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">
                                            Tennis Court
                                        </div>
                                        {/* <p>Conkriti website</p> */}
                                    </div>
                                    <div className="grid grid-flow-col gap-5 pb-2 px-6">
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">react</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">typescript</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">tailwindcss</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">framer-motion</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 lg:gap-3 justify-items-center">
                        <div className="py-10">
                            <div className="rounded overflow-hidden shadow-lg">
                                <a href="/" target="_blank" rel="noreferrer">
                                    <Image
                                        src="/SM1.jpeg"
                                        width={300}
                                        height={200}
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">
                                            Infinity Swimming Pool
                                        </div>
                                        {/* <p>Conkriti website</p> */}
                                    </div>
                                    <div className="grid grid-flow-col gap-5 pb-2 px-6">
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">react</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">typescript</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">tailwindcss</span>
                                        <span className="bg-white rounded-full px-3 py-1 text-sm font-base mb-2 ">framer-motion</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;