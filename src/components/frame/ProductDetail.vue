<template>
  <ARow>
    <ARow>
      <ProductDetailMessage/>
    </ARow>
    <ProductFooter></ProductFooter>
  </ARow>
</template>

<script>
import ProductDetailMessage from "@/components/subcomponents/ProductDetailMessage";
import ProductFooter from "@/components/subcomponents/ProductFooter";

export default {
  name: "ProductDetail",
  components: { ProductFooter, ProductDetailMessage },
  async created() {
    const {$} = await import('@/util/ajax');
    const result = await $.get(`/commodity?commodityId=${1}`);
    console.log(result);
  }
}
</script>

<style scoped>

</style>