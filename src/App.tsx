import "./App.css";
import IndexApp from "./templates/indexApp";
import pageData from "./page-data/index/page-data.json";
import { Fragment, useContext } from "react";
import { AppDataContext, AppDataProvider } from "./context/AppDataContext";
import { DocumentContext, DocumentProvider } from "./context/DocumentContext";
import { WrapRootElement } from "./wrapRootElement";
import CursorProvider from "./context/CursorContext";
import { Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <DocumentProvider>
      <CursorProvider>
        <AppDataProvider>
          {/* <Routes> */}
          {/* <Route path="/" Component={IndexApp} /> */}
          <Fragment>
            <IndexApp data={pageData.result.data} location={window.location} />
          </Fragment>
          {/* </Routes> */}
        </AppDataProvider>
      </CursorProvider>
    </DocumentProvider>
  );
}

export default App;
