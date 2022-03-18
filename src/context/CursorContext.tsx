import React, { Component, createContext } from "react";
import PropTypes from "prop-types";
import _ from "underscore";
import { getWindowDimensions } from "../utils/dom";

export interface ICursorContext {
  cursorCenterDeltaX: number;
  cursorCenterDeltaY: number;
  cursorPositionX: number;
  cursorPositionY: number;
  windowHeight: number;
  windowWidth: number;
}

let defaultObj: ICursorContext = {
  cursorCenterDeltaX: 0,
  cursorCenterDeltaY: 0,
  cursorPositionX: 0,
  cursorPositionY: 0,
  windowHeight: 0,
  windowWidth: 0,
};

export const CursorContext = createContext<ICursorContext>(defaultObj);

class CursorProvider extends Component {
  state = {
    cursorCenterDeltaX: 0,
    cursorCenterDeltaY: 0,
    cursorPositionX: 0,
    cursorPositionY: 0,
    windowHeight: 0,
    windowWidth: 0,
  };

  //

  componentDidMount() {
    if (document) {
      document.addEventListener(
        `mousemove`,
        _.throttle(this.handleMousemove, 0),
        false
      );
    }

    if (window) {
      window.addEventListener(
        `resize`,
        _.throttle(this.handleResize, 0),
        false
      );

      setTimeout(() => {
        this.handleResize();
      });
    }
  }

  //

  handleMousemove = (event: any) => {
    this.setState((prevState: any) => ({
      cursorCenterDeltaX: -(0.5 - event.pageX / prevState.windowWidth),
      cursorPositionX: event.pageX,
      cursorCenterDeltaY: -(
        0.5 -
        (event.pageY - window.pageYOffset) / prevState.windowHeight
      ),
      cursorPositionY: event.pageY - window.pageYOffset,
    }));
  };

  handleResize = () => {
    this.setState({
      windowWidth: getWindowDimensions().width,
      windowHeight: getWindowDimensions().height,
    });
  };

  //

  render() {
    return (
      <CursorContext.Provider
        value={{
          cursorCenterDeltaX: this.state.cursorCenterDeltaX,
          cursorCenterDeltaY: this.state.cursorCenterDeltaY,
          cursorPositionX: this.state.cursorPositionX,
          cursorPositionY: this.state.cursorPositionY,
          windowWidth: this.state.windowWidth,
          windowHeight: this.state.windowHeight,
        }}
      >
        {this.props.children}
      </CursorContext.Provider>
    );
  }
}

// CursorProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default CursorProvider;
