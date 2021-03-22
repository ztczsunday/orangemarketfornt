<template>
  <div>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <van-card v-for="(item, index) in commodities"
                :key="index"
                :thumb="item.mainIcon"
                :title="item.commodityName"
                :price="item.lowestPrice"
                @click="$router.push(`/?cid=${item.cid}`)"
      />
    </van-list>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  created() {
    this.onLoad();
  },
  data() {
    return {
      /* 表示是否Loading */
      loading: null,
      /* 表示是否已经到底 */
      finished: false,
      /* 现在最新的是第几页 */
      nowPage: 0,
      /* 一页大小 */
      pageSize: 10,
      /* 存储Histories */
      commodities: []
    }
  },
  methods: {
    async onLoad() {
      const { $ } = await import("@/util/ajax");
      const formData = new FormData();
      formData.append("keyword", this['$route'].query.keyword);
      formData.append("pages", this.nowPage);
      formData.append("pageSize", this.pageSize);
      const result = await $.post('/findCommodityByKey', formData);
      const page = result.data.information;
      Array.prototype.push.apply(this.commodities, page.records);
      this.nowPage++;
      this.finished = this.nowPage >= page.total / page.size;
    }
  }
}
</script>

<style scoped>

</style>