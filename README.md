# nuxt-init

## 目录结构

```
├── assets //公用包目录(css js images)
├── components //公用组件目录
├── config
│   ├── api //接口地址
│   ├── axiosConfig //axios 配置
│   ├── env.js  //环境变量配置
│   └── router //路由配置
├── jsconfig.json
├── layouts // 页面入口模板
├── nuxt.config.js //nuxt 配置 一般不需要动
├── package.json
├── pages //为自动生成路由的页面 一般不用
├── plugins //插件集
├── static //静态目录 不会参与打包 相当于public
├── store //状态管理
├── views

```

## 运行

```bash
# 安装依赖包
$ yarn install

# 服务地址 localhost:3000
$ yarn dev

# 打包静态页面
$ yarn web
```

文档参考 [Nuxt.js docs](https://nuxtjs.org).
