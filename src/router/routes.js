import { admin, adminEvents } from "../views/admin.js";
import { dashboard, dashboardEvents } from "../views/dashboard.js";
import { home, homeEvents } from "../views/home.js";
import { Login, loginEvents } from "../views/login.js";
import { register, registerEvents } from "../views/register.js";
import { tasks, tasksEvents } from "../views/tasks.js";




export const routes = {
  "/": {
    render: home,
    events: homeEvents,
    guestOnly: true
  },

  "/login": {
    render: Login,
    events: loginEvents,
    guestOnly: true
  },

  "/register": {
    render: register,
    events: registerEvents,
    guestOnly: true
  },
  "/dashboard": {
    render: dashboard,
    events: dashboardEvents,
    needAuth: true
  },
  "/tasks": {
    render: tasks,
    events: tasksEvents,
    needAuth: true
  },
  "/admin": {
    render: admin,
    events: adminEvents,
    needAuth: true,
    allowedRoles:["ADMIN"]
  },
};

