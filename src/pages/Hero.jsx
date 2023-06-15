import Image from 'next/image'
const Hero = () => {
    return (
        <div className="flex items-center pt-8 ">
            <div className="w-1/2 p-5">
                <Image
                    src="/SM1.jpg"
                    width={300}
                    height={150}
                    alt="Image"
                />
            </div>
            <div className="w-1/2 p-5">
                <h1 className="text-4xl font-bold mb-2">SBR Minara</h1>
                <p className="text-gray-600 text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ac tellus in libero facilisis varius non id lorem.
                    Proin dignissim velit vitae diam condimentum congue. Donec id
                    fermentum libero, in fringilla urna. Suspendisse potenti.
                </p>
            </div>
        </div>
    );
};


export default Hero