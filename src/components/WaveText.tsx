import React, { useState } from "react";
import PropTypes from "prop-types";
import AppearOnScroll from "./AppearOnScroll";
import { useTimeout } from "../utils/hooks";

export interface IProps {
  className: string;
  delay: number;
  interval: number;
  text: string;
  isShowOnce: boolean;
}

const WaveText = ({
  className = ``,
  delay = 0,
  interval = 1,
  text = "",
  isShowOnce = true,
}: IProps) => {
  const [ready, setReady] = useState(false);

  useTimeout(() => {
    setReady(true);
  }, delay);

  if (!ready) {
    return <></>;
  }

  return (
    <AppearOnScroll once={isShowOnce}>
      {({ visible }: any) => (
        <h2 className={`w-full relative flex whitespace-pre-wrap ${className}`}>
          {text.split(``).map((char: any, charIndex: number) => {
            const charKey = `char-${charIndex}`;

            return (
              <span
                key={charKey}
                className={`${
                  visible ? `animation-appear-slow` : `opacity-0`
                } block`}
                style={{
                  animationDelay: `${(charIndex + interval) * 25}ms`,
                }}
              >
                {char}
              </span>
            );
          })}
        </h2>
      )}
    </AppearOnScroll>
  );
};

WaveText.defaultProps = {
  className: ``,
  delay: 0,
  interval: 1,
  isShowOnce: true,
};

// WaveText.propTypes = {
//   className: PropTypes.string,
//   delay: PropTypes.number,
//   interval: PropTypes.number,
//   text: PropTypes.string.isRequired,
// };

export default WaveText;
