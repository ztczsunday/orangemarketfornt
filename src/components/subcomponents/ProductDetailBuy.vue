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
  data(){
    return{
      selectTip: "请选择：",
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: '1', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3772363621,630429607&fm=26&gp=0.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3772363621,630429607&fm=26&gp=0.jpg", // 用于预览显示的规格类目图片
              },
              {
                id: '2',
                name: '蓝色',
                imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3196440353,380056155&fm=26&gp=0.jpg",
                previewImgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3196440353,380056155&fm=26&gp=0.jpg",
              }
            ],
            largeImageMode: false, //  是否展示大图模式
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2260, // skuId
            s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3196440353,380056155&fm=26&gp=0.jpg"

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
  }
}
</script>

<style scoped>

</style>