<template>
  <ARow>
     <ARow>
       <ProductDetailMessage/>
     </ARow>
    <goods-info></goods-info>
  </ARow>
</template>

<script>
import ProductDetailMessage from "@/components/subcomponents/ProductDetailMessage";
import GoodsInfo from "@/components/subcomponents/GoodsInfo";
export default {
  name: "ProductDetail",
  components: {GoodsInfo, ProductDetailMessage}
}
</script>

<style scoped>

</style>