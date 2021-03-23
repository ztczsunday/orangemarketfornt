<template>
<div>
<OrderCard :place="'SetOrder'" :order="order" :value="value"/>
<div class="card">
  <ARow type="flex" justify="space-between">
    <ACol style="padding-left: 16px">
      选择数量：
    </ACol>
    <ARow>
      <van-stepper v-model="value" />
    </ARow>
  </ARow>
  <van-cell is-link @click="showPopup">{{postNow.logisticsName}}</van-cell>
  <van-popup v-model="show" position="bottom" closeable style="height: 70%" round>
    <div style="margin: 10px;padding-left:10px;font-weight: bold">
      {{postNow.logisticsName}}
    </div>
    <div style="margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    border:1px solid #96c2f1;
    background:#eff7ff"
    v-for="(item,index) in postList" :key="index">
      <VanCell :title="'物流'+ item.logisticsId"  size="large" :label= "item.logisticsName" @click="choosePost(index)"/>
    </div>
  </van-popup>
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
<van-submit-bar :price="value*order.countCommodity*100" button-text="提交订单" @submit="onSubmit" />
</div>
</template>

<script>
import OrderCard from "@/components/subcomponents/OrderCard";
import {Toast} from "vant";
export default {
  components: {OrderCard},
  name: "orderBlock",
  data(){
    return{
      message: "",
      value : 1,
      show: false,
      postNow: {
        "logisticsName":"请选择物流",
        "logisticsId": Number,
      },
      order : {
        "shopName": "仙贝红茶铺",
        "itemName" : "待付款",
        "subIcon":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3196440353,380056155&fm=26&gp=0.jpg",
        "commodityName":"昏睡红茶急速昏睡效力持久仙贝自用多种口味68包包邮",
        "subName" : "肥宅红茶",
        "price" : 12,
        "countCommodity" : 12,
        "subId": 1,
        "cid": 1,
        "shopId":2,
      },
      postList:[],
    }
  },
  methods:{
    onSubmit(){
      if(this.postNow.logisticsName === "请选择物流"){
        Toast("请选择物流");
      }
      else{
        this.$emit('postorder',this.order,this.postNow,this.message);
      }
    },
    showPopup(){
      this.show = true;
    },
    choosePost(index){
      this.postNow = this.postList[index];
      this.show = false;
      Toast("物流变更")
    }
  },
  async created() {
    this.value = this.order.countCommodity;
    const {$} = await import('@/util/ajax');
    const result = await $.get(`/logistic`);
    this.postList = result.data.information;
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