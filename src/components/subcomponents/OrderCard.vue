<template>
  <div class="card">
    <van-cell :style="{'font-weight':'bold','font-size': '120%','border-radius':'25px'}" is-link @click="toShop">
      <van-icon name="shop-o"/>
      {{order.shopName}}
    </van-cell>
    <ARow span="12" style="color: red;font-weight: bold;margin-left: 20px" v-if="place==='OrderManage'">
      订单{{order.itemName}}
    </ARow>
    <ARow type="flex" justify="end">
      <ACol span="10">
        <div>
          <img :src="order.subIcon" class="goodsPicture">
        </div>
      </ACol>
      <ACol span="1"></ACol>
      <ACol span="12">
        <div :style="{'font-weight':'bold','font-size':'3vw','color': 'black'}">
          <span>
            {{order.commodityName}}
          </span>
          <br>
          <span :style="{'font-size':'2vw','color': 'grey'}">
            {{order.subName}}
          </span>
        </div>
      </ACol>
      <ACol :style="{'font-size':'2vw','color': 'grey'}">
        ￥
        {{order.price}}
        *{{order.countCommodity}}
      </ACol>
    </ARow>
    <ARow justify="end" type="flex">
      <ACol :style="{'font-weight':'bold','font-size':'3vw','color': 'grey'}">
        总价：￥
        {{order.price*order.countCommodity}}
      </ACol>
    </ARow>
    <ARow justify="end" type="flex" v-if="place === 'OrderManage'">
      <ACol>
        <van-button :style="{height : '35px','margin-right':'5px','width':'25vw'}"
                    round type="info"
                    color="orange"
                    @click="toOrderDetail">查看详情</van-button>
      </ACol>
    </ARow>
  </div>

</template>

<script>
export default {
  //type: 商品状态 id：商品id place：标记这个商品卡片放在哪
  props : ['place','order'],
  name: "Card",
  data(){
    return{
      //按键类型
      buttonType : null
    }
  },
  methods: {
    toShop() {
      this.$router.push({ path: '/Shop' })
    },
    toOrderDetail() {
      this.$router.push({ path: '/OrderDetail' })
    },
  },

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
.goodsPicture {
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
}

</style>