import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  const middleware = "global::customMiddleware";
    const routesPath = strapi.apis.special.routes.special.routes;

      console.log(routesPath, "routesPath");
      console.log(middleware, "middleware");

      const registerIndex = routesPath.findIndex(
        (route) => route.path === "/specials" && route.method === "GET"
      );

    console.log(registerIndex, "registerIndex");

    const registerRoute = routesPath[registerIndex];
      if (registerRoute.config.middlewares === undefined) {
        registerRoute.config.middlewares = [];
      }
    registerRoute.config.middlewares.push(middleware);
};

export default register;
