import classNames from "classnames";
import _ from "lodash";
import React, { Ref, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const PageTwo: React.FC<{ ref: Ref<HTMLDivElement>; }> = React.forwardRef((_props, ref: Ref<HTMLDivElement>): JSX.Element => {
    const [activeWork, setActiveWork] = useState<"btph" | "unnamed" | "gl" | "lgu">("btph");

    return (
        <div ref={ref}>
            <Slide direction="up" triggerOnce cascade>
                <div className="font-poppins font-bold text-5xl mb-10">Places I've worked?</div>
            </Slide>
            <div className="flex md:flex-row xss:flex-col xl:max-w-6xl md:max-w-full mx-auto space-x-2 mb-40">
                <Fade>
                    <div className="md:flex text-center xss:grid xss:grid-cols-2 xss:gap-3 md:flex-col md:space-y-2 md:space-x-0">
                        <Slide direction="up" duration={800} triggerOnce cascade>
                            <button
                                id="btph"
                                onClick={() => setActiveWork("btph")}
                                className={classNames("py-4 px-6 w-36 h-32 rounded-lg border-[0.1rem] border-opacity-50", {
                                    "border-secondaryBg bg-white bg-opacity-5  border-opacity-100": _.isEqual(activeWork, "btph"),
                                })}
                            >
                                <img src="images/btph.png" className="rounded-full" />
                            </button>
                            <button
                                id="unnamed"
                                onClick={() => setActiveWork("unnamed")}
                                className={classNames("py-4 px-6 w-36 h-32 rounded-lg border-[0.1rem] border-opacity-50", {
                                    "border-secondaryBg bg-white bg-opacity-5  border-opacity-100": _.isEqual(activeWork, "unnamed"),
                                })}
                            >
                                <img src="images/unnamed.jpeg" />
                            </button>
                            <button
                                id="gl"
                                onClick={() => setActiveWork("gl")}
                                className={classNames("py-4 px-6 w-36 h-32 rounded-lg border-[0.1rem] border-opacity-50", {
                                    "border-secondaryBg bg-white bg-opacity-5  border-opacity-100": _.isEqual(activeWork, "gl"),
                                })}
                            >
                                <img src="images/gl.png" />
                            </button>
                            <button
                                id="lgu"
                                onClick={() => setActiveWork("lgu")}
                                className={classNames("py-4 px-6 w-36 h-32 rounded-lg border-[0.1rem] border-opacity-50", {
                                    "border-secondaryBg bg-white bg-opacity-5  border-opacity-100": _.isEqual(activeWork, "lgu"),
                                })}
                            >
                                <img src="images/lgu-botolan.png" />
                            </button>
                        </Slide>
                    </div>
                </Fade>
                {_.isEqual(activeWork, "btph") && (
                    <div className="p-4">
                        <Fade duration={500} direction="up">
                            <div className="font-poppins text-secondaryBg text-xl font-bold mb-4">Software Engineer</div>
                            <div className="font-poppins text-xl font-bold">Business Tree PH</div>
                            <div className="font-poppins text-sm text-pBg focus-normal mb-6">Jan 24, 2022 - Feb 07, 2025</div>
                            <div className="flex flex-col space-y-1">
                                <Slide fraction={1} duration={500} direction="up" triggerOnce cascade>
                                    <div className="flex flex-row space-x-2 items-start">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                                                <path
                                                    d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                    fill="#9DEDF8"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-poppins font-light text-pBg text-base max-w-xl">
                                            As one of the core development engineers at <a target="_blank" className="font-bold" href="https://paystage.net">paystage.net</a>, I mostly work on fixes and feature releases, write test scripts, and contribute ideas to improve the project. I also worked on other projects, handling feature releases and making significant code contributions for improvements.

                                        </p>
                                    </div>
                                </Slide>
                            </div>
                        </Fade>
                    </div>
                )}
                {_.isEqual(activeWork, "unnamed") && (
                    <div className="p-4">
                        <Fade duration={500} direction="up">
                            <div className="font-poppins text-secondaryBg text-xl font-bold mb-4">Software Developer</div>
                            <div className="font-poppins text-xl font-bold">Unnamed.gg</div>
                            <div className="font-poppins text-sm text-pBg focus-normal mb-6">November 2022 - February 2023</div>
                            <div className="flex flex-col space-y-1">
                                <Slide fraction={1} duration={500} direction="up" triggerOnce cascade>
                                    <div className="flex flex-row space-x-2 items-start">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                                                <path
                                                    d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                    fill="#9DEDF8"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-poppins font-light text-pBg text-base max-w-xl">
                                            I collaborated on a team meeting strict deadlines for our company's Web3 application. My role involved implementing feature enhancements, creating test scripts, and integrating a crypto payment service.
                                        </p>
                                    </div>
                                </Slide>
                            </div>
                        </Fade>
                    </div>
                )}
                {_.isEqual(activeWork, "gl") && (
                    <div className="p-4">
                        <Fade duration={500} direction="up">
                            <div className="font-poppins text-secondaryBg text-xl font-bold mb-4">Web Developer</div>
                            <div className="font-poppins text-xl font-bold">Goodlife Microlending Inc.</div>
                            <div className="font-poppins text-sm text-pBg focus-normal mb-6">Sept 17, 2018 - Dec 30, 2021</div>
                            <div className="flex flex-col space-y-1">
                                <Slide fraction={1} duration={500} direction="up" triggerOnce cascade>
                                    <div className="flex flex-row space-x-2 items-start">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                                                <path
                                                    d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                    fill="#9DEDF8"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-poppins font-light text-pBg text-base max-w-xl">
                                            In my initial professional role as a solo developer, I aimed to showcase my skills and abilities. During this time, I successfully created several information systems to support the administration and human resources departments, including Loan InfoSys versions 1 and 2, Human Resource InfoSys, Profiling Verification InfoSys, and GL Online Form.
                                        </p>
                                    </div>
                                </Slide>
                            </div>
                        </Fade>
                    </div>
                )}
                {_.isEqual(activeWork, "lgu") && (
                    <div className="p-4">
                        <Fade duration={500} direction="up">
                            <div className="font-poppins text-secondaryBg text-xl font-bold mb-4">Graphic Designer</div>
                            <div className="font-poppins text-xl font-bold">LGU (Botolan, Zambales)</div>
                            <div className="font-poppins text-pBg text-base focus-normal mb-6">Apr 2018 - Sept 2018</div>
                            <div className="flex flex-col space-y-1">
                                <Slide fraction={1} duration={500} direction="up" triggerOnce cascade>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                                                <path
                                                    d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                    fill="#9DEDF8"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-poppins font-light text-pBg text-base max-w-xl">
                                            I produced and conceptualized graphic assets for event posters and banners, I handled the design of the first magazine issue in 2018 and engaged in video editing for documentary productions.
                                        </p>
                                    </div>
                                </Slide>
                            </div>
                        </Fade>
                    </div>
                )}
            </div>
        </div>
    );
});

export default PageTwo;
