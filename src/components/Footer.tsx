/* eslint-disable no-console */
import React, { useContext } from "react";
import { AppDataContext } from "../context/AppDataContext";
import AppearOnScroll from "./AppearOnScroll";
import Button from "./Button";
import CursorInteractive from "./CursorInteractive";
import LinkButton from "./LinkButton";
import Scrambler from "./Scrambler";

const Footer = () => {
  const { setCursorColor } = useContext(AppDataContext);

  //

  return (
    <footer
      className="footer w-full relative pt-v6 xs:pt-v8 pb-v4 xs:pb-v4 bg-travertine"
      onMouseEnter={() => setCursorColor(`black`)}
      onMouseLeave={() => setCursorColor(`white`)}
    >
      <AppearOnScroll>
        {({ visible }: any) => (
          <section className="grid">
            <h3
              className={`${
                visible
                  ? `animation-appear-right-slow animation-delay-1`
                  : `opacity-0`
              } grid-end-5 xs:grid-end-12 relative xs:mb-v3 f2`}
            >
              In this life, you don’t get what you deserve. Only what you
              negotiate.
            </h3>

            <p
              className={`${
                visible
                  ? `animation-appear-right-slow animation-delay-2`
                  : `opacity-0`
              } grid-end-3 xs:grid-end-12 grid-start-7 xs:grid-start-1 mb-v1 xs:mb-v2 b2`}
            >
              We like to work fast, but to do that, we need the time and money
              it takes for us to focus.
            </p>

            <p
              className={`footer__text ${
                visible
                  ? `animation-appear-right-slow animation-delay-3`
                  : `opacity-0`
              } grid-end-3 xs:grid-end-12 b2`}
            >
              We prefer ongoing partnerships over one-project stands, and will
              discount initial project sprints for monogamous relationships.
              We’re also flexible with our payment terms.
            </p>
          </section>
        )}
      </AppearOnScroll>

      <AppearOnScroll>
        {({ visible }: any) => (
          <section className="grid">
            <div className="grid-end-6 xs:grid-end-12 grid-start-4 xs:grid-start-1 mt-v7 xs:mt-v7 mb-v10 xs:mb-v8">
              <CursorInteractive mode="hover" text="Email us">
                <a href="mailto:hello@loveandmoney.agency">
                  <Button
                    className="footer__big-button w-full relative block"
                    color="black"
                    transparent
                  >
                    <span className="f2 mono opacity-0">Get to Work →</span>

                    {visible && (
                      <Scrambler
                        className="w-full absolute transform-center f2 mono"
                        iterations={10}
                        text="Get to Work →"
                      />
                    )}
                  </Button>
                </a>
              </CursorInteractive>
            </div>
          </section>
        )}
      </AppearOnScroll>

      <AppearOnScroll>
        {({ visible }: any) => (
          <section className="grid">
            <div className="grid-end-3 xs:grid-end-12 grid-start-1 xs:mb-v2">
              <p className="b2">Melbourne:</p>
              <p className="b2">31 Rupert Street, Collingwood, 3066</p>
              <p className="b2">
                <span aria-label="Flag" role="img">
                  🇦🇺
                </span>
              </p>
            </div>

            <div className="grid-end-3 xs:grid-end-12 xs:mb-v2">
              <p className="b2">NYC:</p>
              <p className="b2">Coming soon</p>
              <p className="b2">
                <span aria-label="Flag" role="img">
                  🇺🇸
                </span>
              </p>
            </div>

            <div className="grid-end-3 xs:grid-end-12 xs:mt-v2 xs:mb-v8">
              <p className="footer__love caption mono">
                If you’re doing something we love (or doing something for the
                love) you might just qualify for our Love Rate™. Get in touch,
                let us know your limitations, and let’s talk.{` `}
                <span role="img" aria-label="Hand Emoji">
                  👋🏼
                </span>
              </p>
            </div>

            <div className="grid-end-3 xs:grid-end-12 text-right xs:text-center">
              {visible && (
                <Scrambler
                  className="b3 mono"
                  iterations={50}
                  text="© 2020 Love + Money Pty Ltd"
                />
              )}
            </div>
          </section>
        )}
      </AppearOnScroll>

      {/* // */}

      <AppearOnScroll>
        {({ visible }: any) => (
          <section className="grid">
            <nav className="desktop-only grid-end-12 pt-v4">
              <ul className="w-full flex xs:flex-wrap justify-between">
                <li className="footer__link xs:w-1/2 flex items-center xs:justify-between">
                  <span className="b3 mono">Join our Slack</span>

                  <a
                    href="https://join.slack.com/share/zt-q47wb8kk-ON9cOJv1i2T1oyaXGLGWjA"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative flex items-center mr-v2"
                  >
                    <LinkButton className="ml-v1" color="black" transparent />
                  </a>
                </li>

                <li className="footer__link xs:w-1/2 flex items-center xs:justify-between">
                  <span className="b3 mono">Get a Job</span>

                  <a
                    href="mailto:hello@loveandmoney.agency"
                    className="relative flex items-center mr-v2"
                  >
                    <LinkButton className="ml-v1" color="black" transparent />
                  </a>
                </li>

                <li className="footer__link xs:w-1/2 flex items-center xs:justify-between">
                  <span className="b3 mono">Latest Work</span>

                  <a
                    href="https://www.nopeetstore.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative flex items-center mr-v2"
                  >
                    <LinkButton className="ml-v1" color="black" transparent />
                  </a>
                </li>

                <li className="footer__link xs:w-1/2 flex items-center xs:justify-between">
                  <span className="b3 mono">Digital Internship</span>

                  <a
                    href="https://coda.io/@loveandmoney/love-money-graduate-program"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative flex items-center mr-v2"
                  >
                    <LinkButton className="ml-v1" color="black" transparent />
                  </a>
                </li>

                <li className="footer__link xs:w-1/2 flex items-center xs:justify-between">
                  <span className="b3 mono">Substack</span>

                  <a
                    href="https://loveandmoney.substack.com/"
                    className="relative flex items-center mr-v2"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkButton className="ml-v1" color="black" transparent />
                  </a>
                </li>

                <li className="footer__link footer__link--instagram xs:w-1/2 flex items-center xs:justify-between">
                  <span className="b3 mono">Instagram</span>

                  <a
                    href="https://www.instagram.com/loveandmoney.agency/?hl=en"
                    className="relative flex items-center"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkButton className="ml-v1" color="black" transparent />
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        )}
      </AppearOnScroll>
    </footer>
  );
};

export default Footer;
