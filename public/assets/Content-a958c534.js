import{r as n,j as s}from"./index-3ae255ac.js";import{c as i}from"./index-6d66e5f3.js";function l(){const[e,t]=n.useState(0);return n.useEffect(()=>{const o=()=>{t(window.pageYOffset)};return window.addEventListener("scroll",o),o(),()=>window.removeEventListener("scroll",o)},[]),e}const a=({children:e})=>{const t=l();return s.jsxs("main",{className:"xl:w-5/6 lg:w-screen pb-32 xs:mx-auto md:px-12 xss:px-6 z-0 xss:space-y-24 ",children:[e,s.jsxs("div",{className:i("fixed right-0 bottom-0 z-40 m-6 space-y-2 transition delay-200 ease-in-out xss:hidden animate-bounce",{"xl:block":t>0}),children:[s.jsxs("svg",{className:"mx-auto",width:"15px",height:"100%",viewBox:"0 0 247 390",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5",children:[s.jsx("path",{id:"wheel",d:"M123.359,79.775l0,72.843",fill:"none",stroke:"#fff",strokeWidth:"20px"}),s.jsx("path",{id:"mouse",d:"M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",fill:"none",stroke:"#fff",strokeWidth:"20px"})]}),s.jsx("p",{className:"font-poppins font-light text-xs",children:"Scroll down"})]})]})};export{a as default};