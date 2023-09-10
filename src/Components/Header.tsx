import classNames from "classnames";
import React, { ReactNode, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Header: React.FC<{ children: ReactNode; handleOnClick: (value: string) => void }> = ({ children, handleOnClick }): JSX.Element => {
    const [hamburgerMode, setHamburgerMode] = useState<boolean>(false);

    return (
        <div className="flex xl:flex-row xss:flex-col">
            <Fade delay={2000}>
                <div className="hero fixed px-12 py-4 xl:block z-0 xss:hidden">
                    <img src="/images/logo.png" className="w-12 z-0" />
                </div>
            </Fade>
            <nav className="navbar z-30 fixed w-8/12 opacity-90 right-12 bg-mainBg top-0 h-16 p-6 xl:block xss:hidden">
                <Fade delay={2000}>
                    <Slide direction="down" delay={1500} cascade>
                        <ul className="top-menu flex flex-row justify-end space-x-5 text-xs font-poppins">
                            <li>
                                <div className="hover:transition ease-in-out hover:border-b-2 transform duration-200 hover:scale-110 border-secondaryBg">
                                    <div onClick={() => handleOnClick("about")} className="cursor-pointer" id="about">
                                        About
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hover:transition ease-in-out transform duration-200 hover:scale-110 hover:border-b-2 border-secondaryBg">
                                    <div onClick={() => handleOnClick("works")} className="cursor-pointer" id="work">
                                        Work Experience
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hover:transition ease-in-out transform duration-200 hover:scale-110 hover:border-b-2 border-secondaryBg">
                                    <div onClick={() => handleOnClick("projects")} className="cursor-pointer" id="projects">
                                        Projects
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="hover:transition ease-in-out transform duration-200 hover:scale-110 hover:border-b-2 border-secondaryBg">
                                    <a onClick={() => handleOnClick("contact")} className="cursor-pointer" id="contact">
                                        Contact
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </Slide>
                </Fade>
            </nav>
            <nav className="navbar transform transition ease-in-out z-50 fixed w-full xss:bg-mainBg opacity-90 py-2 md:px-12 xss:px-6 h-16 xl:hidden xss:block">
                <div className="flex justify-between items-center">
                    <img src="images/logo.png" className="w-12" />
                    <div
                        id="navMenu"
                        onClick={() => {
                            setHamburgerMode(!hamburgerMode);
                        }}
                        className="hamburger space-y-1 cursor-pointer"
                    >
                        <span
                            className={classNames("block w-6 h-0.5 bg-secondaryBg transform transition duration-300 ease-in-out", { "rotate-45 translate-y-1.5": hamburgerMode })}
                        ></span>
                        <span
                            className={classNames("block opacity-100 w-6 h-0.5 bg-secondaryBg transform transition duration-200 ease-in-out", {
                                "opacity-0": hamburgerMode,
                            })}
                        ></span>
                        <span
                            className={classNames("block w-6 h-0.5 bg-secondaryBg transform transition duration-300 ease-in-out", {
                                "-rotate-45 -translate-y-1.5": hamburgerMode,
                            })}
                        ></span>
                    </div>
                </div>
            </nav>
            {hamburgerMode && (
                <div className="fixed flex navbar top-0 min-h-screen items-center justify-center opacity-90 h-full w-full z-40 bg-mainBg ">
                    <ul className="font-poppins text-center text-lg space-y-3">
                        <li>
                            <div className="w-16 mx-auto hover:transition ease-in-out hover:border-b-2 transform duration-200 hover:scale-110 border-secondaryBg">
                                <div onClick={() => handleOnClick("about")} className="cursor-pointer" id="about-mobile">
                                    About
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="w-full mx-auto hover:transition ease-in-out transform duration-200 hover:scale-110 hover:border-b-2 border-secondaryBg">
                                <div onClick={() => handleOnClick("works")} className="cursor-pointer" id="work-mobile">
                                    Work Experience
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="w-20 mx-auto hover:transition ease-in-out transform duration-200 hover:scale-110 hover:border-b-2 border-secondaryBg">
                                <div onClick={() => handleOnClick("projects")} className="cursor-pointer" id="projects-mobile">
                                    Projects
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="w-16 mx-auto hover:transition ease-in-out transform duration-200 hover:scale-110 hover:border-b-2 border-secondaryBg">
                                <a onClick={() => handleOnClick("contact")} className="cursor-pointer" id="contact-mobile">
                                    Contact
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
            {children}
        </div>
    );
};

export default Header;
