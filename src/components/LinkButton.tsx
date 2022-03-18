import React from "react";
// import { PropTypes } from "prop-types";
import Button from "./Button";
import CursorInteractive from "./CursorInteractive";
import Arrow from "./svg/Arrow";

export interface ILinkButtonProps {
  className: string;
  color: string;
  transparent: boolean;
}

const LinkButton = ({ className, color, transparent }: ILinkButtonProps) => {
  return (
    <CursorInteractive mode="hover" text="View">
      <Button
        className={`link-button ${className} relative flex items-center justify-center`}
        color={color}
        transparent={transparent}
      >
        <Arrow className="rotate-45-ccw" color={color} />
      </Button>
    </CursorInteractive>
  );
};

LinkButton.defaultProps = {
  className: ``,
  color: `white`,
  transparent: false,
};

// LinkButton.propTypes = {
//   className: PropTypes.string,
//   color: PropTypes.string,
//   transparent: PropTypes.bool
// };

export default LinkButton;
