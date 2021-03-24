<template>
  <van-tabs v-model="active" sticky offset-top="46px">
    <van-tab title="全部订单">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <ARow  v-for="(item,i) in list" :key="i">
          <OrderCard :place="'ShopManage'" :order="item"
                     :value="item.countCommodity"
                     @postgood="postGoods(i)"></OrderCard>
        </ARow>
      </van-list>
    </van-tab>
    <van-tab title="待发货订单">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <ARow  v-for="(item,i) in list" :key="i">
          <OrderCard :place="'ShopManage'" :order="item"
                     :value="item.countCommodity"
                     @postgood="postGoods(i)"
                     v-if="item.itemName ==='待发货'"></OrderCard>
        </ARow>
      </van-list>
    </van-tab>
    <van-tab title="上架商品管理">
      <van-list
          v-model="goodloading"
          :finished="goodfinished"
          finished-text="没有更多了"
          @load="onLoadGood"
      >
        <ARow v-for="(item, index) in goodList" :key="index">
          <VanCard :thumb="item.mainIcon"
                   :title="item.commodityName"
                   style="font-size: 15px; background: white; border: 1px solid #ebedf0;"
                   v-if="item.commodityStatus"
          >
            <template #tags>
              <van-tag plain type="danger">好评数：{{item.praiseCommentCount}}</van-tag>
              <van-tag plain type="primary">评论数：{{item.commentCount}}</van-tag>
            </template>
            <template #footer>
              <van-button @click="putOffShelf(index)">下架</van-button>
              <van-button @click="getSub(index)">修改库存</van-button>
            </template>
          </VanCard>
        </ARow>
        <van-button icon="plus" type="primary" round style="position: fixed; bottom: 20px; margin-left: 80%"
                    @click="toBuild"/>
      </van-list>
    </van-tab>
    <VanTab title="下架商品">
      <van-list
          v-model="goodloading"
          :finished="goodfinished"
          finished-text="没有更多了"
          @load="onLoadGood"
      >
        <ARow v-for="(item, index) in goodList" :key="index">
          <VanCard :thumb="item.mainIcon"
                   :title="item.commodityName"
                   style="font-size: 15px; background: white; border: 1px solid #ebedf0;"
                   v-if="!item.commodityStatus"
          >
            <template #tags>
              <van-tag plain type="danger">好评数：{{item.praiseCommentCount}}</van-tag>
              <van-tag plain type="primary">评论数：{{item.commentCount}}</van-tag>
            </template>
            <template #footer>
              <van-button @click="putOnShelf(index)">上架</van-button>
            </template>
          </VanCard>
        </ARow>
        <van-button icon="plus" type="primary" round style="position: fixed; bottom: 20px; margin-left: 80%"
                    @click="toBuild"/>
      </van-list>
    </VanTab>
    <van-popup v-model="show" position="bottom" style="height:70%" closeable>
      <div style="margin: 10px;padding:10px;font-weight: bold">
        修改库存
      </div>
      <inputStock :subList="this.subCommodity"/>
    </van-popup>
  </van-tabs>

</template>

<script>
import OrderCard from "@/components/subcomponents/OrderCard";
import inputStock from "@/components/subcomponents/inputStock";
import {Toast} from "vant";
export default {
  components:{OrderCard,inputStock},
  name: "ShopManage",
  methods:{
    async onLoad(){
      const { $ } = await import("@/util/ajax");
      this.page++;
      const result = await $.get(`/shopOrder?page=${this.page}&pageSize=${10}`);
      this.loading = false;
      console.log(result)
      if(this.page*10 >= result.data.information.total){
        this.finished = true;
      }
      if(result.data.information.records.length !== 0){
        for(let i = 0; i <result.data.information.records.length; i++){
          this.list.push(result.data.information.records[i]);
        }
      }
    },
    async onLoadGood(){
      const { $ } = await import("@/util/ajax");
      this.goodpage++;
      const result = await $.get(`/shop?page=${this.goodpage}&pageSize=${10}`);
      this.goodloading = false;
      console.log(result);
      if(this.page*10 >= result.data.information.total){
        this.goodfinished = true;
      }
      if(result.data.information.records.length !== 0){
        for(let i = 0; i <result.data.information.records.length; i++){
          this.goodList.push(result.data.information.records[i]);
        }
      }
    },
    async postGoods(i){
      const { $ } = await import("@/util/ajax");
      const formData = new FormData;
      formData.append("orderId",this.list[i].orderId);
      formData.append("recordId",3);
      const result = await  $.put("/orderStateflow",formData);
      if(result.data.success){
        Toast("发货成功！")
        await this.reload();
      }
      else{
        Toast("确认收货失败")
      }
    },
    async putOffShelf(i){
      const { $ } = await import("@/util/ajax");
      const formData = new FormData;
      formData.append("cid",this.goodList[i].cid);
      formData.append("commodityStatus",false);
      const result = await  $.put("/commodity/updateStatus",formData);
      console.log(result.data.success);
      if(result.data.success){
        Toast("下架成功");
        this.reload();
      }else{
        Toast("下架失败");
      }

    },
    async putOnShelf(i){
      const { $ } = await import("@/util/ajax");
      const formData = new FormData;
      formData.append("cid",this.goodList[i].cid);
      formData.append("commodityStatus",true);
      const result = await  $.put("/commodity/updateStatus",formData);
      if(result.data.success){
        Toast("上架成功");
        this.reload();
      }else{
        Toast("上架失败");
      }

    },
    toBuild(){
      this.$router.push({
        name:'新建商品',
      })
    },
    reload(){
      this.list = [];
      this.goodList = [];
      this.loading = false;
      this.finished = false;
      this.page=0;
      this.goodpage = 0;
      this.onLoad();
      this.onLoadGood();
    },
    async getSub(i){
      const { $ } = await import("@/util/ajax");
      const result = await $.get(`/commodity?commodityId=${this.goodList[i].cid}`);
      this.subCommodity = result.data.information.subCommodity;
      this.show = true;
    }
  },
data(){
  return{
    show : false,
    active : 0,
    list: [],
    loading: false,
    finished: false,
    page : 0,
    goodList:[],
    goodpage : 0,
    goodloading : false,
    goodfinished: false,
    subCommodity: [],

  }
}
}
</script>

<style scoped>

</style>