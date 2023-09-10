import React, { Ref } from "react";
import { Slide } from "react-awesome-reveal";

const PageFour: React.FC<{ ref: Ref<HTMLDivElement> }> = React.forwardRef((_props, ref: Ref<HTMLDivElement>): JSX.Element => {
    return (
        <div ref={ref}>
            <Slide direction="up" duration={1000} cascade>
                <div className="flex flex-col xl:max-w-3xl xss:max-w-full xss:flex-col section text-white mb-32">
                    <div className="font-poppins app font-bold text-5xl mb-10">Let's talk...</div>
                    <p className="font-poppins font-light text-pBg max-w-4xl mb-10 leading-6">
                        Anything about coding, work-related stuff, movies, music, video editing, photo editing, online games, feel free to message me on my social media accounts or
                        send me an
                        <a className="text-primaryBg" href="mailto:jeusdbausa@gmail.com">
                            &nbsp;email
                        </a>
                    </p>
                </div>
            </Slide>
        </div>
    );
});

export default PageFour;
