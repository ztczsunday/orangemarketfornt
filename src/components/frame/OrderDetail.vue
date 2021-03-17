<template>
  <div>
    <VanSteps :active="active">
      <VanStep>买家下单</VanStep>
      <VanStep>买家付款</VanStep>
      <VanStep>卖家发货</VanStep>
      <VanStep>买家收货</VanStep>
      <VanStep>交易完成</VanStep>
    </VanSteps>
    <OrderCard :type="information.itemName" :id="information.orderId" :place="place">
      <span slot="shopName">{{information.shopName}}</span>
      <img slot="goodsPicture"
           class="goodsPicture"
           :src="information.subIcon">
      <span slot="amount">{{information.countCommodity}}</span>
      <span slot="goodsName">{{information.commodityName}}</span>
      <span slot="goodsSKU">{{information.subName}}</span>
      <span slot="price">{{information.price}}</span>
      <span slot="totalPrice">{{information.price * information.countCommodity}}</span>
      <span slot="status">订单{{information.itemName}}</span>
    </OrderCard>
    <ARow class="messageBlock">
      <ARow :style="{'font-size' : '4vw','font-weight': 'bold'}">
        订单详情：
      </ARow>
      <ARow :style="{'font-size' : '3vw'}">
        <ACol span="8">
          订单号：
        </ACol>
        <ACol>
          {{information.orderId}}
        </ACol>
      </ARow>
      <ARow :style="{'font-size' : '3vw'}">
        <ACol span="8">
          邮寄地址：
        </ACol>
        <ACol>
          {{information.addressDetails}}
        </ACol>
      </ARow>
      <ARow :style="{'font-size' : '3vw'}" v-for="(item,i) in information.statusDate" :key="i">
        <ARow v-if="item.id === 1">
          <ACol span="8">
            创建时间：
          </ACol>
          <ACol>
            {{item.date}}
          </ACol>
        </ARow>
        <ARow v-if="item.id === 2">
          <ACol span="8">
            付款时间：
          </ACol>
          <ACol>
            {{item.date}}
          </ACol>
        </ARow>
        <ARow v-if="item.id === 3">
          <ACol span="8">
            发货时间：
          </ACol>
          <ACol>
            {{item.date}}
          </ACol>
        </ARow>
        <ARow v-if="item.id === 4">
          <ACol span="8">
            完成时间：
          </ACol>
          <ACol>
            {{item.date}}
          </ACol>
        </ARow>
        <ARow v-if="item.id === 5">
          <ACol span="8">
            评价时间：
          </ACol>
          <ACol>
            {{item.date}}
          </ACol>
        </ARow>
        <ARow v-if="item.id === 6">
          <ACol span="8">
            取消时间：
          </ACol>
          <ACol>
            {{item.date}}
          </ACol>
        </ARow>
      </ARow>
    </ARow>
    <ARow :style="{'margin' : '10px'}" v-if="active === 1">
      <ARow :style="{'font-size' : '4vw','font-weight':'bold'}">
        商品已下单，请尽快付款
      </ARow>
      <VanButton class="button" color="#3737e3">
        立即付款
      </VanButton>
    </ARow>
    <ARow :style="{'margin' : '10px'}" v-if="active === 2">
      <ARow :style="{'font-size' : '4vw','font-weight':'bold'}">
        请耐心等待卖家发货<br>
        一直收不到商品？戳戳商家试试
      </ARow>
      <VanButton class="button" color="#3737e3">
        联系卖家
      </VanButton>
    </ARow>
    <ARow :style="{'margin' : '10px'}" v-if="active === 3">
      <ARow :style="{'font-size' : '4vw','font-weight':'bold'}">
        请确认收到商品，再确认收货，切勿提前收货
      </ARow>
      <VanButton class="button" color="#3737e3">
        确认收货
      </VanButton>
    </ARow>
    <ARow :style="{'margin' : '10px'}" v-if="information.itemName === '待评价'">
      <ARow :style="{'font-size' : '4vw','font-weight':'bold'}">
        可以跟更多的人分享购物体验哦
      </ARow>
      <VanField
          v-model="message"
          rows="2"
          autosize
          label="评论"
          type="textarea"
          maxlength="100"
          placeholder="请输入留言"
          show-word-limit
      />
      <VanButton :style="{width : '40%','margin-left':'9%'}" color="orange" round type="info">
        属实拉胯
      </VanButton>
      <div :style="{width : '2%',display :'inline-block'}"></div>
      <VanButton :style="{width : '40%'}" color="#00CCFF" round type="info">
        特别好评
      </VanButton>
    </ARow>


  </div>
</template>

<script>
import OrderCard from "@/components/subcomponents/OrderCard";

export default {
  name: "OrderDetail",
  data() {
    return {
      //进度条激活位置
      active: 1,
      //商品卡片放在订单详情里
      place:"OrderDetail",
      //评论区内容
      message: "",
      information: {
        //订单号
        orderId :114514,
        //店名
        shopName : "先辈红茶铺",
        //商品数目
        countCommodity : 2,
        //商品名
        commodityName : " 昏睡红茶急速昏睡效力持久仙贝自用多种口味68包包邮 ",
        //种类名
        subName : "精品",
        //单价
        price : 1145141919810,
        //订单状态
        itemName : "待评价",
        //商品图标
        subIcon :"https://imgsa.baidu.com/forum/w%3D580/sign=53e4d0b8bede9c82a665f9875c8080d2/a6bd62a98226cffcdfab8b33b4014a90f403eaa2.jpg",
        //状态变化日期表，id对应状态
        statusDate : [
          {id : 1, date : "2020.1.2"},
          {id : 2, date : "2020.1.3"},
          {id : 3, date : "2020.1.4"},
          {id : 4, date : "2020.1.5"},
          {id : 5, date : "2020.1.6"},
          {id : 6, date : "2020.1.7"}
        ],
        //收货地址
        addressDetails : "北京市朝阳区下北泽大学医学院",
      }
    };
  },
  components: { OrderCard },
  mounted() {
    if(this.information.itemName === "待付款"){
      this.active = 1;
    }
    else if(this.information.itemName === "待发货"){
      this.active = 2;
    }
    else if(this.information.itemName === "待收货"){
      this.active = 3;
    }
    else{
      this.active = 4;
    }
  }
}
</script>

<style scoped>
.goodsPicture {
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
}
.messageBlock{
  margin-top:5px;
  background-color: #ffffff;
  padding-right: 10vw;
  padding-left: 10vw;
  padding-bottom: 5px;
}
.button{
  width : 100%;
}
</style>