export default (config, { strapi })=> {
  // Custom middleware logic
  return async (ctx, next) => {
    console.log("Custom middleware executed");
    await next();
  };
};