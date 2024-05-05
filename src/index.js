import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SkewedImages from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SkewedImages />
  </React.StrictMode>
);

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
// import React from "https://esm.sh/react@18.3.1";
// import ReactDOM from "https://esm.sh/react-dom@18.3.1";

// import gsap from "https://esm.sh/gsap";
// import { useGSAP } from "https://esm.sh/@gsap/react?deps=react@18.3.1";

// const { useRef } = React;
// function App() {
//   const container = useRef();
//   const circle = useRef();

//   useGSAP(() => {
//       // use selectors...
//       gsap.to(".box", { rotation: "+=360", duration: 3 });

//       // or refs...
//       gsap.to(circle.current, { rotation: "-=360", duration: 3 });
//     },
//     { scope: container }
//   ); 
//   return (

//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollSmoother from 'smoothscroll'; // assuming this is the library for smooth scrolling

// const SkewedImages = () => {
//   const wrapperRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const skewSetter = gsap.quickTo("img", "skewY"); // fast
//     const clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

//     const smoother = ScrollSmoother.create({
//       wrapper: wrapperRef.current,
//       content: contentRef.current,
//       smooth: 2,
//       speed: 3,
//       effects: true,
//       onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
//       onStop: () => skewSetter(0)
//     });

//     return () => {
//       smoother.destroy(); // Clean up ScrollSmoother instance on unmount
//     }
//   }, []);

//   return (
//     <div id="wrapper" ref={wrapperRef}>
//       <section id="content" ref={contentRef}>
//         <section className="images">
//           <img data-speed="0.8" src="https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
//           <img data-speed="0.9" src="https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="" />
//           <img data-speed="1" src="https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="" />
//           <img data-speed="1.1" src="https://images.unsplash.com/photo-1589882265634-84f7eb9a3414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80" alt="" />
//           <img data-speed="0.9" src="https://images.unsplash.com/photo-1514689832698-319d3bcac5d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80" alt="" />
//           <img data-speed="1.2" src="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="" />
//           <img data-speed="0.8" src="https://images.unsplash.com/photo-1588007375246-3ee823ef4851?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
//           <img data-speed="1" src="https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
//         </section>
//       </section>
//     </div>
//   );
// };

// export default SkewedImages;

