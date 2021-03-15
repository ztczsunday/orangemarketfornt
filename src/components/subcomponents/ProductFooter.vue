<template>
  <div>
    <div>
      <VanGoodsAction class="bottomBlock">
        <VanGoodsActionIcon icon="shop-o" text="店铺"/>
        <VanGoodsActionIcon icon="chat-o" text="客服"/>
        <VanGoodsActionIcon :color="collectColor" :icon="collectIcon" :text="collectInfo" @click="collectInfo = 0"/>

        <VanGoodsActionButton text="加入购物车" type="warning"/>
        <VanGoodsActionButton text="立即购买" type="danger"/>
      </VanGoodsAction>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      collect: false
    }
  },
  computed: {
    collectInfo: {
      get() {
        return (this.collect === false ? '' : '已') + '收藏';
      },
      set() {
        this.collect = !this.collect;
      }
    },
    collectColor() {
      return this.collect ? '#ff5000' : ''
    },
    collectIcon() {
      return this.collect ? 'star' : 'star-o';
    }
  },
  methods: {}
}
</script>

<style scoped>
.bottomBlock {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>