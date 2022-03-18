export default class constantsUtils {
  static siteBaseUrl: string = "/renderSite/";
  static login: string = "/user/login";
  static updateProfile: string = "/user/UpdateProfile";
  static resetPassword: string = "/user/resetPassword";
  static register: string = "/user/register";
  static getUsers: string = "/user/getUsers";
  static getUserById: string = "/user/getUserById";

  static getGroups: string = "/group/getGroups";

  static createOrUpdateGroup: string = "/group/createOrUpdate";

  static authToken: string = "";
  static UserSessionLocalDb: string = "UserSession";
  static apiBaseUrl: string = "http://localhost:51118/api";
}
