import React, { createContext, useContext, useState } from "react";
// import { globalHistory } from "@reach/router";
import { useMountEffect } from "../utils/hooks";
import { UNSAFE_NavigationContext } from "react-router-dom";
import { BrowserHistory } from "history";
// import { globalHistory } from "@reach/router";

export interface IAppDataContext {
  cartActive: boolean;
  setCartActive: any;
  cursorColor: string;
  setCursorColor: any;
  cursorMode: any | null;
  setCursorMode: any;
  cursorText: string | null;
  setCursorText: any;
  headerVisible: boolean;
  setHeaderVisible: any;
  menuActive: boolean;
  setMenuActive: any;
  pathname: string;
  setPathname: any;
  projectBackground: string;
  setProjectBackground: any;
}

let defaultObj: IAppDataContext = {
  cartActive: false,
  setCartActive: null,
  cursorColor: `white`,
  setCursorColor: null,
  cursorMode: null,
  setCursorMode: null,
  cursorText: null,
  setCursorText: null,
  headerVisible: false,
  setHeaderVisible: null,
  menuActive: false,
  setMenuActive: null,
  pathname: "",
  setPathname: null,
  projectBackground: `black`,
  setProjectBackground: null,
};

export const AppDataContext = createContext<IAppDataContext>(defaultObj);

export interface IAppProvider {
  children: React.ReactNode;
}
export function AppDataProvider({ children }: any) {
  const [cartActive, setCartActive] = useState(false);
  const [cursorColor, setCursorColor] = useState(`white`);
  const [cursorMode, setCursorMode] = useState(null);
  const [cursorText, setCursorText] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [pathname, setPathname] = useState<string>("");
  const [projectBackground, setProjectBackground] = useState(`black`);

  const navigation = useContext(UNSAFE_NavigationContext)
    ?.navigator as BrowserHistory;
  React.useLayoutEffect(() => {
    if (navigation) {
      navigation.listen((locationListener: any) => {
        setPathname(locationListener.location.pathname);
      });
    }
  }, [navigation]);

  useMountEffect(() => {
    if (window) {
      setPathname(window.location.pathname);
    }

    // return globalHistory.listen(({ location }) => {
    //   setPathname(location.pathname);
    // });
  });

  //

  return (
    <AppDataContext.Provider
      value={{
        cartActive,
        setCartActive,
        cursorColor,
        setCursorColor,
        cursorMode,
        setCursorMode,
        cursorText,
        setCursorText,
        headerVisible,
        setHeaderVisible,
        menuActive,
        setMenuActive,
        pathname,
        setPathname,
        projectBackground,
        setProjectBackground,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

// AppProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default AppDataProvider;
