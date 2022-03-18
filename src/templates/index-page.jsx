/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React, { useContext, useEffect, useRef, useState } from 'react';
// import { graphql } from 'gatsby';

import { AppDataContext } from '../context/AppDataContext';
import { DocumentContext } from '../context/DocumentContext';

import AppearOnScroll from '../components/AppearOnScroll';
import Button from '../components/Button';
import ClientLogos from '../components/ClientLogos.jsx';
import Cross from '../components/svg/Cross';
import CursorInteractive from '../components/CursorInteractive';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Projects from '../components/Projects.jsx';
import ScreenHeight from '../components/ScreenHeight';
import Scrambler from '../components/Scrambler';
import SEO from '../components/SEO';
import WaveText from '../components/WaveText';

import { useKeyPress, useTimeout } from '../utils/hooks';

const IndexPage = ({ data, location }) => {
  const { setHeaderVisible } = useContext(AppDataContext);
  const { device } = useContext(DocumentContext);

  const showReelRef = useRef();

  const [loading, setLoading] = useState(true);
  const [rendered, setRendered] = useState(false);

  const [touchLoaded, setTouchLoaded] = useState(false);
  const [scrambleText, setScrambleText] = useState(null);
  const [showreelActive, setShowreelActive] = useState(false);

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

    showReelRef.current.play();

    if (device && device !== `desktop`) {
      showReelRef.current.webkitEnterFullscreen();
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
  }, 1000);

  useTimeout(() => {
    setScrambleText(`digital-native`);
  }, 3000);

  useTimeout(() => {
    setScrambleText(`Hyper-collaborative™`);
  }, 4000);

  useTimeout(() => {
    setScrambleText(`Quicksmart®`);
  }, 5000);

  useTimeout(() => {
    setScrambleText(`always on`);
  }, 6000);

  useTimeout(() => {
    setScrambleText(`Always Beta™`);
  }, 7000);

  useTimeout(() => {
    setLoading(false);
  }, 7800);

  useTimeout(() => {
    setHeaderVisible(true);
  }, 8400);

  //

  return (
    <>
      {/* <SEO
        customTitle={frontmatter.title}
        customDescription={frontmatter.seoDescription}
        customKeywords={frontmatter.seoKeywords}
        path={location.pathname}
      /> */}

      {showreelActive && device && device === `desktop` && (
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
            ref={showReelRef}
            autoPlay
            className="w-full relative block"
            src="https://player.vimeo.com/external/449980268.hd.mp4?s=6675db04d19568b8f79e9d590190946ba87d7bfe&profile_id=175"
          />
        </div>
      )}

      <Layout className="index-page w-full relative bg-black text-white">
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
                      <Scrambler
                        className={`${
                          loading ? `` : `opacity-0`
                        } transition-opacity g4 whitespace-no-wrap`}
                        iterations={20}
                        text={loading ? `The full-stack agency` : ``}
                      />
                    </div>

                    <div
                      className={`index-page__banner__scrambler ${scrambleTransitionClass}`}
                      style={{ transitionDelay: `400ms` }}
                    >
                      <Scrambler
                        className="g4 whitespace-no-wrap"
                        delay={100}
                        iterations={20}
                        text={
                          loading ? `for the digital age is` : `Love + Money is`
                        }
                      />
                    </div>
                  </div>
                </>
              )}

              {device && device !== `desktop` && touchLoaded && (
                <div className="w-full relative gpu">
                  <div
                    className={`index-page__banner__scrambler gpu ${scrambleTransitionClass}`}
                    style={{ transitionDelay: `300ms` }}
                  >
                    <Scrambler
                      className={`${
                        loading ? `` : `opacity-0`
                      } transition-opacity g3 whitespace-no-wrap`}
                      iterations={20}
                      text={loading ? `The full-stack` : `.`}
                    />
                  </div>

                  <div
                    className={`index-page__banner__scrambler gpu ${scrambleTransitionClass}`}
                    style={{ transitionDelay: `400ms` }}
                  >
                    <Scrambler
                      className={`${
                        loading ? `` : `opacity-0`
                      } transition-opacity g3 whitespace-no-wrap`}
                      delay={100}
                      iterations={20}
                      text={loading ? `agency for the` : ``}
                    />
                  </div>

                  <div
                    className={`index-page__banner__scrambler gpu ${scrambleTransitionClass}`}
                    style={{ transitionDelay: `400ms` }}
                  >
                    <Scrambler
                      className="g3 whitespace-no-wrap"
                      delay={200}
                      iterations={22}
                      text={loading ? `digital age is` : `Love + Money is`}
                    />
                  </div>
                </div>
              )}

              <div
                className={`index-page__banner__scrambler relative z-10 ${scrambleTransitionClass}`}
                style={{ transitionDelay: `500ms` }}
              >
                <Scrambler
                  className={`${
                    device && device === `desktop` ? `g4` : `g3`
                  } whitespace-no-wrap`}
                  delay={200}
                  iterations={10}
                  text={`${scrambleText || `.`}`}
                />
              </div>
            </div>
          </div>
        </ScreenHeight>

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

          <video
            autoPlay
            className="w-full relative block"
            loop
            muted
            playsInline
            src="https://player.vimeo.com/external/459243941.hd.mp4?s=ffc9d4d0429a43a3bb41002fe42d16a1eaa3b406&profile_id=175"
          />
        </section>

        {!loading && (
          <div className="index-page__content relative bg-black">
            <section className="w-full relative flex flex-col justify-between">
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
                    Rather than trying to get things perfect the first time, we
                    launch with our best hypothesis, and then let the data tell
                    us what we got wrong. It’s a constant process of iteration.
                    It’s not always good for the ego. But it’s better for
                    business.
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

              {/* // */}

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
                    designers, developers, writers, illustrators, animators and
                    producers. But everyone says stuff like that. So we like to
                    focus on what we make, not who we are.
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
                    We work with businesses all over the world to bring new and
                    established brands into the digital age with a digital-first
                    approach.
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
                    We collaborate with internal and external agencies to build
                    unique digital products, from weird web apps to
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

            {/* CLIENTS LOGOS */}
            {clients?.[0] && <ClientLogos clients={clients} />}

            <AppearOnScroll>
              {({ visible }) => (
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
                        We’re open-file and real-time; we open our working files
                        so you can see what we’re doing, as we’re doing it.
                        Seriously. You’ll have access to our Figma file as we’re
                        working.
                      </p>
                    </div>

                    <div className="grid-end-3 xs:grid-end-12">
                      <p
                        className={`${
                          device && device === `desktop` ? `b2` : `b1`
                        } xs:mb-v2`}
                      >
                        This isn’t just about making work, this is about making
                        work that works. So we don’t design complex, precious
                        bits of art and then get pissed off when we see you
                        break them. We design systems that are meant to be used
                        by others.
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
        )}
      </Layout>

      {!loading && <Footer />}
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title

        projects {
          id
          title
          tagline
          website
          attributes
          media {
            imageSource
            imageMobileSource
            videoSource
          }
        }
        clients {
          id
          title
          logo
        }
        seoDescription
        seoKeywords
      }
    }
  }
`;
