import React, { useEffect, useRef } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import gsap from "gsap";
import '../src/App.css'

const SkewedImages = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const skewSetter = gsap.quickTo(".dd", "skewY"); // fast
    const clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    const handleScroll = () => {
      const scrollOffset = wrapperRef.current.scrollTop;
      const velocity = scrollOffset / -50;
      skewSetter(clamp(velocity));
    };

    wrapperRef.current.addEventListener("scroll", handleScroll);

    return () => {
      wrapperRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="wrapper"
      ref={wrapperRef}
      style={{ overflowY: "scroll", height: "120vh" }}
    >
      <div className="App">
      <div className="w-full h-full flex items-center justify-center btn-fixed">
                                <button>Get started</button>
                                </div>
        <div className="circle gradient-green">
          <div className="flex flex-col items-center px-16 pt-7 pb-20 bg-slate-950 max-md:px-5">
            <div className="flex flex-col items-center w-full max-w-[1180px] max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center self-stretch w-full max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b919a6a5f9527fac8ebd8c28261ed22f4792bed75480ac190d0d97e03665?apiKey=53b56e9471ea4918889abcc06edc8c3e&"
                  className="shrink-0 self-stretch max-w-full aspect-[2.33] w-[117px]"
                />
                <div className="flex gap-5 self-stretch my-auto text-xs max-md:flex-wrap">
                  <div className="justify-center px-3 py-1.5 my-auto text-white whitespace-nowrap bg-blue-700 rounded-lg">
                    Home
                  </div>
                  <div className="flex flex-auto gap-5 justify-between items-center text-white text-opacity-50">
                    <div className="justify-center self-stretch p-2.5 whitespace-nowrap">
                      Courses
                    </div>
                    <div className="self-stretch my-auto">Contact Us</div>
                    <div className="self-stretch my-auto">About Us</div>
                    <div className="self-stretch my-auto">Chat With AI</div>
                  </div>
                </div>
                <div className="flex gap-5 self-stretch my-auto text-sm">
                  <div className="justify-center px-6 py-3 font-medium bg-blue-700 rounded-2xl leading-[114%] shadow-[0px_12px_23px_rgba(0,56,97,1)] text-neutral-200 max-md:px-5">
                    Explore Courses
                  </div>
                  <div className="flex gap-5 justify-between pl-8 font-bold text-white rounded-2xl border-sky-500 border-solid shadow-lg border-[1.5px]">
                    <div className="my-auto">Sign In</div>
                    <div className="justify-center px-8 py-3 bg-blue-600 rounded-2xl shadow-lg max-md:px-5">
                      Sign Up
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 text-[16px] font-bold text-blue-700 leading-[52.44px] max-md:mt-10 max-md:text-4xl">
                <h1 aria-hidden="true" class="text-blue-700  text filter-text">
                  Our Experts
                </h1>
              </div>
              <div className="mt-7 text-base text-neutral-200 text-opacity-50">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </div>

              <div id="content">
                <section id="content">
                  <ParallaxProvider>
                    <Parallax y={[0, 0]} tagOuter="figure">
                      <section className="">
                        <div className="mt-20 w-full max-w-[1128px] max-md:mt-10 max-md:max-w-full">
                          <div className="w-full flex items-center justify-between">
                            <div className="flex w-full h-full ">
                              <div
                                data-speed="0.8"
                                className="dd grid grid-cols-8  max-md:ml-0 max-md:w-full"
                              >
                                {[1, 2, 3, 4].map((item, index) => {
                                  return (
                                    <>
                                      <div
                                        key={item}
                                        className={` ${
                                          index === 1
                                            ? "row-start-3 row-end-4 col-start-6 col-end-8 "
                                            : ""
                                        } ${
                                          index === 0
                                            ? "col-start-3 col-end-5 "
                                            : ""
                                        } ${
                                          index === 2
                                            ? "row-start-4 row-end-5 col-start-3 col-end-5 "
                                            : ""
                                        } ${
                                          index === 3
                                            ? "row-start-8 row-end-9 col-start-6 col-end-8  "
                                            : ""
                                        } grow justify-center px-2.5 py-3 w-full text-center text-white backdrop-blur-[25px] bg-slate-900 bg-opacity-80 rounded-[30px] max-md:mt-8`}
                                      >
                                        <div className="flex flex-col items-center px-8 pt-7 pb-14 border-blue-700 border-opacity-0 rounded-[30px] max-md:px-5">
                                          <img
                                            loading="lazy"
                                            className="w-20 h-20 rounded-full border-[1px] bg-gradient-to-r from-[#57677a] to-[#1f344e] aspect-[0.65]"
                                          />
                                          <h1 className="mt-8">
                                            Digital Marketing
                                          </h1>
                                          <p className="text-base font-light text-[#898ca9] pt-7">
                                            Speak with various AI tutors,
                                            tailored to youLorem ipsum dolor sit
                                            amet, Lorem ipsum dolor
                                          </p>
                                          <a className="flex justify-between w-32 pt-8 text-[#194bfd]">
                                            Start Course
                                            <img
                                              className="w-[25px] h-[25px] "
                                              srcSet="/arrow.png"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                            
                          </div>
                         
                          {/* <div data-speed="1.8"  className="dd flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center px-2.5 py-3 w-full text-2xl font-semibold text-center text-white uppercase backdrop-blur-[25px] bg-slate-900 bg-opacity-80 rounded-[30px] max-md:mt-8">
                    <div className="flex flex-col items-center px-16 pt-7 pb-14 border-solid border-[3px] border-blue-700 border-opacity-0 rounded-[30px] max-md:px-5">
                      <img
                        loading="lazy"
                        data-speed="2"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&"
                        className="aspect-[0.83] w-[206px]"
                      />
                      <div className="mt-8">DigitalSherzad</div>
                    </div>
                  </div>
                </div>
              </div>


              <div data-speed="0.5"  className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div data-speed="0.5"  className="dd flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center px-2.5 py-3 w-full text-2xl font-semibold text-center text-white uppercase backdrop-blur-[25px] bg-slate-900 bg-opacity-80 rounded-[30px] max-md:mt-8">
                    <div className="flex flex-col items-center px-20 pt-7 pb-14 border-solid border-[3px] border-blue-700 border-opacity-0 rounded-[30px] max-md:px-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&"
                        className="w-40 aspect-[0.65]"
                      />
                      <div className="mt-8">DigitalSabastian</div>
                    </div>
                  </div>
                </div>
                <div data-speed="0.5"  className="dd flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center px-2.5 py-3 w-full text-2xl font-semibold text-center text-white uppercase backdrop-blur-[25px] bg-slate-900 bg-opacity-80 rounded-[30px] max-md:mt-8">
                    <div className="flex flex-col items-center px-20 pt-7 pb-14 border-solid border-[3px] border-blue-700 border-opacity-0 rounded-[30px] max-md:px-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&"
                        className="w-40 aspect-[0.65]"
                      />
                      <div className="mt-8">DigitalIlham</div>
                    </div>
                  </div>
                </div>
                <div data-speed="0.5"  className="dd flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center px-2.5 py-3 w-full text-2xl font-semibold text-center text-white uppercase backdrop-blur-[25px] bg-slate-900 bg-opacity-80 rounded-[30px] max-md:mt-8">
                    <div className="flex flex-col items-center px-16 pt-7 pb-14 border-solid border-[3px] border-blue-700 border-opacity-0 rounded-[30px] max-md:px-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&"
                        className="aspect-[0.83] w-[206px]"
                      />
                      <div className="mt-8">DigitalSherzad</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div data-speed="0.5"  className="dd flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center px-2.5 py-3 w-full text-2xl font-semibold text-center text-white uppercase backdrop-blur-[25px] bg-slate-900 bg-opacity-80 rounded-[30px] max-md:mt-8">
                    <div className="flex flex-col items-center px-20 pt-7 pb-14 border-solid border-[3px] border-blue-700 border-opacity-0 rounded-[30px] max-md:px-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35e93ca5b9c59f5ab96b775684c5112c21c9af03d03dbc4c4dbd3a388cca8e8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&"
                        className="w-40 aspect-[0.65]"
                      />
                      <div className="mt-8">DigitalSabastian</div>
                    </div>
                  </div>
                </div>
                <div data-speed="0.5"  className="dd flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center px-2.5 py-3 w-full text-2xl font-semibold text-center text-white uppercase backdrop-blur-[25px] bg-slate-900 bg-opacity-80 rounded-[30px] max-md:mt-8">
                    <div className="flex flex-col items-center px-20 pt-7 pb-14 border-solid border-[3px] border-blue-700 border-opacity-0 rounded-[30px] max-md:px-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6efee7c9594c3a480c908071b44aec28b183c9aa51e7cb36c4e215bda54d2b8c?apiKey=53b56e9471ea4918889abcc06edc8c3e&"
                        className="w-40 aspect-[0.65]"
                      />
                      <div className="mt-8">DigitalIlham</div>
                    </div>
                  </div>
                </div>
                <div data-speed="0.5"  className="dd flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center px-2.5 py-3 w-full text-2xl font-semibold text-center text-white uppercase backdrop-blur-[25px] bg-slate-900 bg-opacity-80 rounded-[30px] max-md:mt-8">
                    <div className="flex flex-col items-center px-16 pt-7 pb-14 border-solid border-[3px] border-blue-700 border-opacity-0 rounded-[30px] max-md:px-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/258315a15cb7ec3aab160364d9ed5047ea8f315a4347a710869482cfad8c1b73?apiKey=53b56e9471ea4918889abcc06edc8c3e&"
                        className="aspect-[0.83] w-[206px]"
                      />
                      <div className="mt-8">DigitalSherzad</div>
                    </div>
                  </div>
                </div> */}
                        </div>
                      </section>
                    </Parallax>
                  </ParallaxProvider>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkewedImages;
