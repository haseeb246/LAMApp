import React, { useContext } from "react";
import { AppDataContext } from "../context/AppDataContext";

export interface ICursorInteractive {
  children: React.ReactNode;
  mode: any;
  text?: any;
}

const CursorInteractive = ({ children, mode, text }: ICursorInteractive) => {
  const { setCursorMode, setCursorText } = useContext(AppDataContext);

  return (
    <div
      role="presentation"
      onMouseEnter={() => {
        setCursorMode(mode);
        setCursorText(text);
      }}
      onMouseLeave={() => {
        setCursorMode(null);
        setCursorText(null);
      }}
    >
      {children}
    </div>
  );
};

// CursorInteractive.propTypes = {
//   children: PropTypes.node.isRequired,
//   mode: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

export default CursorInteractive;
