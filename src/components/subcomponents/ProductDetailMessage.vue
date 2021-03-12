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
        <ACol span="9" push="14" class="grades">
          好评率：{{info.PraiseRate}}
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
    <ARow :style="{'height' : '10px'}"></ARow>
    <ARow class="buy">
      <CommentsBlock></CommentsBlock>
    </ARow>
    <ARow :style="{'height' : '10px'}"></ARow>
    <ARow class="buy">
      <ShopBlock></ShopBlock>
    </ARow>
    <ARow>
      <div :style="{'width':'100%','text-align':'center'}">
        -----商品详情-----
      </div>
      <div>
        <img src="https://imgsa.baidu.com/forum/w%3D580/sign=53e4d0b8bede9c82a665f9875c8080d2/a6bd62a98226cffcdfab8b33b4014a90f403eaa2.jpg" class="detailPicture">
      </div>
      <div>
        <img src="https://imgsa.baidu.com/forum/w%3D580/sign=ed67d4d38835e5dd902ca5d746c7a7f5/18dc8a18972bd407975fe77c76899e510db3098a.jpg" class="detailPicture">
      </div>
    </ARow>
    <ARow :style="{height : '50px'}"> </ARow>
  </ARow>
</template>

<script>
import ProductDetailBuy from "@/components/subcomponents/ProductDetailBuy";
import CommentsBlock from "@/components/subcomponents/CommentsBlock";
import ShopBlock from "@/components/subcomponents/ShopBlock";
export default {
  name: "ProductDetailMessage",
  components: {ShopBlock, CommentsBlock,ProductDetailBuy},
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
  margin-top: 5vw;
  font-size: 5vw;

}
.priceBlock{
  color:red;
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
  text-align: center;
  display: inline-flex;
}
.productPicture{
  height:60vw;
  width: 100vw;
}
.detailPicture{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;

}
</style>
<!--<a-radio-button v-for="(item,key) in info.tags" :key="key" :value="info.tags[key]" class="choice">-->
<!--{{item}}-->
<!--</a-radio-button>-->
<!--                @buy-clicked="onBuyClicked"-->
<!--               @add-cart="onAddCartClicked"-->