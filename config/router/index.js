import HomeRouter from "./modules/home";

export default resolve => {
  return [...HomeRouter(resolve)];
};
