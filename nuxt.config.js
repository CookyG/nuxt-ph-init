import { filename } from "./config/env"; //get env
import getRouters from "./config/router/index";
export default {
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "页面测试",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=1024, maximum-scale=1.0, user-scalable=no"
      },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [["@nuxtjs/dotenv", { filename: filename() }]],

  router: {
    base: process.env.BASE == "build" ? "/ssr/" : "/",
    extendRoutes(routes, resolve) {
      routes.push(...getRouters(resolve));
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/antbase/base.less", "@/assets/css/normalize.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/antd-ui", "@/plugins/axiosPlug"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources"
  ],

  styleResources: {
    scss: [
      "@/assets/css/var.scss" // 自己项目中的样式文件的路径
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config) {
    //   config.resolve.alias["@ant-design/icons/lib/index.es$"] = path.resolve(
    //     __dirname,
    //     "@/plugins/antd-icons.js"
    //   ); // 引入需要的
    // },
    publicPath: "/js/",
    loaders: {
      less: {
        javascriptEnabled: true
      }
    },
    babel: {
      plugins: [
        [
          "import",
          {
            libraryName: "ant-design-vue",
            libraryDirectory: "es"
          }
        ]
      ]
    },
    transpile: [/ant-design-vue/]
  }
};
