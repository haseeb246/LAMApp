import "./App.css";
import IndexApp from "./templates/indexApp";
import pageData from "./page-data/index/page-data.json";
import { useContext } from "react";
import { AppDataContext, AppDataProvider } from "./context/AppDataContext";
import { DocumentContext, DocumentProvider } from "./context/DocumentContext";
import { WrapRootElement } from "./wrapRootElement";
import CursorProvider from "./context/CursorContext";
function App() {
  return (
    <DocumentProvider>
      <CursorProvider>
        <AppDataProvider>
          <IndexApp data={pageData.result.data} location={window.location} />
        </AppDataProvider>
      </CursorProvider>
    </DocumentProvider>
  );
}

export default App;
