import React from "react";
import { Reveal, Slide } from "react-awesome-reveal";

const SidePanel: React.FC = (): JSX.Element => {
  return (
    <div className="xl:flex xl:items-center xl:h-screen xl:sticky xl:top-0 xs:relative md:px-12 xss:px-6 xl:pt-0 xss:py-24 xl:w-2/4 xss:w-full">
      <div className="text-white xl:mt-36 xss:mt-0 font-openSans">
        <Reveal>
          <Slide direction="left" cascade damping={0.1}>
            <div className="hero font-semibold text-sm mb-2 text-secondaryBg">
              Hello World!, I'm
            </div>
            <div className="hero font-extrabold text-5xl mb-4">JEUS D.</div>
            <div className="hero font-extrabold text-7xl transition transform duration-500 ease-in-out xl:hover:translate-x-32 md:hover:translate-x-64 hover:scale-150 text-secondaryBg mb-4">
              BAUSA
            </div>
            <div className="hero font-light text-sm my-2">
              Or you can call me "Je". That works too . . .
            </div>
            <div className="hero font-bold text-xl mb-2 text-secondaryBg">
              Software Engineer
            </div>
            <div className="mt-6 mb-8 transition transform duration-300 hover:scale-125 hover:translate-x-12">
              <a
                href="mailto:jeusdbausa@gmail.com"
                className="hero w-36 h-12 text-xs border-2 border-secondaryBg text-secondaryBg font-extralight px-6 py-3"
              >
                Get in Touch!
              </a>
            </div>
            <div className="hero flex flex-row space-x-3 items-center mb-6">
              <a target="_blank" href="https://github.com/jeusbausa">
                <svg
                  className="transform duration-200 hover:scale-110"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#A1AEC1"
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/dev?id=5981830788336069997"
              >
                <svg
                  className="transform duration-200 hover:scale-110"
                  style={{ background: "new 0 0 504.4 504.4" }}
                  width="34"
                  height="34"
                  viewBox="0 0 48 48"
                  id="a"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <style>{`.b{fill:#A1AEC1;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}`}</style>
                  </defs>
                  <path
                    className="b"
                    d="m41.0546,27.7377c1.3497-.7268,2.2842-2.1803,2.2842-3.7377-.1038-1.5574-1.0383-3.0109-2.388-3.7377h0L15.2022,5.623c-.623-.4153-1.4536-.623-2.2842-.623-1.9727,0-3.7377,1.3497-4.153,3.1148h0c-.1038.3115-.1038.7268-.1038,1.1421v29.5902c0,.4153,0,.7268.1038,1.1421v-.1038h0c.5191,1.765,2.1803,3.1148,4.153,3.1148.8306,0,1.5574-.2077,2.1803-.6229h0l25.9563-14.6393Z"
                  />
                  <g>
                    <g>
                      <circle className="b" cx="14.5702" cy="29" r="1.8044" />
                      <circle
                        className="b"
                        cx="20.742"
                        cy="22.8282"
                        r="1.8044"
                      />
                      <circle
                        className="b"
                        cx="26.1938"
                        cy="28.0135"
                        r="1.8044"
                      />
                      <circle
                        className="b"
                        cx="33.4298"
                        cy="21.65"
                        r="1.8044"
                      />
                    </g>
                    <line
                      className="b"
                      x1="15.8462"
                      y1="27.7241"
                      x2="19.4661"
                      y2="24.1041"
                    />
                    <line
                      className="b"
                      x1="27.5248"
                      y1="26.8012"
                      x2="32.099"
                      y2="22.8621"
                    />
                    <line
                      className="b"
                      x1="21.9861"
                      y1="24.1325"
                      x2="24.9498"
                      y2="26.7091"
                    />
                  </g>
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
