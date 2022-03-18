import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { DocumentContext } from "../context/DocumentContext";
export interface IApearOnScroll {
  atTop: boolean;
  children: any;
  once: boolean;
  delay: number;
  slow: boolean;
}

const AppearOnScroll = ({
  children,
  atTop = false,
  once = false,
  delay = 2,
  slow = false,
}: IApearOnScroll) => {
  const documentContext = useContext(DocumentContext);
  const containerRef = useRef<any | undefined>(null);
  const [visible, setVisible] = useState(false);
  const { scrollTop, windowHeight } = documentContext;

  useEffect(() => {
    if (!atTop || !containerRef?.current || !window) {
      return;
    }

    setTimeout(() => {
      window.scrollTo(0, 2);
    }, 100);
  }, [containerRef.current]);

  useEffect(() => {
    if (!containerRef?.current) {
      return;
    }

    let curr: any = containerRef.current;

    const { height, top } = curr.getBoundingClientRect();

    if (top > -height && top < windowHeight) {
      if (!visible) {
        setVisible(true);
      }
    } else if (visible && !once) {
      setVisible(false);
    }
  }, [scrollTop]);

  //

  let computedChildren = children;

  if (typeof children === `function`) {
    computedChildren = children({ visible });
  }

  //

  return (
    <div
      ref={containerRef}
      className={`${
        visible ? `animation-appear${slow ? `-slow` : ``}` : `invisible`
      } animation-delay-${delay}`}
    >
      {computedChildren}
    </div>
  );
};

AppearOnScroll.defaultProps = {
  atTop: false,
  delay: 2,
  once: false,
  slow: false,
};

// AppearOnScroll.propTypes = {
//   atTop: PropTypes.bool,
//   children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
//   delay: PropTypes.number,
//   once: PropTypes.bool,
//   slow: PropTypes.bool,
// };

export default AppearOnScroll;
