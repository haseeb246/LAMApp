import React from "react";
import { css, Global } from "@emotion/react";

const COLORS: any = {
  transparent: `transparent`,
  "black-100": `#000000`,
  "black-90": `#121212`,
  "black-70": `#323232`,
  "black-60": `#4F4F4F`,
  "black-40": `#919191`,
  "black-20": `#DDDEE2`,
  "black-10": `#F0F0F0`,
  "green-100": `#00B400`,
  "green-70": `#00B567`,
  "yellow-10": "#FFFDEA",
  white: `#FFFFFF`,
  "off-white": `#F5F5F5`,
};

const Colors = () => (
  <Global
    styles={[
      css`
        :root {
          ${Object.keys(COLORS).map(
            (colorKey) => `
              --color-${colorKey}: ${COLORS[colorKey]};
            `
          )}
        }
      `,
    ]}
  />
);

export default Colors;
