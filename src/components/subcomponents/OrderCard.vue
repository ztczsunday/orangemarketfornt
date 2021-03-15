<template>
  <div class="card">
    <van-cell :style="{'font-weight':'bold','font-size': '120%','border-radius':'25px'}" is-link @click="toShop">
      <van-icon name="shop-o"/>
      <slot name="shopName"></slot>
    </van-cell>
    <div :style="{'font-weight':'bold','font-size':'20px','color': 'red','text-align':'right','margin-right':'2vw'}">
      <slot name="status"></slot>
    </div>
    <ARow type="flex" justify="end">
      <ACol span="10">
        <div>
          <slot name="goodsPicture"></slot>
        </div>
      </ACol>
      <ACol span="1"></ACol>
      <ACol span="12">
        <div :style="{'font-weight':'bold','font-size':'3vw','color': 'black'}">
          <span>
            <slot name="goodsName"></slot>
          </span>
          <br>
          <span :style="{'font-size':'2vw','color': 'grey'}">
            <slot name="goodsSKU"></slot>
          </span>
        </div>
      </ACol>
      <ACol :style="{'font-size':'2vw','color': 'grey'}">
        ￥
        <slot name="price"></slot>
        *<slot name="amount"></slot>
      </ACol>
    </ARow>
    <ARow justify="end" type="flex">
      <ACol :style="{'font-weight':'bold','font-size':'3vw','color': 'grey'}">
        总价：￥
        <slot name="totalPrice"></slot>
      </ACol>
    </ARow>
    <ARow justify="end" type="flex">
      <ACol>
        <van-button :style="{height : '35px','margin-right':'5px'}" color="red" round type="info">删除订单</van-button>
        <van-button :style="{height : '35px'}" round type="info" @click="toOrderDetail">查看详情</van-button>
      </ACol>
    </ARow>
  </div>

</template>

<script>
export default {
  name: "Card",
  methods: {
    toShop() {
      this.$router.push({ path: '/Shop' })
    },
    toOrderDetail() {
      this.$router.push({ path: '/OrderDetail' })
    }
  }
}
</script>

<style scoped>
.card {
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  width: 95%;
  border-radius: 25px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 5px;

}


</style>