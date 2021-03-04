<template>
  <a-spin class="loading" v-if="loading">
    <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
  </a-spin>
</template>

<script>
import { mapGetters } from "vuex";
import { Icon, Spin } from "ant-design-vue";
export default {
  name: "Loading",
  components: {
    [Icon.name]: Icon,
    [Spin.name]: Spin,
  },
  computed: {
    ...mapGetters({
      loading: "getLoading",
    }),
  },
  data() {
    return {};
  },
};
</script>
<style lang='scss'>
</style>