<template>
  <div>
    <VanCard :thumb="shopDetails.shopIcon"
             :title="shopDetails.shopName"
             :desc="shopDetails.shopDescription"
             style="font-size: 15px;"
    >
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </VanCard>
    <VanTabs v-model="active">
      <VanTab title="上架商品">
        <VanList v-model="commodityOpen.loading"
                 :finished="commodityOpen.finished"
                 finished-text="没有更多了"
                 @load="onLoadCommodityOpen"
        >
          <VanCard v-for="(item, index) in commodityOpen.items"
                   :key="index"
                   :price="computePrice(item['lowestPrice'])"
                   :thumb="item.mainIcon"
                   :title="item.commodityName"
                   @click="$router.push(`/?cid=${item.cid}`)"
          />
        </VanList>
      </VanTab>
      <VanTab title="已下架商品">
        <VanList v-model="commodityClose.loading"
                 :finished="commodityClose.finished"
                 finished-text="没有更多了"
                 @load="onLoadCommodityClose"
        >
          <VanCard v-for="(item, index) in commodityClose.items"
                   :key="index"
                   :price="computePrice(item['lowestPrice'])"
                   :thumb="item.shopIcon"
                   :title="item.shopName"
                   @click="$router.push(`/?sid=${item.cid}`)"
          />
        </VanList>
      </VanTab>
    </VanTabs>
  </div>
</template>

<script>
export default {
  name: "Shop",
  /* 初始化先拉一些信息下来 */
  created() {
    this.onLoadShopDetail();
  },
  data() {
    return {
      /* 当前活跃页面 */
      active: null,
      /* 商铺的详细信息 */
      shopDetails: {},
      /* 是否被收藏了 */
      isCollected: {},
      commodityOpen: {
        /* 表示是否Loading */
        loading: null,
        /* 表示是否已经到底 */
        finished: false,
        /* 现在最新的是第几页 */
        nowPage: 0,
        /* 一页大小 */
        pageSize: 10,
        /* 存储items */
        items: []
      },
      commodityClose: {
        /* 表示是否Loading */
        loading: null,
        /* 表示是否已经到底 */
        finished: false,
        /* 现在最新的是第几页 */
        nowPage: 0,
        /* 一页大小 */
        pageSize: 10,
        /* 存储items */
        items: []
      },
    }
  },
  methods: {
    computePrice(price) {
      return price % 1 !== 0 ? price : price + ".00";
    },
    async onLoadShopDetail() {
      const { $ } = await import("@/util/ajax");
      const result = await $.get('/shop/visit', {
        params: {
          sid: 1
        }
      });
      console.log(result);
      this.shopDetails = result.data.information.shopDetails;
    },
    async onLoadCommodityOpen() {
      const { $ } = await import("@/util/ajax");
      const result = await $.get('/shop/visit/open', {
        params: {
          sid: this.$route.query.sid,
          page: this.commodityOpen.nowPage,
          pageSize: this.commodityOpen.pageSize
        }
      });
      const page = result.data.information;
      Array.prototype.push.apply(this.commodityOpen.items, page.records);
      this.commodityOpen.nowPage++;
      this.commodityOpen.finished = this.commodityOpen.nowPage >= page.total / page.size;
    },
    async onLoadCommodityClose() {
      const { $ } = await import("@/util/ajax");
      const result = await $.get('/shop/visit/close', {
        params: {
          sid: this.$route.query.sid,
          page: this.commodityClose.nowPage,
          pageSize: this.commodityClose.pageSize
        }
      });
      const page = result.data.information;
      Array.prototype.push.apply(this.commodityClose.items, page.records);
      this.commodityClose.nowPage++;
      this.commodityClose.finished = this.commodityClose.nowPage >= page.total / page.size;
    }
  }
}
</script>

<style scoped>

</style>