import commonUtil from "./commonUtil";
import constantsUtils from "./constantsUtils";
export class appData {
  //   private static _reduxState: initialStateDto = new initialStateDto();
  //   private static _pageSession: pageSessionDto = new pageSessionDto();
  //   private static _homePage: BreadCrumbDto = {
  //     name: "Home",
  //     page: "4b727797-eec9-421b-bc85-c85de8ff9217",
  //     openTarget: false,
  //   };
  // private static _userSession?: UserSessionDto | null | undefined = null;
  //   private static _cart: cartDto = null;
  //   private static _ownerId: string = null;
  // private static _appConfigs: appConfigsDto = new appConfigsDto();
  private static _appHistory: any;

  //   static set reduxState(obj: initialStateDto) {
  //     this._reduxState = obj;
  //   }
  //   static get reduxState(): initialStateDto {
  //     return this._reduxState;
  //   }

  // private static _localDb: LocalDbDto = new LocalDbDto();
  // static set localDb(localDB: LocalDbDto) {
  //   this._localDb = localDB;
  // }
  // static get localDb(): LocalDbDto {
  //   return this._localDb;
  // }

  // private static _cookies: Cookies = new Cookies();
  // static set cookies(cookies: Cookies) {
  //   this._cookies = cookies;
  // }
  // static get cookies(): Cookies {
  //   return this._cookies;
  // }

  // static set userSession(obj: UserSessionDto | null | undefined) {
  //
  //   this.localDb.userSession = obj;
  //   if (!this.appConfigs.session.userSessionStorage) {
  //     this._userSession = obj;
  //   } else if (this.appConfigs.session.userSessionStorage == "localStorage") {
  //     if (!obj) {
  //       commonUtil.removelocalStorage(constantsUtils.UserSessionLocalDb);
  //     } else {
  //       commonUtil.setlocalStorage(constantsUtils.UserSessionLocalDb, obj);
  //     }
  //     this._userSession = obj;
  //   } else if (this.appConfigs.session.userSessionStorage == "cookie") {
  //     let date = new Date();
  //     // add a day
  //     date.setDate(date.getDate() + this.appConfigs.session.userSessionExpiry);
  //     this.cookies.set(constantsUtils.UserSessionLocalDb, obj, {
  //       path: "/",
  //       expires: date,
  //     });
  //     this._userSession = obj;
  //   }
  // }
  // static get userSession(): UserSessionDto | null | undefined {
  //   if (this._userSession) {
  //     return this._userSession;
  //   } else if (!this.appConfigs.session.userSessionStorage) {
  //     return this._userSession;
  //   } else if (this.appConfigs.session.userSessionStorage == "localStorage") {
  //     this._userSession = commonUtil.getlocalStorage(
  //       constantsUtils.UserSessionLocalDb
  //     );
  //     return this._userSession;
  //   } else if (this.appConfigs.session.userSessionStorage == "cookie") {
  //     this._userSession = this.cookies.get(constantsUtils.UserSessionLocalDb);
  //     return this._userSession;
  //   }
  //   return this._userSession;
  // }
  // static set appConfigs(obj: appConfigsDto) {
  //   this._appConfigs = obj;
  // }
  // static get appConfigs(): appConfigsDto {
  //   return this._appConfigs;
  // }

  static set appHistory(history: any) {
    this._appHistory = history;
  }
  static get appHistory(): any {
    return this._appHistory;
  }
  // static set cart(obj: cartDto) {
  //   if (!this.appConfigs.session.cartSessionStorage) {
  //     this._cart = obj;
  //   } else if (this.appConfigs.session.cartSessionStorage == "localStorage") {
  //     commonUtil.setlocalStorage("cart", obj);
  //     this._cart = obj;
  //   } else if (this.appConfigs.session.cartSessionStorage == "cookie") {
  //     commonUtil.setCookie("cart", obj, this.appConfigs.session.cartExpiry);
  //     this._cart = obj;
  //   }
  // }
  // static get cart(): cartDto {
  //   if (this._cart) {
  //     return this._cart;
  //   } else if (!this.appConfigs.session.cartSessionStorage) {
  //     return this._cart;
  //   } else if (this.appConfigs.session.cartSessionStorage == "localStorage") {
  //     this._cart = commonUtil.getlocalStorage("cart");
  //     return this._cart;
  //   } else if (this.appConfigs.session.cartSessionStorage == "cookie") {
  //     this._cart = commonUtil.getCookie("cart");
  //     return this._cart;
  //   }
  //   return this._cart;
  // }

  // static set ownerId(ownerId: string) {
  //   this._ownerId = ownerId;

  //   if (this.appConfigs.session.userSessionStorage == "localStorage") {
  //     commonUtil.setlocalStorage(
  //       constants.localStorageDefaultOwnerId,
  //       ownerId
  //     );
  //     this._ownerId = ownerId;
  //   } else if (this.appConfigs.session.userSessionStorage == "cookie") {
  //     commonUtil.setCookie(
  //       constants.localStorageDefaultOwnerId,
  //       ownerId,
  //       this.appConfigs.session.userSessionExpiry
  //     );
  //     this._ownerId = ownerId;
  //   }
  // }

  // static get ownerId(): string {
  //   if (this.appConfigs.session.userSessionStorage == "localStorage") {
  //     this._ownerId = commonUtil.getlocalStorage(
  //       constants.localStorageDefaultOwnerId
  //     );
  //   } else if (this.appConfigs.session.userSessionStorage == "cookie") {
  //     this._ownerId = commonUtil.getCookie(
  //       constants.localStorageDefaultOwnerId
  //     );
  //   }
  //   return this._ownerId;
  // }
}
