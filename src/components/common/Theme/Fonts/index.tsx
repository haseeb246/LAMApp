import React from "react";
import { css, Global } from "@emotion/react";
// import { breakpoint } from "../../../../utils/css.js";

import fkDisplayRegularWOFF from "../../../../assets/fonts/fk-display-regular.woff";
import fkGroteskMonospacedWOFF from "../../../../assets/fonts/fk-grotesk-monospaced.woff";
import fkGroteskRegularWOFF from "../../../../assets/fonts/fk-grotesk-regular.woff";
import { breakpoint } from "../../../../utils/css";

const SANS_FALLBACKS = `"Helvetica Neue", "Helvetica", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

const FK_GROTESK_REGULAR_TEXT_GROUP = `"Fk Grotesk Regular", ${SANS_FALLBACKS}`;
const FK_GROTESK_MONOSPACED_TEXT_GROUP = `"Fk Grotesk Monospaced", ${SANS_FALLBACKS}`;

const VW_RATIO = `6.95vw`;

/** ============================================================================
 * @component
 * Typography files and settings.
 */
const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Fk Grotesk Regular";
        src: url(${fkGroteskRegularWOFF}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "Fk Grotesk Monospaced";
        src: url(${fkGroteskMonospacedWOFF}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "Fk Display Regular";
        src: url(${fkDisplayRegularWOFF}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: normal;
      }

      // common //
      .g1,
      .g2,
      .g3,
      .h1,
      .h2,
      .h3,
      .h4,
      .b1,
      .b2,
      .b3 {
        font-family: ${FK_GROTESK_REGULAR_TEXT_GROUP};
        line-height: 120%;
        font-weight: normal;
      }

      .button,
      .caption,
      .mono {
        font-family: ${FK_GROTESK_MONOSPACED_TEXT_GROUP};
      }

      // headings //
      .g1 {
        font-size: calc(${VW_RATIO} * 4.8);
        line-height: 1;
        letter-spacing: -0.02em;
      }

      .g2 {
        font-size: calc(${VW_RATIO} * 3.04);
        line-height: 1;
        letter-spacing: -0.02em;
      }

      .g3 {
        font-size: calc(${VW_RATIO} * 1.92);
        line-height: 1;
        letter-spacing: -0.02em;
      }

      .h1 {
        font-size: calc(${VW_RATIO} * 1.45);
        line-height: 120%;
      }

      .h2 {
        font-size: calc(${VW_RATIO} * 1.52);
        line-height: 120%;
      }

      .h3 {
        font-size: calc(${VW_RATIO} * 0.88);
        line-height: 120%;
      }

      .h4 {
        font-size: calc(${VW_RATIO} * 0.88);
        text-transform: uppercase;
        line-height: 120%;
      }

      // body //

      .b1 {
        font-size: calc(${VW_RATIO} * 0.72);
        line-height: 140%;
      }

      .b2 {
        font-size: calc(${VW_RATIO} * 0.64);
        line-height: 140%;
      }

      .b3 {
        font-size: calc(${VW_RATIO} * 0.56);
        line-height: 140%;
      }

      // other //

      .button {
        font-size: calc(${VW_RATIO} * 0.64);
        line-height: 120%;
      }

      .caption {
        font-size: calc(${VW_RATIO} * 0.48);
        line-height: 150%;
      }

      // breakpoints (ASC) //
      ${breakpoint(`large-tablet`)} {
        // display //
        .g1 {
          font-size: calc(${VW_RATIO} * 4);
        }

        .g2 {
          font-size: calc(${VW_RATIO} * 2);
        }

        .g3 {
          font-size: calc(${VW_RATIO} * 1);
        }

        .g4 {
          font-size: calc(${VW_RATIO} * 0.85);
        }

        .g5 {
          font-size: calc(${VW_RATIO} * 0.5);
        }
        .g6 {
          font-size: calc(${VW_RATIO} * 0.25);
        }

        // headings //
        .h1 {
          font-size: calc(${VW_RATIO} * 0.48);
        }

        .h2 {
          font-size: calc(${VW_RATIO} * 0.32);
        }

        .h3 {
          font-size: calc(${VW_RATIO} * 0.24);
        }

        .h4 {
          font-size: calc(${VW_RATIO} * 0.24);
        }

        // body /
        .b1 {
          font-size: calc(${VW_RATIO} * 0.18);
        }

        .b2 {
          font-size: calc(${VW_RATIO} * 0.16);
        }

        .b3 {
          font-size: calc(${VW_RATIO} * 0.14);
        }

        // other //
        .button {
          font-size: calc(${VW_RATIO} * 0.16);
        }

        .caption {
          font-size: calc(${VW_RATIO} * 0.14);
        }
      }
    `}
  />
);
export default Fonts;
