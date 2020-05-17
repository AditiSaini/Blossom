import { Application } from "express";
import { isAuthenticated } from "../auth/authenticated";
import { isAuthorized } from "../auth/authorized";
import { all, get, patch, remove, create } from "./controller";

export function routesConfig(app: Application) {
  app.post("/users", isAuthenticated, isAuthorized, create);

  // lists all users
  app.get("/users", [
    isAuthenticated,
    isAuthorized({ hasRole: ["admin", "manager"] }),
    all
  ]);

  //get: id users
  app.get("/users/:id", [
    isAuthenticated,
    isAuthorized({ hasRole: ["admin", "manager"], allowSameUser: true }),
    get
  ]);

  //updates: id user
  app.patch("/users/:id", [
    isAuthenticated,
    isAuthorized({ hasRole: ["admin", "manager"], allowSameUser: true }),
    patch
  ]);

  //deletes: id user
  app.delete("/users/:id", [
    isAuthenticated,
    isAuthorized({ hasRole: ["admin", "manager"], allowSameUser: true }),
    remove
  ]);
}
