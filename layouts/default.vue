<template>
  <a-config-provider :locale="locale">
    <div class="body">
      <Loading />
      <Nuxt />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from "ant-design-vue/es/locale-provider/zh_CN";
export default {
  name: "Layout",
  created() {},
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>

<style>
@import url("@/assets/css/init.scss");
</style>
