import Vue from "vue";

Vue.prototype.$a = 1;

import {
  ConfigProvider,
  Button // ... 你所用到的组件
} from "ant-design-vue";

Vue.use(ConfigProvider);
Vue.use(Button);
