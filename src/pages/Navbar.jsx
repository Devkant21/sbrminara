import { useState } from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow" : ""
                } hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-fuchsia-100";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <Image
                    src="/sbr.png"
                    width={75}
                    height={50}
                    alt='SBR logo'
                />

                {/* DESKTOP NAV */}
                {isDesktop ? (
                    <div className="flex justify-between gap-16 font-opensans text-xl font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />

                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />

                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-red-600 p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <Image alt="menu-icon" src="/menu-icon.svg" width={20} height={20} />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isDesktop && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue-400 w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Image alt="close-icon"
                                    src="/close-icon.svg"
                                    width={30}
                                    height={30}
                                />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-blue-800">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;