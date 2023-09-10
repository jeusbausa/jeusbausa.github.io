/* eslint-disable @typescript-eslint/no-explicit-any */
import Paragraph from "@components/Loaders/Paragraph";
import _ from "lodash";
import { Suspense, lazy, useRef, useState } from "react";

const Header = lazy(() => import("@components/Header"));
const Content = lazy(() => import("@components/Content"));
const SidePanel = lazy(() => import("@components/SidePanel"));
const TechStacks = lazy(() => import("@components/Modals/TechStacks"));
const PageOne = lazy(() => import("@components/PageOne"));
const PageTwo = lazy(() => import("@components/PageTwo"));
const PageThree = lazy(() => import("@components/PageThree"));
const PageFour = lazy(() => import("@components/PageFour"));
const Footer = lazy(() => import("@components/Footer"));

function App() {
    const [showTechStack, setShowTechStacks] = useState<boolean>(false);
    const aboutRef = useRef<any>(null);
    const workRef = useRef<any>(null);
    const projectRef = useRef<any>(null);
    const contactRef = useRef<any>(null);

    const handleScroll = (type: string) => {
        if (_.isEqual("about", type)) {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        if (_.isEqual("works", type)) {
            workRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        if (_.isEqual("projects", type)) {
            projectRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        if (_.isEqual("contact", type)) {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-mainBg scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-gray-700 scrollbar-track-mainBg scrollbar-thumb-rounded-full text-white">
            <Suspense fallback={<Paragraph rows={6} />}>
                <Header handleOnClick={(value) => handleScroll(value)}>
                    <TechStacks isOpen={showTechStack} onClose={(value) => setShowTechStacks(value)} />
                    <SidePanel />
                    <Content>
                        <PageOne ref={aboutRef} onShowTechStack={(value) => setShowTechStacks(value)} />
                        <PageTwo ref={workRef} />
                        <PageThree ref={projectRef} />
                        <PageFour ref={contactRef} />
                        <Footer />
                    </Content>
                </Header>
            </Suspense>
        </div>
    );
}

export default App;
