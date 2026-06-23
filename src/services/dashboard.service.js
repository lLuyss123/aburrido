import { getSession } from "./auth.service";

export function getSesionName() {
  const userName = getSession()?.userName || "Not Logged";
  return userName;
}
