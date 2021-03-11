<template>
  <div>
    <VanGoodsAction>
      <VanGoodsActionIcon icon="chat-o" text="客服"/>
      <VanGoodsActionIcon icon="cart-o" text="购物车"/>
      <VanGoodsActionIcon icon="star-o" text="已收藏"/>
      <VanGoodsActionIcon icon="shop-o" text="店铺"/>
      <VanGoodsActionButton text="加入购物车" type="warning"/>
      <VanGoodsActionButton text="立即购买" type="danger"/>
    </VanGoodsAction>
  </div>
</template>

<script>
export default {
  name: "GoodsInfo"
}
</script>

<style scoped>

</style>