<template>
  <div class="main">
    <Nav></Nav>
    <div class="main-title">{{ $route.query.text }}</div>
  </div>
</template>

<script>
import "./home.scss";
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>
<style lang='scss'>
</style>