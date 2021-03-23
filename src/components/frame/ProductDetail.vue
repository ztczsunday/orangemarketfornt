<template>
  <ARow>
    <ARow>
      <ProductDetailMessage :goodsInfo="this.goodsInfo" v-if="flag === true" ref="ProductDetailMessage"/>
    </ARow>
    <ProductFooter @clickbuy="showBuy"></ProductFooter>
  </ARow>
</template>

<script>
import ProductDetailMessage from "@/components/subcomponents/ProductDetailMessage";
import ProductFooter from "@/components/subcomponents/ProductFooter";

export default {
  name: "ProductDetail",
  components: { ProductFooter, ProductDetailMessage },
  data(){
    return{
      goodsInfo : null,
      flag : false,
    }
  },
  async created() {
    const {$} = await import('@/util/ajax');
    const result = await $.get(`/commodity?commodityId=${7}`);
    this.goodsInfo = result.data.information;
    this.flag = true
    console.log(this.goodsInfo)
  },
  methods:{
    showBuy(){
      this.$refs.ProductDetailMessage.showBuyBlock();

    }
  }
}
</script>

<style scoped>

</style>