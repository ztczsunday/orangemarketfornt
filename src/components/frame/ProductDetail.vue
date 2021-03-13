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
  components: {ProductFooter, ProductDetailMessage}
}
</script>

<style scoped>

</style>