import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import scrollbar from "tailwind-scrollbar";

export default {
    jit: true,
    content: ["./src/Components/**/*.tsx", "./src/App.tsx"],
    theme: {
        screens: {
            xss: '320px',
            xs: '475px',
            ...defaultTheme.screens,
        },
        fontFamily: {
            poppins: ["Poppins"],
            openSans: ["Open Sans"],
            anony: ["Anonymous Pro"],
        },
        extend: {
            width: {
                portfolioWidth: "450px",
            },
            colors: {
                background: "#272727",
                primary: "#0B0B0B",
                mainBg: "#121212",
                primaryBg: "#9DEDF8",
                secondaryBg: "#9DEDF8",
                pBg: "#A1AEC1",
                bgCard: "#252525",
            },
        },
    },
    variants: {
        scrollbar: ["rounded"],
        extend: {
            transitionTimingFunction: ["hover", "focus"],
            transitionDuration: ["hover", "focus"],
            textColor: ["responsive", "hover", "focus", "group-hover"],
            borderWidth: ["hover"],
            transform: ["hover"],
            scale: ["hover"],
            fontSize: ["hover", "focus"],
            transitionProperty: ["hover", "focus"],
        },
    },
    plugins: [forms, scrollbar],
}

