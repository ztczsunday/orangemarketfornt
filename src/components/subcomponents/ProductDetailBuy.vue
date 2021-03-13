<template>
  <ARow class = "buy" :style="{'height':'15%'}">
    <ARow>
      <ACol>
        <div>
          <div></div>
          <VanCell is-link @click="showPopup" :style="{'border-radius' : '25px','font-size':'3vw'}">
            {{selectTip}}
          </VanCell>
          <van-sku
              v-model="show"
              :sku="sku"
              :goods="goods"
              :goods-id="1"
              :quota="0"
              :quota-used="0"
              :hide-stock="sku.hide_stock"
              @sku-selected="onSelectButton($event)"/>
        </div>
      </ACol>
    </ARow>
  </ARow>
</template>

<script>
export default {
name: "ProductDetailBuy",
  async mounted(){
    this.getInfo = require('@/assets/ProductDetailBuy.json');
    this.sku.tree[0].k = this.getInfo.typeName;
    this.sku.tree[0].v = this.getInfo.typeDetail;
    this.sku.list = this.getInfo.typeList;
    this.sku.price = this.getInfo.defaultPrice;
    this.sku.stock_num = this.getInfo.totalStock;
    this.goods.picture = this.getInfo.goodsPictureSmall;
  },
  data(){
    return{
      selectTip: "请选择：",
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: null, // skuKeyName：规格类目名称
            k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [],
            largeImageMode: false, //  是否展示大图模式
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [],
        price: null, // 默认价格（单位元）
        stock_num: 0, // 商品总库存
        none_sku: false, // 写死，必须选一种规格
        hide_stock: false // 显示库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: null

      },
      getInfo: {
        // 种类名
        typeName: null ,
        // 种类详细信息，格式见json文件
        typeDetail:[],
        //每种组合的价格、库存、id、规格值
        typeList:[],
        //默认价格，没选种类时写在价格栏上
        defaultPrice : null,
        // 总库存
        totalStock:null,
        // 商品缩略图
        goodsPictureSmall: null



      }
    };
  },
  methods :{
    onSelectButton(value){
      if(this.selectTip==='已选择：'+value.skuValue.name){
        this.selectTip = '请选择：'
      }
      else{
        this.selectTip = '已选择：'+value.skuValue.name
      }
    },
    showPopup() {
      this.show = true;
    },
  },
}
</script>

<style scoped>

</style>