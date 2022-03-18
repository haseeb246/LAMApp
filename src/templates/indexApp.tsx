/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
// import { graphql } from "gatsby";
import { AppDataContext, IAppDataContext } from "../context/AppDataContext";
import { useKeyPress, useTimeout } from "../utils/hooks";
// import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Scrambler from "../components/Scrambler";
import ScreenHeight from "../components/ScreenHeight";
import CursorInteractive from "../components/CursorInteractive";
import Cross from "../components/svg/Cross";
import WaveText from "../components/WaveText";
import Projects from "../components/Projects";
import AppearOnScroll from "../components/AppearOnScroll";
import ClientLogos from "../components/ClientLogos";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { DocumentContext } from "../context/DocumentContext";
import { DataDto } from "../models/dataDto";
import commonUtil from "../utils/commonUtil";
import { Animated } from "react-animated-css";
import { Animate, AnimateGroup } from "react-simple-animate";
import LazyLoad from "react-lazyload";
import { Box, Grid } from "@material-ui/core";
import Header from "../components/Header";
// import { graphql } from "gatsby";

// import { AppDataContext } from '../context/AppDataContext';
// import { DocumentContext } from '../context/DocumentContext';

// import AppearOnScroll from '../components/AppearOnScroll';
// import Button from '../components/Button';
// import ClientLogos from '../components/ClientLogos.jsx';
// import Cross from '../components/svg/Cross';
// import CursorInteractive from '../components/CursorInteractive';
// import Footer from '../components/Footer';
// import Layout from '../components/Layout';
// import Projects from '../components/Projects.jsx';
// import ScreenHeight from '../components/ScreenHeight';
// import Scrambler from '../components/Scrambler';
// import SEO from '../components/SEO';
// import WaveText from '../components/WaveText';

// import { useKeyPress, useTimeout } from '../utils/hooks';
export interface IIndexProp {
  data: DataDto;
  location: any;
}
const IndexApp = ({ data, location }: IIndexProp) => {
  const { setHeaderVisible } = useContext(AppDataContext);
  const { device } = useContext(DocumentContext);
  const myRef = useRef(null);

  const showReelRef = useRef();

  const [loading, setLoading] = useState<boolean>(true);
  const [afterLoading, setAfterLoading] = useState<boolean>(false);
  const [rendered, setRendered] = useState<boolean>(false);

  const [touchLoaded, setTouchLoaded] = useState<boolean>(false);
  const [scrambleText, setScrambleText] = useState<any | string | undefined>(
    null
  );
  const [showreelActive, setShowreelActive] = useState<boolean>(false);
  const [isShowProgTools, setIsShowProgTools] = useState<boolean>(false);
  const [isShowProjEvolve, setIsShowProjEvolve] = useState<boolean>(false);
  const [isShowLineOfCode, setIsShowLineOfCode] = useState<boolean>(false);
  const [isShowComm, setIsShowComm] = useState<boolean>(false);

  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  const { projects, clients } = frontmatter;

  //

  let scrambleTransitionClass = ``;

  if (rendered) {
    scrambleTransitionClass = `rendered`;
  }

  if (!loading) {
    scrambleTransitionClass = `loaded`;
  }

  //

  const showVideo = () => {
    setShowreelActive(true);
  };

  useEffect(() => {
    if (!showReelRef?.current) {
      return;
    }

    let curr: any = showReelRef.current;
    curr.play();

    if (device && device !== `desktop`) {
      curr.webkitEnterFullscreen();
    }
  }, [showReelRef?.current]);
  //

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
    }
  }, []);

  const escKeyPressed = useKeyPress(`Escape`);

  useEffect(() => {
    setShowreelActive(false);
  }, [escKeyPressed]);

  // useEffect(() => {
  //   if (showreelActive) {
  //     disableBodyScroll();
  //   } else {
  //     clearAllBodyScrollLocks();
  //   }
  // }, [showreelActive]);

  useTimeout(() => {
    setScrambleText(`loading...`);
    setRendered(true);
  }, 100);

  useTimeout(() => {
    setTouchLoaded(true);
  }, 200);

  useTimeout(() => {
    setScrambleText(``);
    setLoading(false);
    setIsShowProgTools(true);

    setTimeout(() => {
      setAfterLoading(true);
      setTimeout(() => {
        setIsShowProjEvolve(true);
        setTimeout(() => {
          setIsShowLineOfCode(true);
          setIsShowComm(true);
          setScrambleText(`Commitment to expanding imaginary`);
        }, 4000);
        setTimeout(() => {
          setScrambleText(`boundaries & disrupting the status quo. TM`);
        }, 10000);

        setTimeout(() => {
          setScrambleText(``);
        }, 15000);
      }, 3000);

      setTimeout(() => {
        setScrambleText(`the status quo. TM`);
      }, 7000);
    }, 500);
  }, 1000);

  useTimeout(() => {
    setHeaderVisible(true);
  }, 2000);

  //

  return (
    <>
      {/* <h1 className="animate__animated animate__bounce">
          An animated element
        </h1>
        <h1
          style={{
            display: "inline-block",
            margin: "0 0.5rem",
            animation: "bounce",
            animationDuration: "2s",
          }}
        >
          An animated element
        </h1> */}
      {/* <Animate
                play={true} // set play true to start the animation
                duration={1} // how long is the animation duration
                delay={0.3} // how many delay seconds will apply before the animation start
                start={{ transform: "translate(100%, 0)" }}
                end={{ transform: "translate(10px, 10px)" }}
                // complete={{ display: "none" }}
                easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                // onComplete={onCompleteCallBack} // call back function when animation is completed
              >
                <div style={{ color: "white", fontSize: "2vw" }}>
                  1 abc hello dsjsdjjdsjd dsdslklds dslk jdslkjds lkdsj ldskj
                  dslkjdslkj
                </div>
              </Animate> */}

      {/* <LazyLoad throttle={100} height={400}> */}
      {/* <div className="index-page__content bg-black">
              <div role="presentation">
                <img
                  src={commonUtil.GetImagePath("/assets/logos/logo.jpg")}
                  alt="logo"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
            </div> */}
      {/* <img
              style={{ width: "300px", height: "300px" }}
              src={commonUtil.GetImagePath("/assets/logos/logo.jpg")}
              alt="Fluff Casual Cosmetics"
            /> */}
      {/* </LazyLoad> */}
      {/* <div
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: "5vw",
                          display: "inline-block",
                          margin: "0 0.5rem",
                          animation: loading ? "backInRight" : "backOutRight",
                          animationDuration: "2s",
                          // animationDelay: "100",
                          // animationIterationCount: "10",
                        }}
                      >
                        Programming tools <br /> for the future
                      </div> */}
      {/* <div
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: "5vw",
                          display: "inline-block",
                          margin: "0 0.5rem",
                          animation: loading ? "backInRight" : "backOutRight",
                          animationDuration: "2s",
                          // animationDelay: "100",
                          // animationIterationCount: "10",
                        }}
                      >
                        Programming tools <br /> for the future
                      </div> */}
      <Box pl={"45px"} pr={"45px"} style={{ color: "white" }}>
        <Grid container>
          <Grid item sm={12} id="header">
            <Header />
          </Grid>
          <Grid item sm={12} id="home" style={{ minHeight: "600px" }}>
            {device && device === `desktop` && (
              <>
                <Grid container>
                  <Grid item sm={12} style={{ minHeight: "50px" }}>
                    {" "}
                  </Grid>
                  {isShowProgTools && (
                    <Grid item sm={12} style={{ marginTop: "15px" }}>
                      <div
                        className={"animate__animated animate__backInRight"}
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: "5vw",
                          animationDuration: "2.5s",
                          animationDelay: "1s",
                        }}
                      >
                        {/* <WaveText
                        interval={20}
                        delay={1500}
                        text={`Programming tools`}
                      /> */}
                        <Scrambler
                          style={{
                            fontSize: "5vw",
                          }}
                          className="whitespace-no-wrap"
                          delay={1500}
                          iterations={20}
                          text={`Programming tools`}
                        />
                        <br />
                        <Scrambler
                          style={{
                            fontSize: "5vw",
                          }}
                          className="whitespace-no-wrap"
                          delay={1500}
                          iterations={20}
                          text={`for the future`}
                        />
                      </div>
                    </Grid>
                  )}

                  {isShowProjEvolve && (
                    <div
                      className={"animate__animated  animate__backInRight"}
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "5vw",
                        animationDuration: "2.5s",
                        animationDelay: "1s",
                      }}
                    >
                      <Scrambler
                        style={{
                          fontSize: "4vw",
                        }}
                        className="whitespace-no-wrap"
                        delay={1500}
                        iterations={20}
                        text={`Home of Project Evolv`}
                      />
                    </div>
                  )}

                  {afterLoading && isShowLineOfCode && (
                    <>
                      <Grid item sm={12} style={{ marginTop: "15px" }}>
                        <div
                          className={"animate__animated animate__backInLeft"}
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: "5vw",
                            animationDuration: "3s",
                            animationDelay: "100",
                          }}
                        >
                          <Scrambler
                            className="whitespace-no-wrap"
                            delay={400}
                            iterations={5}
                            text={`<p>This is code line </p>`}
                          />
                        </div>
                      </Grid>
                      <Grid item sm={12} style={{ marginTop: "15px" }}>
                        <div
                          className={"animate__animated  animate__backInRight"}
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: "5vw",
                            animationDuration: "2s",
                            animationDelay: "100",
                          }}
                        >
                          <Scrambler
                            style={{
                              fontSize: "2vw",
                            }}
                            className="whitespace-no-wrap"
                            delay={400}
                            iterations={15}
                            text={scrambleText}
                          />
                        </div>
                      </Grid>
                      <Grid item sm={12} style={{ marginTop: "50px" }}>
                        <AppearOnScroll>
                          <Grid container>
                            <Grid item sm={4}>
                              {" "}
                            </Grid>
                            <Grid item sm={4}>
                              <div role="presentation">
                                <img
                                  src={commonUtil.GetImagePath(
                                    "/assets/logos/logo.jpg"
                                  )}
                                  alt="logo"
                                  style={{ width: "300px", height: "300px" }}
                                />
                              </div>
                            </Grid>
                            <Grid item sm={4}>
                              {" "}
                            </Grid>
                          </Grid>
                        </AppearOnScroll>
                      </Grid>
                      <Grid item sm={12} style={{ marginTop: "50px" }}>
                        <AppearOnScroll once={false}>
                          <div
                            className={"animate__animated animate__backInRight"}
                            style={{
                              fontWeight: "bold",
                              color: "white",
                              fontSize: "2vw",
                              animationDuration: "2s",
                              animationDelay: "100",
                            }}
                          >
                            {
                              "Created & Built with simplicity, flexibility & reliability in mind for every level of skill."
                            }
                            {
                              "Our simple, intermediate and advanced levels, feature options that were carefully"
                            }
                            {
                              "considered based on skill difficulty for each group."
                            }
                          </div>
                        </AppearOnScroll>
                      </Grid>

                      <Grid item sm={12} style={{ marginTop: "50px" }}>
                        <Grid container>
                          <Grid item sm={12} style={{ marginTop: "15px" }}>
                            <WaveText
                              className="f3"
                              delay={10}
                              text={`Whatever level of building you are at, Noctem tools will allow you to: `}
                            />
                          </Grid>
                          <Grid container style={{ marginTop: "30px" }}>
                            <Grid item sm={4}>
                              {" "}
                              <WaveText
                                className="f3"
                                delay={10}
                                text={`Save Time`}
                              />
                            </Grid>
                            <Grid item sm={4}>
                              {" "}
                              <WaveText
                                className="f3"
                                delay={10}
                                text={`Save Money `}
                              />
                            </Grid>
                            <Grid item sm={4}>
                              {" "}
                              <WaveText
                                className="f3"
                                delay={10}
                                text={`Gain Quality`}
                              />
                            </Grid>
                            <Grid item sm={4}>
                              {" "}
                              <WaveText
                                className="f3"
                                delay={10}
                                text={`Gain Reliability`}
                              />
                            </Grid>
                            <Grid item sm={4}>
                              {" "}
                              <WaveText
                                className="f3"
                                delay={10}
                                text={`Gain Flexibility`}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={12} style={{ marginTop: "30px" }}>
                        <WaveText
                          className="f3"
                          delay={10}
                          text={`No need to start building from zero. No need to start from scratch. You are already`}
                        />
                        <WaveText
                          className="f3"
                          delay={20}
                          text={`ahead with Noctem developer tools. If your not currently building in C#, here is`}
                        />
                        <WaveText
                          className="f3"
                          delay={30}
                          text={`another excellent reason to add this to your tech stack.`}
                        />
                      </Grid>
                      <Grid item sm={12} style={{ marginTop: "30px" }}>
                        <WaveText
                          className="f2"
                          delay={10}
                          text={`C# - A state of the art, open-source, cross-platform programming language. `}
                        />
                      </Grid>
                      <Grid item sm={12} style={{ marginTop: "30px" }}>
                        <Grid container>
                          <Grid item sm={4}>
                            {" "}
                          </Grid>
                          <Grid
                            item
                            sm={4}
                            style={{
                              textAlign: "center",
                              fontSize: "20px",
                              color: "rgb(192, 0, 0)",
                            }}
                          >
                            <p>New</p>
                            <p>Project Evolv 2.0</p>
                            <p>{"Version 2.0 & Version 3.0"}</p>
                            <p>{"More than Cross Platform"}</p>
                          </Grid>
                          <Grid item sm={4}>
                            {" "}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={12} style={{ marginTop: "30px" }}>
                        <Grid container>
                          <Grid item sm={4}>
                            {" "}
                          </Grid>
                          <Grid
                            item
                            sm={4}
                            style={{
                              textAlign: "center",
                              color: "rgb(83, 129, 53)",
                              backgroundColor: "transparent",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              textDecoration: "none",
                              fontSize: "16pt",
                              fontFamily:
                                "WordVisi_MSFontService, Calibri, Calibri_MSFontService, sans-serif",
                              lineHeight: "26px",
                            }}
                          >
                            <p>New</p>
                            <p>Project Evolv 2.0</p>
                            <p>{"Version 2.0 & Version 3.0"}</p>
                            <p>{"More than Cross Platform"}</p>
                          </Grid>
                          <Grid item sm={4}>
                            {" "}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={12} style={{ marginTop: "30px" }}>
                        <Grid container>
                          <Grid item sm={4}>
                            {" "}
                          </Grid>
                          <Grid
                            item
                            sm={4}
                            style={{
                              textAlign: "center",
                              color: "rgb(204, 193, 217)",
                              backgroundColor: "transparent",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              textDecoration: "none",
                              fontSize: "18pt",
                              fontFamily:
                                "WordVisi_MSFontService, Calibri, Calibri_MSFontService, sans-serif",
                              lineHeight: "30px",
                            }}
                          >
                            <p>New</p>
                            <p>Project Evolv 2.0</p>
                            <p>{"Version 2.0 & Version 3.0"}</p>
                            <p>{"More than Cross Platform"}</p>
                          </Grid>
                          <Grid item sm={4}>
                            {" "}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={12} style={{ marginTop: "30px" }}>
                        <Grid container>
                          <Grid item sm={4}>
                            {" "}
                          </Grid>
                          <Grid
                            item
                            sm={4}
                            style={{
                              textAlign: "center",
                              color: "rgb(127, 96, 0)",
                              backgroundColor: "transparent",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              textDecoration: "none",
                              fontSize: "22pt",
                              fontFamily:
                                "WordVisi_MSFontService, Calibri, Calibri_MSFontService, sans-serif",
                              lineHeight: "36px",
                            }}
                          >
                            <p>New</p>
                            <p>Project Evolv 2.0</p>
                            <p>{"Version 2.0 & Version 3.0"}</p>
                            <p>{"More than Cross Platform"}</p>
                          </Grid>
                          <Grid item sm={4}>
                            {" "}
                          </Grid>
                        </Grid>
                      </Grid>
                      {<Footer />}
                    </>
                  )}
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Box>

      {/* {showreelActive && device && device === `desktop` && (
        <div className="index-page__modal animation-appear w-full h-full fixed top-0 right-0 bottom-0 left-0 z-40 flex items-center justify-center bg-black">
          <CursorInteractive mode="close" text="Close">
            <button
              type="button"
              className="absolute top-0 right-0 z-10 mt-v2 mr-v2"
              onClick={() => setShowreelActive(false)}
            >
              <Cross className="index-page__modal__close" color="white" />
            </button>
          </CursorInteractive>

          <video
            ref={showReelRef as any}
            autoPlay
            className="w-full relative block"
            src="https://player.vimeo.com/external/449980268.hd.mp4?s=6675db04d19568b8f79e9d590190946ba87d7bfe&profile_id=175"
          />
        </div>
      )} */}

      {/* <div id="services">services</div> */}
      {/* <div className="index-page w-full relative bg-black text-white">
        <ScreenHeight className="index-page__banner w-full relative flex items-end pb-v4 xs:pb-12 overflow-hidden">
          <div className="grid">
            <div className="index-page__banner__text grid-end-12 grid-start-1">
              {device && device === `desktop` && (
                <>
                  <div className="w-full relative">
                    <div
                      className={`index-page__banner__scrambler ${scrambleTransitionClass}`}
                      style={{ transitionDelay: `300ms` }}
                    >
                      <div
                        className={
                          "animate__animated " +
                          (loading
                            ? "animate__backInRight"
                            : "animate__backOutRight")
                        }
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: "5vw",
                          animationDuration: "2s",
                          animationDelay: "100",
                        }}
                      >
                        <Scrambler
                          style={{
                            fontSize: "5vw",
                          }}
                          className="whitespace-no-wrap"
                          delay={400}
                          iterations={20}
                          text={`Programming tools`}
                        />
                      </div>

                      <div
                        className={
                          "animate__animated " +
                          (loading
                            ? "animate__backInRight"
                            : "animate__backOutRight")
                        }
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: "5vw",
                          animationDuration: "2s",
                          animationDelay: "100",
                        }}
                      >
                        <Scrambler
                          style={{
                            fontSize: "5vw",
                          }}
                          className="whitespace-no-wrap"
                          delay={400}
                          iterations={20}
                          text={`for the future`}
                        />
                      </div>
                     
                    </div>

                    {!loading && (
                      <div
                        className={`index-page__banner__scrambler ${scrambleTransitionClass}`}
                        style={{ transitionDelay: `400ms` }}
                      >
                        <div
                          className={"animate__animated animate__backInRight"}
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: "5vw",
                            animationDuration: "2s",
                          }}
                        >
                          <Scrambler
                            style={{
                              fontSize: "4vw",
                            }}
                            className="whitespace-no-wrap"
                            delay={500}
                            iterations={20}
                            text={`Home of Project Evolv`}
                          />
                        </div>
                      </div>
                    )}

                    <div
                      className={"animate__animated  animate__backInLeft"}
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "5vw",
                        animationDuration: "2s",
                        animationDelay: "100",
                      }}
                    >
                      <Scrambler
                        style={{
                          fontSize: "4vw",
                        }}
                        className="whitespace-no-wrap"
                        delay={400}
                        iterations={5}
                        text={`<p>This is code line </p>`}
                      />
                    </div>

                    <div
                      className={`index-page__banner__scrambler ${scrambleTransitionClass}`}
                      style={{ transitionDelay: `400ms` }}
                    >
                      <div
                        className={"animate__animated  animate__backInRight"}
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          fontSize: "5vw",
                          animationDuration: "2s",
                          animationDelay: "100",
                        }}
                      >
                        <Scrambler
                          style={{
                            fontSize: "4vw",
                          }}
                          className="whitespace-no-wrap"
                          delay={400}
                          iterations={5}
                          text={scrambleText}
                        />
                      </div>
                    </div>

                  </div>
                </>
              )}

              {device && device !== `desktop` && touchLoaded && (
                <div className="w-full relative gpu">
                  <div
                    className={`index-page__banner__scrambler ${scrambleTransitionClass}`}
                    style={{ transitionDelay: `300ms` }}
                  >
                    <Scrambler
                      style={{
                        fontSize: "4vw",
                      }}
                      className={`${
                        loading ? `` : `opacity-0`
                      } transition-opacity whitespace-no-wrap`}
                      iterations={20}
                      text={loading ? `Programming tools` : ``}
                    />
                  </div>

                  {!loading && (
                    <Fragment>
                      <div
                        className={`index-page__banner__scrambler ${scrambleTransitionClass}`}
                        style={{ transitionDelay: `400ms` }}
                      >
                        <div
                          style={{
                            color: "white",
                            fontSize: "5vw",
                            display: "inline-block",
                            margin: "0 0.5rem",
                            animation: "backInRight",
                            animationDuration: "3s",
                            animationDelay: "100",
                            // animationIterationCount: "10",
                          }}
                        >
                          Home of Project Evolv
                        </div>
                      </div>
                    </Fragment>
                  )}

                  <div
                    className={`index-page__banner__scrambler gpu ${scrambleTransitionClass}`}
                    style={{ transitionDelay: `300ms` }}
                  >
                    {loading && (
                      <div
                        style={{
                          color: "white",
                          fontSize: "5vw",
                          display: "inline-block",
                          margin: "0 0.5rem",
                          animation: "backInRight",
                          animationDuration: "3s",
                          // animationIterationCount: "10",
                        }}
                      >
                        Programming tools
                      </div>
                    )}
                  </div>

                  <div
                    className={`index-page__banner__scrambler gpu ${scrambleTransitionClass}`}
                    style={{ transitionDelay: `400ms` }}
                  >
                    {loading && (
                      <div
                        style={{
                          color: "white",
                          fontSize: "5vw",
                          display: "inline-block",
                          margin: "0 0.5rem",
                          animation: "backInRight",
                          animationDuration: "3s",
                          // animationIterationCount: "10",
                        }}
                      >
                        for the future
                      </div>
                    )}
                  
                  </div>

                
                </div>
              )}
            </div>
          </div>
        </ScreenHeight> */}

      <section
        className={`index-page__showreel ${
          loading ? `` : `loaded`
        } w-full relative block`}
      >
        <CursorInteractive mode="hover" text="Play">
          <button
            type="button"
            className="w-full h-full absolute top-0 right-0 bottom-0 left-0 z-20"
            onClick={showVideo}
          ></button>
        </CursorInteractive>

        {/* <video
            autoPlay
            className="w-full relative block"
            loop
            muted
            playsInline
            src={
              commonUtil.GetLocalPath() + "assets/videos/PEshortcommercial.mp4"
            }
            // src="https://player.vimeo.com/external/459243941.hd.mp4?s=ffc9d4d0429a43a3bb41002fe42d16a1eaa3b406&profile_id=175"
          /> */}
      </section>

      {/* {!loading && (
          <>
           
            <Grid container style={{ color: "rgb(83, 129, 53)" }}>
              <Grid item sm={12} style={{ marginTop: "15px" }}>
                <div
                  className={"animate__animated animate__backInRight"}
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "1vw",
                    // animationDuration: "3s",
                    // animationDelay: "200",
                  }}
                >
                  Project Evolv Version 3.0 Haseeb Testing
                </div>
              </Grid>
            </Grid>

            <section className="w-full mt-15 pb-10">
              <div className="grid" style={{ color: "rgb(83, 129, 53)" }}>
                <div className="grid-end-12 xs:grid-end-12">
                  <WaveText
                    className="f2"
                    delay={10}
                    text={`C# Experts specializing in`}
                  />
                </div>
                <div className="grid-end-12 xs:grid-end-12">
                  <WaveText
                    className="f2"
                    delay={20}
                    text={`tools & services for C# developers`}
                  />
                </div>
              </div>
            </section>

            <section className="w-full mt-15 pb-10">
              <div className="grid" style={{ color: "rgb(83, 129, 53)" }}>
                <div className="grid-end-12 xs:grid-end-12">
                  <WaveText
                    className="f2"
                    delay={10}
                    text={`C# Experts specializing in`}
                  />
                </div>
                <div className="grid-end-12 xs:grid-end-12">
                  <WaveText
                    className="f2"
                    delay={20}
                    text={`tools & services for C# developers`}
                  />
                </div>
              </div>
            </section>

            <div className="index-page__content bg-black mt-10">
              <section className="w-full flex flex-col justify-between">
                <article className="grid pt-v8 xs:pt-v10 pb-v12">
                  <h2
                    className={`${
                      device && device === `desktop` ? `f2` : `f1`
                    } grid-end-5 xs:grid-end-12 xs:mb-v10`}
                  >
                    In the digital age, your brand is always in beta.
                  </h2>

                  <div className="grid-end-3 xs:grid-end-12 grid-start-7 xs:grid-start-1">
                    <p
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } mb-v1 xs:mb-v4`}
                    >
                      It’s a constant work in progress.
                      <br />
                      Learning from and growing
                      <br />
                      with your audience.
                    </p>

                    <p
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } xs:mb-v4`}
                    >
                      Building brands for the digital
                      <br />
                      age means taking the same fluid, iterative approach. So
                      that’s
                      <br />
                      what we do.
                    </p>
                  </div>

                  <div className="grid-end-3 xs:grid-end-12">
                    <p
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } mb-v1 xs:mb-v4`}
                    >
                      Rather than trying to get things perfect the first time,
                      we launch with our best hypothesis, and then let the data
                      tell us what we got wrong. It’s a constant process of
                      iteration. It’s not always good for the ego. But it’s
                      better for business.
                    </p>

                    <p
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      }`}
                    >
                      Beta today. Better tomorrow.
                    </p>
                  </div>
                </article>
              </section>

              <section className="w-full relative mt-24 pb-10">
                <div className="grid">
                  <div className="grid-end-6 xs:grid-end-12">
                    <WaveText className="f1" text="Our work. Always a" />
                    <WaveText
                      className="f1"
                      delay={20}
                      text="work in Progress."
                    />
                  </div>
                </div>

                <Projects projects={projects} />
              </section>

              <section className="index-page__about w-full h-screen xs:h-auto relative flex xs:block flex-col justify-between pt-v10 pb-v10 xs:pb-v8">
                <header className="grid">
                  <h2 className="grid-end-6 xs:grid-end-12 xs:mb-v10 f1">
                    Brands, Products and Businesses for the digital age.
                  </h2>
                </header>

                <div className="grid">
                  <article className="animation-appear-right animation-delay-1 grid-end-3 xs:grid-end-12 grid-start-1">
                    <h3
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } mb-v1 xs:mb-v2`}
                    >
                      Show, don’t Tell.
                    </h3>

                    <p
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } xs:mb-v4`}
                    >
                      We’re a team of award-winning strategists, creatives,
                      designers, developers, writers, illustrators, animators
                      and producers. But everyone says stuff like that. So we
                      like to focus on what we make, not who we are.
                    </p>
                  </article>

                  <article className="animation-appear-right animation-delay-2 grid-end-3 xs:grid-end-12">
                    <h3
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } mb-v1 xs:mb-v2`}
                    >
                      We build Brands
                    </h3>

                    <p
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } xs:mb-v4`}
                    >
                      We work with businesses all over the world to bring new
                      and established brands into the digital age with a
                      digital-first approach.
                    </p>
                  </article>

                  <article className="animation-appear-right animation-delay-3 grid-end-3 xs:grid-end-12">
                    <h3
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } mb-v1 xs:mb-v2`}
                    >
                      We build Products
                    </h3>

                    <p
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } xs:mb-v4`}
                    >
                      We collaborate with internal and external agencies to
                      build unique digital products, from weird web apps to
                      high-conversion ecommerce.
                    </p>
                  </article>

                  <article className="animation-appear-right animation-delay-4 grid-end-3 xs:grid-end-12">
                    <h3
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } mb-v1 xs:mb-v2`}
                    >
                      We build Businesses
                    </h3>

                    <p
                      className={`${
                        device && device === `desktop` ? `b2` : `b1`
                      } xs:mb-v4`}
                    >
                      We help early-stage startups all over the world build out
                      their brands and products from the ground up, using a
                      combination of fee-for-service and sweat equity.
                    </p>
                  </article>
                </div>
              </section>

              {clients?.[0] && <ClientLogos clients={clients} />}

              <AppearOnScroll>
                {({ visible }: any) => (
                  <section className="index-page__figma w-full relative flex flex-col justify-between pt-v6 pb-v6 overflow-x-hidden">
                    <header className="grid">
                      <div className="grid-end-12 flex items-center justify-center">
                        <h2 className="index-page__figma__marquee animation-marquee-slow relative f1">
                          HYPERCOLLABORATIVE™
                        </h2>
                        <h2 className="index-page__figma__marquee animation-marquee-slow relative f1">
                          HYPERCOLLABORATIVE™
                        </h2>
                      </div>

                      <div className="grid-end-8 grid-start-3 mt-v2">
                        <div className="index-page__iframe relative">
                          {visible && device && device === `desktop` && (
                            <iframe
                              title="Figma"
                              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FhnsyvqR9heovjDeGl6h8R6%2FLAM000-ALWAYS_BETA%3Fnode-id%3D1%253A5522"
                            ></iframe>
                          )}
                        </div>
                      </div>
                    </header>

                    <article className="grid pt-v5">
                      <h2 className="grid-end-5 xs:grid-end-12 xs:mb-v4 f2">
                        We’d say “open book”, but that wouldn’t be super digital
                        of us, <br className="xs-only" /> would it?
                      </h2>

                      <div className="grid-end-3 xs:grid-end-12 grid-start-7 xs:grid-start-1">
                        <p
                          className={`${
                            device && device === `desktop` ? `b2` : `b1`
                          } mb-v1 xs:mb-v2`}
                        >
                          We’re hyper-collaborative, working in sprints with our
                          clients internal and external teams, from C-Suite to
                          Customer Service.
                        </p>
                        <p
                          className={`${
                            device && device === `desktop` ? `b2` : `b1`
                          } xs:mb-v2`}
                        >
                          We’re open-file and real-time; we open our working
                          files so you can see what we’re doing, as we’re doing
                          it. Seriously. You’ll have access to our Figma file as
                          we’re working.
                        </p>
                      </div>

                      <div className="grid-end-3 xs:grid-end-12">
                        <p
                          className={`${
                            device && device === `desktop` ? `b2` : `b1`
                          } xs:mb-v2`}
                        >
                          This isn’t just about making work, this is about
                          making work that works. So we don’t design complex,
                          precious bits of art and then get pissed off when we
                          see you break them. We design systems that are meant
                          to be used by others.
                        </p>
                      </div>

                      <div className="grid-end-4 xs:grid-end-12 grid-start-7 xs:grid-start-1 pt-v3">
                        <a
                          href="https://www.figma.com/file/hnsyvqR9heovjDeGl6h8R6/CLI000_Phase-2_DES_-Project"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="xs:w-full"
                        >
                          <CursorInteractive mode="hover" text="Go on">
                            <Button color="white" className="xs:w-full">
                              <span className="b2 mono opacity-0 text-white">
                                Download our Figma template →
                              </span>

                              <Scrambler
                                className="w-full absolute transform-center b2 mono"
                                iterations={25}
                                text="Download our Figma template →"
                              />
                            </Button>
                          </CursorInteractive>
                        </a>
                      </div>
                    </article>
                  </section>
                )}
              </AppearOnScroll>
            </div>
          </>
        )} */}
      {/* </div> */}
    </>
  );
};

export default IndexApp;

// export const query = graphql`
//   query IndexApp($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title

//         projects {
//           id
//           title
//           tagline
//           website
//           attributes
//           media {
//             imageSource
//             imageMobileSource
//             videoSource
//           }
//         }
//         clients {
//           id
//           title
//           logo
//         }
//         seoDescription
//         seoKeywords
//       }
//     }
//   }
// `;
