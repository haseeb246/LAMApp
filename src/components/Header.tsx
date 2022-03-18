import React, { useContext, useState } from "react";
// import { Link } from "gatsby";
import PropTypes from "prop-types";
import { DocumentContext } from "../context/DocumentContext";
import CursorInteractive from "./CursorInteractive";
import Scrambler from "./Scrambler";
import Button from "./Button";
import { AppDataContext } from "../context/AppDataContext";
import { Link } from "react-router-dom";
import Image from "rc-image";
// import { useTimeout } from "~utils/hooks";

//for loading images from local folder
// https://stackoverflow.com/questions/44154939/load-local-images-in-react-js
// Assuming logo.png is in the same folder as JS file
import logo from "./../uploads/images/logo5.png";
import commonUtil from "./../utils/commonUtil";

const Header = ({ clipped, color }: any) => {
  const { headerVisible } = useContext(AppDataContext);
  const { device } = useContext(DocumentContext);
  // const [ready, setReady] = useState(false);

  // useTimeout(() => {
  //   setReady(true);
  // }, 700);

  //

  return (
    <header
      className={`header ${
        clipped
          ? `z-50 pointer-events-none text-${color}`
          : `z-30 text-${color}`
      } transition-transform w-full fixed top-0 right-0 left-0 z-30 pt-4 pb-4 xs:pt-2 xs:pb-2`}
    >
      <nav className="grid">
        <div className="grid-end-6 block b2" style={{ display: "flex" }}>
          <CursorInteractive mode="hover">
            {/* <Link to="/" direction="<"> */}
            {/* <Link to="/"> */}
            {/* <Image src={logo} alt={"logo"} /> */}
            <img
              src={commonUtil.GetImagePath("/assets/logos/logo.jpg")}
              alt={"logo"}
              style={{
                width: "147px",
                height: "40px",
              }}
            />
            <Scrambler
              className="b2"
              text={`${
                device && device === `mobile` ? `<3 + $` : ` NOCTEM CORP`
              }`}
            />
            {/* </Link> */}
          </CursorInteractive>
        </div>

        {headerVisible && (
          <div className="desktop-only grid-end-6 flex justify-end">
            <ul className="flex items-center">
              <li className="header__link animation-appear-right-slow animation-delay-1 mr-v2">
                <CursorInteractive mode="down" text="unimplemented">
                  <a href="#services">
                    <Scrambler
                      className="caption"
                      iterations={5}
                      text="Services"
                    />
                  </a>
                </CursorInteractive>
              </li>

              <li className="header__link animation-appear-right-slow animation-delay-1 mr-v2">
                <CursorInteractive mode="down" text="unimplemented">
                  <a
                    href="#support"
                    className="header__link animation-appear-right-slow animation-delay-2 mr-v2"
                  >
                    <Scrambler
                      className="caption"
                      iterations={10}
                      text="Support"
                    />
                  </a>
                </CursorInteractive>
              </li>

              <li className="header__link animation-appear-right-slow animation-delay-1 mr-v2">
                <CursorInteractive mode="down" text="unimplemented">
                  <a
                    href="#employment"
                    className="header__link animation-appear-right-slow animation-delay-3"
                  >
                    <Scrambler
                      className="caption"
                      iterations={15}
                      text="Employment"
                    />
                  </a>
                </CursorInteractive>
              </li>
              <li className="header__link animation-appear-right-slow animation-delay-1 mr-v2">
                <CursorInteractive mode="down" text="unimplemented">
                  <a
                    href="#investors"
                    className="header__link animation-appear-right-slow animation-delay-4"
                  >
                    <Scrambler
                      className="caption"
                      iterations={20}
                      text="Investors"
                    />
                  </a>
                </CursorInteractive>
              </li>
              <li className="header__link animation-appear-right-slow animation-delay-1 mr-v2">
                <CursorInteractive mode="down" text="unimplemented">
                  <a
                    href="#contact"
                    className="header__link animation-appear-right-slow animation-delay-5"
                  >
                    <Scrambler
                      className="caption"
                      iterations={25}
                      text="Contact Us"
                    />
                  </a>
                </CursorInteractive>
              </li>
            </ul>

            <CursorInteractive mode="hover" text="Email us">
              <a href="mailto:hello@loveandmoney.agency">
                <Button
                  className="header__button animation-appear-right-slow animation-delay-5 relative block text-center"
                  color="white"
                  transparent
                >
                  <span className="caption opacity-0">Get to Work →</span>

                  <Scrambler
                    className="w-full absolute transform-center caption"
                    iterations={25}
                    text="Get to Work →"
                  />
                </Button>
              </a>
            </CursorInteractive>
          </div>
        )}
      </nav>
    </header>
  );
};

Header.defaultProps = {
  clipped: false,
  color: `white`,
};

Header.propTypes = {
  clipped: PropTypes.bool,
  color: PropTypes.string,
};

export default Header;
