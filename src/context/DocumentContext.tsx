import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "underscore";
import { getWindowDimensions } from "../utils/dom";

export interface IDocContext {
  device: any | null;
  documentHeight: number;
  scrollTop: number;
  windowHeight: number;
  windowWidth: number;
}

let defaultObj: IDocContext = {
  device: null,
  documentHeight: 0,
  scrollTop: 0,
  windowHeight: 0,
  windowWidth: 0,
};

export const DocumentContext = createContext<IDocContext>(defaultObj);

export function DocumentProvider({ children }: any) {
  const [device, setDevice] = useState<any | null>(null);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const mobileWidth = 768;
  const tabletWidth = 1024;

  //

  const handleResize = () => {
    let detectedDevice = `desktop`;

    if (
      window.matchMedia(
        `(min-width: ${mobileWidth}px) and (max-width: ${tabletWidth}px)`
      ).matches
    ) {
      detectedDevice = `tablet`;
    } else if (window.matchMedia(`(max-width: ${mobileWidth - 1}px)`).matches) {
      detectedDevice = `mobile`;
    }

    setDevice(detectedDevice);
    setDocumentHeight(document.documentElement.offsetHeight);
    setWindowHeight(getWindowDimensions().height);
    setWindowWidth(getWindowDimensions().width);
  };

  const handleScroll = (e: any) => {
    setScrollTop(e.target.scrollingElement.scrollTop);
  };

  //

  useEffect(() => {
    if (typeof document !== `undefined` && document?.addEventListener) {
      document.addEventListener(`scroll`, _.throttle(handleScroll, 0), false);
    }

    if (typeof window !== `undefined` && window?.addEventListener) {
      window.addEventListener(`resize`, _.throttle(handleResize, 0), false);

      handleResize();
    }
  }, []);

  //

  return (
    <DocumentContext.Provider
      value={{
        device,
        documentHeight,
        scrollTop,
        windowWidth,
        windowHeight,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}

// DocumentProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default DocumentProvider;
