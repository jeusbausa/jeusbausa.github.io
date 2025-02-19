import React from "react";
import { Reveal, Slide } from "react-awesome-reveal";

const SidePanel: React.FC = (): JSX.Element => {
    return (
        <div className="xl:flex xl:items-center xl:h-screen xl:sticky xl:top-0 xs:relative md:px-12 xss:px-6 xl:pt-0 xss:py-24 xl:w-2/4 xss:w-full">
            <div className="text-white xl:mt-36 xss:mt-0 font-openSans">
                <Reveal>
                    <Slide direction="left" cascade damping={0.1}>
                        <div className="hero font-semibold text-sm mb-2 text-secondaryBg">Hello World!, I'm</div>
                        <div className="hero font-extrabold text-5xl mb-4">JEUS D.</div>
                        <div className="hero font-extrabold text-7xl transition transform duration-500 ease-in-out xl:hover:translate-x-32 md:hover:translate-x-64 hover:scale-150 text-secondaryBg mb-4">
                            BAUSA
                        </div>
                        <div className="hero font-light text-sm my-2">Or you can call me "Je". That works too . . .</div>
                        <div className="hero font-bold text-xl mb-2 text-secondaryBg">Software Engineer</div>
                        <div className="mt-6 mb-8 transition transform duration-300 hover:scale-125 hover:translate-x-12">
                            <a href="mailto:jeusdbausa@gmail.com" className="hero w-36 h-12 text-xs border-2 border-secondaryBg text-secondaryBg font-extralight px-6 py-3">
                                Get in Touch!
                            </a>
                        </div>
                        <div className="hero flex flex-row space-x-3 items-center mb-6">
                            <a target="_blank" href="https://github.com/jeusbausa">
                                <svg className="transform duration-200 hover:scale-110" width="34" height="34" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill="#A1AEC1"
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                    />
                                </svg>
                            </a>
                            <a target="_blank" href="https://instagram.com/surjheee">
                                <svg className="transform duration-200 hover:scale-110" width="34" height="34" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill="#A1AEC1"
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                    />
                                </svg>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/jeusbausa/">
                                <svg
                                    className="transform duration-200 hover:scale-110"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="34"
                                    height="34"
                                    viewBox="0 0 504.4 504.4"
                                    style={{ background: "new 0 0 504.4 504.4" }}
                                    xmlSpace="preserve"
                                >
                                    <path
                                        fill="#A1AEC1"
                                        d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
			C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8
			c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6
			c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </Slide>
                </Reveal>
            </div>
        </div>
    );
};

export default SidePanel;
