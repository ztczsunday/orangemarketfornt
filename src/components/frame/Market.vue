<template>
  <div>
    <van-cell>
      <van-card v-for="(item, index) in commodities"
                :key="index"
                :thumb="item.mainIcon"
                :title="item.commodityName"
                style="font-size: 15px; background: white; border: 1px solid #ebedf0;"
                @click="$router.push(`/?cid=${item.cid}`)"
      />
    </van-cell>
  </div>
</template>

<script>

export default {
  name: "Market",
  async created() {
    const { $ } = await import("@/util/ajax");
    const formData = new FormData();
    formData.append("keyword", '');
    formData.append("pages", '0');
    formData.append("pageSize", '10');
    const result = await $.post('/findCommodityByKey', formData);
    // const result = await $.get('/recommends');
    const page = result.data.information;
    this.commodities = page.records;
    console.log(page);
  },
  data() {
    return {
      /* 存储commodities */
      commodities: []
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>
