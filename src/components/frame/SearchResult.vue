<template>
  <div>
    <VanSearch
        v-model="keyword"
        clearable
        placeholder="请输入搜索关键词"
        shape="round"
        show-action
    >
      <template #action>
        <div @click="onSearch">
          搜索商品
        </div>
      </template>
    </VanSearch>
    <div style="text-align: center; background: white;">
      <a-input v-model="minValue" placeholder="请输入最低价" style="width: 45%;" prefix="￥"/>
      ~
      <a-input v-model="maxValue" placeholder="请输入最高价" style="width: 45%;" prefix="￥"/>
    </div>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <van-cell>
        <van-card v-for="(item, index) in commodities"
                  :key="index"
                  :thumb="item.mainIcon"
                  :title="item.commodityName"
                  :price="computePrice(item['lowestPrice'])"
                  style="font-size: 15px; background: white"
                  @click="$router.push(`/?cid=${item.cid}`)"
                  class="bottom"
        />
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  created() {
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
      /* 存储commodities */
      commodities: [],
      /* 存放搜索内容 */
      keyword: null,
      /* 最低价格 */
      minValue: null,
      /* 最高价格 */
      maxValue: null
    }
  },
  methods: {
    computePrice(price) {
      return price % 1 !== 0 ? price : price + ".00";
    },
    async onSearch() {
      const { $ } = await import("@/util/ajax");
      const formData = new FormData();
      formData.append("keyword", this.keyword);
      formData.append("pages", this.nowPage);
      formData.append("pageSize", this.pageSize);
      if (this.minValue !== null && this.minValue !== "") {
        formData.append("minValue", this.minValue);
      }
      if (this.maxValue !== null && this.maxValue !== "") {
        formData.append("maxValue", this.maxValue);
      }
      const result = await $.post('/findCommodityByKey', formData);
      const page = result.data.information;
      this.commodities = page.records;
      this.nowPage = 1;
      this.finished = this.nowPage >= page.total / page.size;
    },
    async onLoad() {
      const { $ } = await import("@/util/ajax");
      const formData = new FormData();
      formData.append("keyword", this.keyword);
      formData.append("pages", this.nowPage);
      formData.append("pageSize", this.pageSize);
      if (this.minValue !== null && this.minValue !== "") {
        formData.append("minValue", this.minValue);
      }
      if (this.maxValue !== null && this.maxValue !== "") {
        formData.append("maxValue", this.maxValue);
      }
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
.bottom {
  border: 1px solid #ebedf0;
}
</style>