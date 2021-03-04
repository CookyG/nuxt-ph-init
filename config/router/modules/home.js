const HomeRouter = resolve => {
  return [
    {
      path: "/home",
      name: "Home",
      component: resolve("@/views/home/home.vue")
    },
    {
      path: "/home2",
      name: "Home2",
      component: resolve("@/views/home2/home2.vue")
    }
  ];
};

export default HomeRouter;
