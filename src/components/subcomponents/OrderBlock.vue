<template>
<div>
<OrderCard :place="'SetOrder'" :order="order"/>
<div class="card">
  <ARow type="flex" justify="space-between">
    <ACol style="padding-left: 16px">
      选择数量：
    </ACol>
    <ARow>
      <van-stepper v-model="value" />
    </ARow>
  </ARow>
  <van-cell is-link @click="showPopup">选择送货方式</van-cell>
  <van-popup v-model="show" position="bottom" closeable style="height: 70%">送货选择</van-popup>
  <van-field
      v-model="message"
      rows="2"
      autosize
      label="留言"
      type="textarea"
      maxlength="200"
      placeholder="请输入留言"
      show-word-limit
  />
</div>
</div>
</template>

<script>
import OrderCard from "@/components/subcomponents/OrderCard";
export default {
  components: {OrderCard},
  name: "orderBlock",
  data(){
    return{
      message: "",
      value : 1,
      show: false,
      order : {
        "shopName": "仙贝红茶铺",
        "itemName" : "待付款",
        "subIcon":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3196440353,380056155&fm=26&gp=0.jpg",
        "commodityName":"昏睡红茶急速昏睡效力持久仙贝自用多种口味68包包邮",
        "subName" : "肥宅红茶",
        "price" : 12,
        "countCommodity" : 12
      }
    }
  },
  methods:{
    showPopup(){
      this.show = true;
    }
  }
}
</script>

<style scoped>
.card {
  background-color: white;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  border-radius: 25px;
  padding: 10px;

}
</style>