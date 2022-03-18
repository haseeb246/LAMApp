import React, { useContext, useEffect, useState } from "react";
import { AppDataContext } from "../context/AppDataContext";
import { CursorContext } from "../context/CursorContext";
import Scrambler from "./Scrambler";
import { useTimeout } from "../utils/hooks";

const Cursor = () => {
  const { cursorColor, cursorMode, cursorText } = useContext(AppDataContext);
  const { cursorPositionX, cursorPositionY } = useContext(CursorContext);
  // const [rendered, setRendered] = useState(false);

  // useTimeout(() => {
  //   setRendered(true);
  // }, 300);

  // useEffect(() => {
  //   if (rendered) {
  //     setRendered(false);

  //     setTimeout(() => {
  //       setRendered(true);
  //     }, 100);
  //   }
  // }, [cursorMode, cursorText]);

  //

  return (
    <div
      className={`cursor hidden ${
        cursorMode ? `cursor--${cursorMode}` : ``
      } fixed top-0 left-0 z-50 rounded-full pointer-events-none`}
      style={{
        transform: `translate3d(${cursorPositionX}px, ${cursorPositionY}px, 0)`,
      }}
    >
      <div
        className={`cursor__line cursor__line--0 w-full absolute top-0 left-0 bg-${cursorColor}`}
      ></div>
      <div
        className={`cursor__line cursor__line--1 w-full absolute top-0 left-0 bg-${cursorColor}`}
      ></div>

      {cursorText && (
        <div className="cursor__text absolute flex items-start justify-start whitespace-no-wrap text-left">
          <Scrambler
            className={`caption mono text-${cursorColor}`}
            iterations={10}
            text={cursorText}
          />
        </div>
      )}

      {/* {rendered && (
        <>
          <div className="cursor__line cursor__line--0 w-full absolute top-0 left-0 bg-white"></div>
          <div className="cursor__line cursor__line--1 w-full absolute top-0 left-0 bg-white"></div>

          {cursorText && (
            <div className="cursor__text absolute flex items-start justify-start whitespace-no-wrap text-left">
              <Scrambler
                className="caption mono text-white"
                iterations={10}
                text={cursorText}
              />
            </div>
          )}
        </>
      )} */}
    </div>
  );
};

export default Cursor;
