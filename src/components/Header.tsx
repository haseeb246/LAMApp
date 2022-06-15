import React, { useContext, useState, useEffect, Fragment } from "react";
// import { Link } from "gatsby";
import PropTypes from "prop-types";
import { DocumentContext } from "../context/DocumentContext";
import CursorInteractive from "./CursorInteractive";
import Scrambler from "./Scrambler";
import { AppDataContext } from "../context/AppDataContext";
// import { useTimeout } from "~utils/hooks";

//for loading images from local folder
// https://stackoverflow.com/questions/44154939/load-local-images-in-react-js
// Assuming logo.png is in the same folder as JS file
import logo from "./../uploads/images/logo5.png";
import commonUtil from "./../utils/commonUtil";
import {
  IconButton,
  Drawer,
  MenuItem,
  Link,
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { makeStyles, Theme, createStyles } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./Button";
import { breakpoint } from "../utils/css";
import styled from "@emotion/styled";
import { isDesktop, isMobile } from "react-device-detect";

const headersData = [
  {
    label: "Listings",
    href: "/listings",
  },
  {
    label: "Mentors",
    href: "/mentors",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];

const useStyles: any = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

/** ============================================================================
 * @css
 */
const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 30;
  padding: 0.5rem 0;
  background: linear-gradient(
    180deg,
    var(--color-black-90) 16.67%,
    rgba(0, 0, 0, 0) 100%
  );
  background-blend-mode: multiply;

  ${breakpoint(`tablet`)} {
    padding: 1rem 0;
  }
`;

const Container = styled.div`
  padding: ${(props: any) => (props.primary ? `13px 0` : `12px 0;`)};
  display: flex;
  justify-content: space-between;
  grid-column: 1 / -1;
  color: var(--color-white);
`;

const ButtonWrapper = styled.div`
  display: none;

  ${breakpoint(`large-tablet`)} {
    display: block;
  }
`;

const StyledLink = styled((props: any) => <Link {...props} />)`
  color: var(--color-white);
`;

const Header = ({ clipped, color }: any) => {
  const { headerVisible } = useContext(AppDataContext);
  const { device } = useContext(DocumentContext);
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [isShowLogo, setIsShowLogo] = useState<boolean>(true);

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState: any) => ({ ...prevState, mobileView: true }))
        : setState((prevState: any) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  function handleFocus(e?: any) {
    debugger;
    setIsShowLogo(false);
  }
  function handleBlur(e?: any) {
    debugger;
    setIsShowLogo(true);
  }

  const displayDesktop = () => {
    return (
      <Toolbar>
        {femmecubatorLogo}

        <div style={{ textAlign: "right", justifyContent: "right" }}>
          {headerVisible && (
            <div className="flex">
              <ul className="flex items-center">
                <li className="header__link mb-menu-bg animation-appear-right-slow animation-delay-1 mr-v2">
                  <CursorInteractive mode="up" text="unimplemented">
                    {/* <Link to="/home/#section1">aaaa</Link> */}
                    {/* <div
                            onClick={() =>
                              window.location.replace("/#services")
                            }
                          >
                            <span>go to about</span>
                          </div> */}
                    <a href="#home">
                      <Scrambler
                        className="caption"
                        iterations={5}
                        text="Home"
                      />
                    </a>
                  </CursorInteractive>
                </li>
                <li className="header__link mb-menu-bg animation-appear-right-slow animation-delay-1 mr-v2">
                  <CursorInteractive mode="down" text="unimplemented">
                    {/* <Link to="/home/#section1">aaaa</Link> */}
                    {/* <div
                            onClick={() =>
                              window.location.replace("/#services")
                            }
                          >
                            <span>go to about</span>
                          </div> */}
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
                {/* <li className="header__link animation-appear-right-slow animation-delay-1 mr-v2">
                    <CursorInteractive mode="down" text="unimplemented">
                      <a
                        href="#contactus"
                        className="header__link animation-appear-right-slow animation-delay-5"
                      >
                        <Scrambler
                          className="caption"
                          iterations={25}
                          text="Contact Us"
                        />
                      </a>
                    </CursorInteractive>
                  </li> */}
              </ul>

              <CursorInteractive mode="hover" text="Email us">
                <a href="mailto:info@NCTMCO.com">
                  <Button
                    className="header__button animation-appear-right-slow animation-delay-5 relative block text-center"
                    color="white"
                    transparent
                  >
                    <span className="caption opacity-0">Contact Us</span>

                    <Scrambler
                      className="w-full absolute transform-center caption"
                      iterations={25}
                      text="Contact Us"
                    />
                  </Button>
                </a>
              </CursorInteractive>
            </div>
          )}
        </div>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Box
      display="flex"
      flexGrow={1}
      onMouseEnter={() => {
        setIsShowLogo(false);
      }}
      onMouseLeave={() => {
        setIsShowLogo(true);
      }}
    >
      <a href="#home">
        {isShowLogo ? (
          <img
            src={commonUtil.GetImagePath("/assets/logos/logo.jpg")}
            alt={"logo"}
            style={{
              width: "200px",
              height: "60px",
            }}
          />
        ) : (
          <div
            className="b1"
            style={{
              width: "200px",
              // height: "60px",
              textAlign: "center",
              // position: "relative",
              // top: "50%",
            }}
          >
            <StyledLink className="b1" to="/">
              <Scrambler text={!isDesktop ? "NOCTEM CORP" : "NOCTEM CORP"} />
            </StyledLink>
            {/* <Scrambler
                  
                  className="b2"
                  iterations={5}
                  text={`${
                    device && device === `mobile`
                      ? `NOCTEM CORP`
                      : ` NOCTEM CORP`
                  }`}
                /> */}
          </div>
        )}
      </a>
    </Box>
    // <Typography variant="h6" component="h1" className={logo}>
    //   Femmecubator
    // </Typography>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Fragment>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div>{femmecubatorLogo}</div>
          </Typography>

          <div>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
              style={{
                backgroundColor:
                  "linear-gradient(180deg, #121212 16.67%, transparent)",
              }}
            >
              <div className={drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>
          </div>
        </Toolbar>
      </Fragment>
    );
  };

  const getDrawerChoices = () => {
    return (
      <Fragment>
        <div className="">
          <Link href="#home">
            <MenuItem>
              <Scrambler iterations={10} text="Home" />
            </MenuItem>
          </Link>
          <Link href="#services">
            <MenuItem>
              <Scrambler iterations={10} text="Services" />
            </MenuItem>
          </Link>
          <Link href="#support">
            <MenuItem>
              <Scrambler iterations={10} text="Support" />
            </MenuItem>
          </Link>
          <Link href="#employment">
            <MenuItem>
              <Scrambler iterations={10} text="Employment" />
            </MenuItem>
          </Link>
          <Link href="#investors">
            <MenuItem>
              <Scrambler iterations={10} text="Investors" />
            </MenuItem>
          </Link>

          <CursorInteractive mode="hover" text="Email us">
            <Link href="mailto:info@NCTMCO.com">
              <MenuItem>
                <Scrambler iterations={10} text="Contact Us" />
              </MenuItem>
            </Link>
            {/* <Link href="mailto:info@NCTMCO.com">
              <MenuItem>
                <Button
                  className="header__button animation-appear-right-slow animation-delay-5 relative block text-center"
                  color="black"
                  transparent
                >
                  <Scrambler
                    className="w-full absolute transform-center caption"
                    iterations={25}
                    text="Contact Us"
                  />
                </Button>
              </MenuItem>
            </Link> */}
          </CursorInteractive>
          {/* <ul className="items-center">
            <li className="header__link animation-appear-right-slow animation-delay-1 mr-v2">
              <CursorInteractive mode="up" text="unimplemented">
            
                <a href="#home">
                  <MenuItem>
                    <Scrambler className="caption" iterations={5} text="Home" />
                  </MenuItem>
                </a>
              </CursorInteractive>
            </li>
            <li className="header__link animation-appear-right-slow animation-delay-1 mr-v2">
              <CursorInteractive mode="down" text="unimplemented">
             
                <a href="#services">
                  <MenuItem>
                    <Scrambler
                      className="caption"
                      iterations={5}
                      text="Services"
                    />
                  </MenuItem>
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
          </ul> */}
        </div>
        {/* {headersData.map(({ label, href }) => {
          return (
            <Link
              href="#investors"
              // {...{
              //   component: RouterLink,
              //   to: href,
              //   color: "inherit",
              //   style: { textDecoration: "none" },
              //   key: label,
              // }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        })} */}
      </Fragment>
    );
  };

  // const [ready, setReady] = useState(false);

  // useTimeout(() => {
  //   setReady(true);
  // }, 700);

  //

  return (
    <div
      className={`header ${
        clipped
          ? `z-50 pointer-events-none text-${color}`
          : `z-30 text-${color}`
      }`}
    >
      <AppBar
        position="fixed"
        // className="header"
        style={{
          background: "linear-gradient(180deg, #121212 16.67%, transparent)",
        }}
      >
        {isMobile ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
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
