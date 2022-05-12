import { Link } from "./types"

const BRANCH = window.location.host.split(".")[0]
const branch_host = function (branch) {
  return function (host) {
    return "https://".concat(branch, ".").concat(host, ".everlywell.com")
  }
}
const base_for = branch_host(BRANCH)

export const links = (env: any): Record<string, Link> => ({
  admin: {
    base: base_for(env.STORE),
    path: "/admin",
    display: "Spree Admin",
  },
  login: {
    base: base_for(env.STORE),
    path: "/login",
    display: "Login",
  },
  logout: {
    base: base_for(env.STORE),
    path: "/logout",
    display: "Logout",
  },
  signup: {
    base: base_for(env.STORE),
    path: "/sign-up",
    display: "Register User",
  },
  register_kit: {
    base: base_for(env.STORE),
    path: "register",
    display: "Register Kit",
  },
  home: {
    base: base_for(env.WWW),
    path: "/",
    display: "Home",
  },
  pip: {
    base: base_for(env.WWW),
    path: "/products",
    display: "PIP Page",
  },
  dashboard: {
    base: base_for(env.RESULTS),
    path: "/dashboard",
    display: "Results Dashboard",
  },
  settings: {
    base: base_for(env.RESULTS),
    path: "/account/settings",
    display: "Account Settings",
  },
})
