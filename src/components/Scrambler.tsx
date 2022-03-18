import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DocumentContext } from "../context/DocumentContext";
import { getRandomIntByRange } from "../utils/helpers";
import { useTimeout } from "../utils/hooks";

const Scrambler = ({ className, style, delay, iterations, text }: any) => {
  const { device } = useContext(DocumentContext);

  const [ready, setReady] = useState(false);
  const [renderedText, setRenderedText] = useState(text);
  const [scrambleState, setScrambleState] = useState(0);

  const getJibberish = (length: number) => {
    const characters: any = {};

    characters.consonants = [
      `b`,
      `c`,
      `d`,
      `f`,
      `g`,
      `h`,
      `j`,
      `k`,
      `l`,
      `m`,
      `n`,
      `p`,
      `r`,
      `s`,
      `t`,
      `v`,
      `w`,
    ];

    characters.vowels = [`a`, `e`, `i`, `o`, `u`, ` `];
    characters.result = ``;

    characters.getLetter = (datasource: any) => {
      const key = Math.floor(Math.random() * datasource.length);
      return datasource[key];
    };

    let loopStat = 0;

    while (loopStat < length) {
      if (loopStat === null || loopStat % 2) {
        characters.result += characters.getLetter(characters.vowels);
      } else {
        characters.result += characters.getLetter(characters.consonants);
      }

      loopStat += 1;
    }

    return characters.result;
  };

  //

  useTimeout(() => {
    setReady(true);
  }, delay);

  useEffect(() => {
    if (!ready) {
      return;
    }

    let scrambleIterations = iterations;

    if (!scrambleIterations) {
      scrambleIterations = text.length - renderedText.length;

      if (scrambleIterations < 0) {
        scrambleIterations = -scrambleIterations;
      }

      if (scrambleIterations < 20) {
        scrambleIterations = 20;
      }
    }

    setScrambleState(scrambleIterations);
  }, [ready, text]);

  useEffect(() => {
    if (!ready || !window) {
      return () => {};
    }

    if (scrambleState === 0) {
      setRenderedText(text);

      return () => {};
    }

    //

    let jibberishLength: number = 0;

    if (text === ``) {
      if (renderedText.length > iterations) {
        jibberishLength = parseInt(renderedText.length - iterations / 10 + "");
      } else {
        jibberishLength = parseInt(renderedText.length - iterations / 20 + "");
      }

      if (jibberishLength <= 0) {
        jibberishLength = 2;
      }
    } else {
      jibberishLength = getRandomIntByRange(text.length - 3, text.length);

      if (jibberishLength < 2) {
        jibberishLength = 2;
      }
    }

    setRenderedText(getJibberish(jibberishLength));

    //

    const scrambleTimeout = setTimeout(() => {
      setScrambleState(scrambleState - 1);
    }, 40);

    return () => {
      clearTimeout(scrambleTimeout);
    };
  }, [ready, scrambleState]);

  //

  return (
    <span
      className={`scrambler ${ready ? `ready` : ``} ${className}`}
      style={style}
    >
      {ready ? renderedText : `...`}
    </span>
  );
};

Scrambler.defaultProps = {
  className: ``,
  style: {},
  delay: 0,
  iterations: null,
};

Scrambler.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  delay: PropTypes.number,
  iterations: PropTypes.number,
  text: PropTypes.string.isRequired,
};

export default Scrambler;
