<template>
  <a-menu v-model="current" mode="horizontal">
    <a-menu-item key="mail"><nuxt-link to="/">首页</nuxt-link></a-menu-item>
    <a-menu-item key="app">
      <nuxt-link to="/home?text=菜单二">菜单二</nuxt-link>
    </a-menu-item>
    <a-menu-item key="app2">
      <div @click="go">菜单三</div>
    </a-menu-item>
  </a-menu>
</template>

<script>
import {
  Menu, // ... 你所用到的组件
  Icon,
} from "ant-design-vue";
export default {
  name: "Nav",
  components: {
    [Icon.name]: Icon,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    [Menu.ItemGroup.name]: Menu.ItemGroup,
    [Menu.SubMenu.name]: Menu.SubMenu,
  },
  data() {
    return {
      current: ["mail"],
    };
  },
  methods: {
    go() {
      this.$router.push({
        path: "/home2",
        query: {
          text: "菜单三",
        },
      });
    },
  },
};
</script>
<style lang='scss'>
.ant-menu {
  display: flex;
  justify-content: center;
}
</style>