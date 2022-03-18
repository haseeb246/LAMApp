/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "lazysizes";

// import "~scss/index.scss";
import { AppDataProvider } from "./context/AppDataContext";
import CursorProvider from "./context/CursorContext";
import { DocumentProvider } from "./context/DocumentContext";

export function WrapRootElement(element: any) {
  return (
    <DocumentProvider>
      <CursorProvider>
        <AppDataProvider>{element}</AppDataProvider>
      </CursorProvider>
    </DocumentProvider>
  );
}
