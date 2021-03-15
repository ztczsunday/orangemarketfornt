<template>
  <div class = "card">
    <van-cell is-link @click="toShop" :style="{'font-weight':'bold','font-size': '120%','border-radius':'25px'}">
      <van-icon name="shop-o" />
      <slot name="shopName"></slot>
    </van-cell>
    <ARow>
      <ACol span="8">
        <div>
          <slot name="goodsPicture"></slot>
        </div>
      </ACol>
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
      <ACol span="4" :style="{'font-size':'2vw','color': 'grey'}">
        ￥<slot name="price"></slot>
        *<slot name="amount"></slot>
      </ACol>
    </ARow>
    <ARow type="flex" justify="end">
      <ACol span="5" :style="{'font-weight':'bold','font-size':'3vw','color': 'grey'}">
        总价：￥<slot name="totalPrice"></slot>
      </ACol>
    </ARow>
    <ARow type="flex" justify="end">
      <ACol>
        <van-button round type="info" :style="{height : '35px','margin-right':'10px'}" color="red">删除订单</van-button>
        <van-button round type="info" :style="{height : '35px'}" @click="toOrderDetail">查看详情</van-button>
      </ACol>
    </ARow>
  </div>

</template>

<script>
export default {
  name: "Card",
  methods:{
    toShop() {
      this.$router.push({ path: '/Shop' })
    },
    toOrderDetail(){
      this.$router.push({ path: '/OrderDetail' })
    }
  }
}
</script>

<style scoped>
.card{
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