// import _ from "lodash";
import { Guid } from "guid-typescript";
import * as React from "react";

import { appData } from "./appData";
// import Cookies from "universal-cookie";
export default class commonUtil {
  public static setlocalStorage(name: string, data: any) {
    if (typeof data == "string") {
      localStorage.setItem(name, data);
    } else {
      localStorage.setItem(name, JSON.stringify(data));
    }
  }
  public static removelocalStorage(name: string) {
    localStorage.removeItem(name);
  }

  public static getlocalStorage(name: string): any {
    let item = localStorage.getItem(name);
    if (item && typeof item == "string") {
      return JSON.parse(item);
    } else {
      return item;
    }
  }

  public static getHtmlProps(
    props: any,
    propsKeys: any
  ): React.HTMLAttributes<any> {
    let htmlProps = {} as React.HTMLAttributes<any>;
    try {
      for (let key in props) {
        if (!(propsKeys as any)[key]) {
          props[key] = props[key];
        }
      }
    } catch (ex) {
      console.error("commonUtil.getHtmlProps() breaking", ex);
    }
    return htmlProps;
  }

  public static Redirect(path: string, history: any = null) {
    if (history && history.push && path) {
      history.push(path);
      appData.appHistory = history;
    } else if (appData.appHistory && appData.appHistory.push && path) {
      appData.appHistory.push(path);
    }
  }

  public static toInt(value: any): number {
    if (this.isNumber(value)) {
      return parseInt(value);
    }
    return 0;
  }
  public static toNullableInt(value: any): number | null {
    if (this.isNumber(value)) {
      return parseInt(value);
    }
    return 0;
  }

  public static isNumber(value: string | number): boolean {
    return (
      value != null &&
      value !== "" &&
      value != undefined &&
      !isNaN(Number(value.toString()))
    );
  }

  public static handleChange(e: any, obj: any, val: string = ""): any {
    let imObj: any = null;
    if (e && e.target) {
      let { name, value, type, checked } = e.target;

      if (name) {
        let itm: any = { ...obj };
        if (type == "radio" && val) {
          itm[name] = val;
        } else if (type == "checkbox") {
          itm[name] = checked;
        } else {
          itm[name] = value;
        }
        imObj = itm;
      }
    }
    return imObj;
  }

  public static getNewGuid(): string {
    return Guid.create().toString();
  }
  public static getUniqueKey(index: number = 0): string {
    return commonUtil.getNewGuid() + "_" + index;
  }

  public static GetLocalPath() {
    return `${process.env.PUBLIC_URL}`;
    // return `${process.env.PUBLIC_URL}/assets/fluff-desktop.jpg`;
  }
  public static GetImagePath(path: string) {
    return `${this.GetLocalPath()}${path}`;
    // return `${process.env.PUBLIC_URL}/assets/fluff-desktop.jpg`;
  }
}
