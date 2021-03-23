<template>
  <div>
    <VanSteps :active="active">
      <VanStep>买家下单</VanStep>
      <VanStep>买家付款</VanStep>
      <VanStep>卖家发货</VanStep>
      <VanStep>买家收货</VanStep>
      <VanStep>交易完成</VanStep>
    </VanSteps>
    <OrderCard
        :place="'OrderDetail'"
        :order="order"
        :value="order.countCommodity"
        v-if="flag">
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
      flag : false,
      //进度条激活位置
      active: 1,
      //商品卡片放在订单详情里
      place:"OrderDetail",
      //评论区内容
      message: "",
      //传给子组件的订单对象
      order : null,
      information: {
        //订单号
        orderId : Number,
        //店名
        shopName : String,
        //商品数目
        countCommodity : Number,
        //商品名
        commodityName : String,
        //种类名
        subName : String,
        //单价
        price : Number,
        //订单状态
        itemName : String,
        //商品图标
        subIcon : String,
        //状态变化日期表，id对应状态
        statusDate : [],
        //收货地址
        addressDetails : String,
      }
    };
  },
  components: { OrderCard },
  async created(){
    const {$} = await import('@/util/ajax');
    const result = await $.get(`/orderDetail?orderId=${1}`);
    this.order = result.data.information.order;
    this.information.itemName = result.data.information.state[0].recordId;
    this.information.addressDetails = result.data.information.order.addressDetails;
    this.information.subIcon = result.data.information.order.subIcon;
    this.information.orderId = result.data.information.order.orderId;
    this.information.shopName = result.data.information.order.shopName;
    this.information.countCommodity =result.data.information.order.countCommodity;
    this.information.commodityName = result.data.information.order.commodityName;
    this.information.subName =result.data.information.order.subName;
    this.information.price = result.data.information.order.price;
    for(let i = 0; i < result.data.information.state.length; i++){
      this.information.statusDate.unshift(
          {
            "id" : result.data.information.state[i].recordId,
            "date": result.data.information.state[i].statusDate[0] + "." +
                result.data.information.state[i].statusDate[1] + "."+
                result.data.information.state[i].statusDate[2] + " " +
                result.data.information.state[i].statusDate[3] + ":"+
                result.data.information.state[i].statusDate[4] + ":" +
                result.data.information.state[i].statusDate[5]
          }
      )
    }
    this.active = result.data.information.state[0].recordId;
    this.flag = true;
  },
}
</script>

<style scoped>
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