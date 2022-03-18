import React from "react";
import { AppDataContext } from "../context/AppDataContext";

export default function withContext(Component: any) {
  return function contextComponent(props: any) {
    return (
      <AppDataContext.Consumer>
        {(context) => <Component {...props} context={context} />}
      </AppDataContext.Consumer>
    );
  };
}
