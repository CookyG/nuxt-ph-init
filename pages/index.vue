<template>
  <div class="main">
    <Nav></Nav>
    <div class="main-title">首页</div>
    <div class="main-body">
      <template v-if="data">
        <a-list item-layout="horizontal" :data-source="data">
          <a-list-item
            slot="renderItem"
            slot-scope="item, index"
            style="padding: 20px"
          >
            {{ index + 1 }} - {{ item.Name }} - {{ item.Start_Time }}
          </a-list-item>
        </a-list>
      </template>
    </div>
  </div>
</template>

<script>
import "~/assets/css/index.scss";
import { List } from "ant-design-vue";
export default {
  name: "Main",
  components: {
    [List.name]: List,
    [List.Item.name]: List.Item,
    [List.Item.Meta.name]: List.Item.Meta,
  },
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.dataInit();
  },
  methods: {
    async dataInit() {
      this.$store.commit("setLoading", true);
      await this.GetList();
      this.$store.commit("setLoading", false);
    },
    async GetList() {
      const params = {
        PageIndex: 1,
        PageSize: 10,
      };
      const res = await this.$api.User.GetList(params);
      const { result, data } = res;
      if (result == 1) {
        this.data = data;
      }
    },
  },
};
</script>

<style lange="scss">
</style>