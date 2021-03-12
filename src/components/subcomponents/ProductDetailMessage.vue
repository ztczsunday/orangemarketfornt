<template>
  <ARow :style="{'height' : '80vw'}">
    <ARow type = "flex" justify="center">
      <ACol span="24">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in info.picture" :key="index">
            <img v-lazy="image" class="productPicture" />
          </van-swipe-item>
        </van-swipe>
      </ACol>
    </ARow>
    <ARow :style="{'height' : '10px'}"></ARow>
    <ARow class = "buy">
      <ARow>
        <ARow ></ARow>
        <ACol span="3" push="1">
          <div class = "moneyBlock">
            ￥
          </div>
        </ACol>
        <ACol span="10">
          <div class = "priceBlock">
            {{info.price}}
          </div>
        </ACol>
      </ARow>
      <ARow>
        <ACol span="12">
          <ACol span="12" :style="{'text-align':'right'}" class="grades">
            库存：
          </ACol>
          <ACol span="12" :style="{'border-right':'1px solid grey','text-align': 'center'}" class="grades">
            {{info.stock}}
          </ACol>
        </ACol>
        <ACol span="12">
          <ACol span="12" :style="{'text-align': 'center'}" class="grades">
            好评率：
          </ACol>
          <ACol span="12" :style="{'text-align': 'left'}" class="grades">
            {{info.PraiseRate}}
          </ACol>
        </ACol>
      </ARow>
      <ARow type = "flex" justify="center">
        <ACol span="22">
          <div class = "introduce">
            {{info.name}}
          </div>
        </ACol>
      </ARow>
      <ARow :style="{'height' : '3vw'}"></ARow>
    </ARow>
    <ARow :style="{'height' : '10px'}"></ARow>
    <ProductDetailBuy></ProductDetailBuy>
  </ARow>
</template>

<script>
import ProductDetailBuy from "@/components/subcomponents/ProductDetailBuy";
export default {
  name: "ProductDetailMessage",
  components: {ProductDetailBuy},
  async mounted() {
    this.info = require('@/assets/GoodsData.json');
    console.log(this.info)
    // const {$} = await import('@/util/ajax');
    // await $.get('assets/GoodsData.json');
  },
  data() {
    return {
      info: {
        name: null,
        price: null,
        picture: [],
        seller: null,
        stock: null,
        PraiseRate: null,
        tags: []
      },
    };
  },

  methods: {
  }
}
</script>

<style scoped>
.buy{
  background-color: white;
  border-radius: 25px;
  width: 95%;
  margin: auto;
}
.moneyBlock{
  color: red;
  height: 12vw;
  display:table-cell;
  vertical-align:bottom;
  font-size: 5vw;
}
.priceBlock{
  color:red;
  height: 10vw;
  display:table-cell;
  vertical-align:bottom;
  font-size: 10vw;
}
.introduce{
  font-weight: bold;
  font-size: 6vw;
  color: black;
}
.grades{
  font-size: 5vw;
  color:grey;
}
.productPicture{
  height:60vw;
  width: 100vw;
}
</style>
<!--<a-radio-button v-for="(item,key) in info.tags" :key="key" :value="info.tags[key]" class="choice">-->
<!--{{item}}-->
<!--</a-radio-button>-->
<!--                @buy-clicked="onBuyClicked"-->
<!--               @add-cart="onAddCartClicked"-->