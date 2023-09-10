import classNames from "classnames";
import _ from "lodash";
import React, { Ref, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const PageTwo: React.FC<{ ref: Ref<HTMLDivElement> }> = React.forwardRef((_props, ref: Ref<HTMLDivElement>): JSX.Element => {
    const [activeWork, setActiveWork] = useState<"btph" | "unnamed" | "gl" | "lgu">("btph");

    return (
        <div ref={ref}>
            <Slide direction="up" triggerOnce cascade>
                <div className="font-poppins font-bold text-5xl mb-10">Places I've worked?</div>
                <p className="font-poppins font-light text-pBg max-w-4xl mb-10 leading-6">
                    Since 2018, I had the privilege to work with a these companies that enabled me to show off my skills and talents.
                </p>
            </Slide>
            <div className="flex md:flex-row xss:flex-col xl:max-w-6xl md:max-w-full mx-auto space-x-2 mb-40">
                <Fade>
                    <div className="md:flex text-center xss:grid xss:grid-cols-2 xss:gap-3 md:flex-col md:space-y-2 md:space-x-0">
                        <Slide direction="up" duration={800} triggerOnce cascade>
                            <button
                                id="btph"
                                onClick={() => setActiveWork("btph")}
                                className={classNames("py-4 px-6 w-36 h-32 rounded-lg border-2 border-opacity-50", {
                                    "border-secondaryBg bg-white bg-opacity-10  border-opacity-100": _.isEqual(activeWork, "btph"),
                                })}
                            >
                                <img src="images/btph.png" className="rounded-full" />
                            </button>
                            <button
                                id="unnamed"
                                onClick={() => setActiveWork("unnamed")}
                                className={classNames("py-4 px-6 w-36 h-32 rounded-lg border-2 border-opacity-50", {
                                    "border-secondaryBg bg-white bg-opacity-10  border-opacity-100": _.isEqual(activeWork, "unnamed"),
                                })}
                            >
                                <img src="images/unnamed.jpeg" />
                            </button>
                            <button
                                id="gl"
                                onClick={() => setActiveWork("gl")}
                                className={classNames("py-4 px-6 w-36 h-32 rounded-lg border-2 border-opacity-50", {
                                    "border-secondaryBg bg-white bg-opacity-10  border-opacity-100": _.isEqual(activeWork, "gl"),
                                })}
                            >
                                <img src="images/gl.png" />
                            </button>
                            <button
                                id="lgu"
                                onClick={() => setActiveWork("lgu")}
                                className={classNames("py-4 px-6 w-36 h-32 rounded-lg border-2 border-opacity-50", {
                                    "border-secondaryBg bg-white bg-opacity-10  border-opacity-100": _.isEqual(activeWork, "lgu"),
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
                            <div className="font-poppins text-sm text-pBg focus-normal mb-6">Jan 24, 2022 - Present</div>
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
                                        <p className="font-poppins font-light text-pBg text-base max-w-4xl">
                                            Maintain one of their Japan B2B Payment Solutions, and developed API integrations.
                                        </p>
                                    </div>
                                    <div className="flex flex-row space-x-2 items-start">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                                                <path
                                                    d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                    fill="#9DEDF8"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-poppins font-light text-pBg text-base max-w-4xl">Release monthly fixes and feature update.</p>
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
                                        <p className="font-poppins font-light text-pBg text-base max-w-4xl">Modifying software to fix error, improve its performance</p>
                                    </div>
                                    <div className="flex flex-row space-x-2 items-start">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                                                <path
                                                    d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                    fill="#9DEDF8"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-poppins font-light text-pBg text-base max-w-4xl">Deploying software tools, processes and metrics</p>
                                    </div>
                                    <div className="flex flex-row space-x-2 items-start">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                                                <path
                                                    d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                    fill="#9DEDF8"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-poppins font-light text-pBg text-base max-w-4xl">Writing and implementing code</p>
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
                                        <p className="font-poppins font-light text-pBg text-base max-w-4xl">
                                            Revamped their existing web application, restructuring the old PHP core app into a newer architectural design approach
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <Slide fraction={1} duration={700} direction="up" triggerOnce cascade>
                                            <div className="flex flex-row items-center max-w-3xl space-x-2">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                                                        <path
                                                            d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                            fill="#9DEDF8"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col font-poppins font-light text-pBg text-base max-w-4xl">
                                                    Created multiple and useful web application for Administration Department
                                                </div>
                                            </div>
                                        </Slide>
                                        <div className="flex flex-col font-poppins font-light my-4 mx-auto text-pBg text-base w-4/5">
                                            <div className="flex flex-col items-start max-w-3xl">
                                                <Slide fraction={1} duration={900} direction="up" triggerOnce cascade>
                                                    <div className="flex flex-row">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                                fill="#9DEDF8"
                                                            />
                                                        </svg>
                                                        <div className="flex flex-col font-poppins font-light text-pBg text-base max-w-4xl">Loan information system</div>
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                                fill="#9DEDF8"
                                                            />
                                                        </svg>
                                                        <div className="flex flex-col font-poppins font-light text-pBg text-base max-w-4xl">
                                                            HRIS (Human Resource Information System) including Payroll
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                                fill="#9DEDF8"
                                                            />
                                                        </svg>
                                                        <div className="flex flex-col font-poppins font-light text-pBg text-base max-w-4xl">Profiling verification system</div>
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                                fill="#9DEDF8"
                                                            />
                                                        </svg>
                                                        <div className="flex flex-col font-poppins font-light text-pBg text-base max-w-4xl">Talaan System</div>
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                                fill="#9DEDF8"
                                                            />
                                                        </svg>
                                                        <div className="flex flex-col font-poppins font-light text-pBg text-base max-w-4xl">Online Registration Form</div>
                                                    </div>
                                                </Slide>
                                            </div>
                                        </div>
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
                            <div className="font-poppins text-xl font-bold">Local Goverment Unit (Botolan, Zambales)</div>
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
                                        <p className="font-poppins font-light text-pBg text-base max-w-4xl">
                                            I create and designing graphic materials like event posters and banners.
                                        </p>
                                    </div>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                                                <path
                                                    d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                    fill="#9DEDF8"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-poppins font-light text-pBg text-base max-w-4xl">
                                            I am also one of those who worked on their first issue magazine of our local government unit issue of the year 2018
                                        </p>
                                    </div>
                                    <div className="flex flex-row space-x-2 items-center">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                                                <path
                                                    d="M13.293 7.293a.999.999 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a.999.999 0 0 0-1.414 0z"
                                                    fill="#9DEDF8"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-poppins font-light text-pBg text-base max-w-4xl">
                                            I've also worked on photography and videography covering their local town event.
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
