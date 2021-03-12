<template>
  <a-row>
     <a-row>
       <ProductDetailMessage/>
     </a-row>
    <goods-info></goods-info>
  </a-row>
</template>

<script>
import ProductDetailMessage from "@/components/subcomponents/ProductDetailMessage";
import GoodsInfo from "@/components/frame/GoodsInfo";
export default {
  name: "ProductDetail",
  components: {GoodsInfo, ProductDetailMessage}
}
</script>

<style scoped>

</style>