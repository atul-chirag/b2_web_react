import { apiClient } from "./axios";
import { routes } from "./routes";

export const loginPage = (body) => {
  return apiClient({
    method: routes.LOGIN_DETAIL.METHOD,
    url: routes.LOGIN_DETAIL.URL,
    data: body,
  });
};

export const profileStatus = (body) => {
  return apiClient({
    method: routes.PROFILE_STATUS.METHOD,
    url: routes.PROFILE_STATUS.URL,
    data: body,
  });
};

export const signupPage = (body) => {
  return apiClient({
    method: routes.SIGNUP_STATUS.METHOD,
    url: routes.SIGNUP_STATUS.URL,
    data: body,
  });
};

export const dashboardPage = (body) => {
  return apiClient({
    method: routes.DASHBOARD_PAGE.METHOD,
    url: routes.DASHBOARD_PAGE.URL,
    data: body,
  });
};

export const loginLog = (body) => {
  return apiClient({
    method: routes.Login_Log.METHOD,
    url: routes.Login_Log.URL,
    data: body,
  });
};









