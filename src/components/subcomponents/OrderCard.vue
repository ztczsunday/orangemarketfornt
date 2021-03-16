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
    <ARow justify="end" type="flex" v-if="place === 'OrderManage'">
      <ACol>
        <van-button :style="{height : '35px','margin-right':'5px','width':'25vw'}"
                    round type="info"
                    color="orange"
                    @click="toOrderDetail">查看详情</van-button>
        <van-button v-if="type != null"
                    :style="{height : '35px','width':'25vw'}"
                    round type="info"
                    color="orange"
                    @click="toOderFunction" >{{buttonType}}</van-button>
      </ACol>
    </ARow>
  </div>

</template>

<script>
export default {
  props : ['type','id','place'],
  name: "Card",
  data(){
    return{
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
    toOderFunction(){
      if(this.type === '待发货'){
        this.$router.push({ path: '/Mails' })
      }
      else if(this.type === "待付款"){
        this.$router.push({ path: '/OrderDetail' })
      }
      else if(this.type === "待收货"){
        this.$router.push({ path: '/OrderDetail' })
      }
      else if(this.type === "待评价"){
        this.$router.push({ path: '/OrderDetail' })
      }
    },
  },
  mounted() {
    if(this.type === '待发货'){
       this.buttonType = "催促发货"
    }
    else if(this.type === "待付款"){
      this.buttonType = "立即付款"
    }
    else if(this.type === "待收货"){
      this.buttonType = "立即收货"
    }
    else if(this.type === "待评价"){
      this.buttonType = "立即评价"
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