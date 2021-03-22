<template>
  <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
  >
    <van-cell v-for="(item, index) in mails" :key="index">
      <ARow>
        <ARow>
          <ACol span="3">
            <a-avatar :src="item.oppSelfie"/>
          </ACol>
          <ACol :style="{'height':'5vw','font-size': '4vw','font-weight':'bold'}" span="21">
            {{ item.oppName }}
          </ACol>
          <ACol>
            {{ item["chatDate"][0] }}/{{ item["chatDate"][1] }}/{{ item["chatDate"][2] }}
            {{ item["chatDate"][3] }}:{{ item["chatDate"][4] }}:{{ item["chatDate"][5] }}
          </ACol>
        </ARow>
        <ARow style="font-size: 4vw; height: 5vw;">
          <span style="font-weight: bold; color: red;">
            {{ item["senderId"] !== $store.state.user.uid ? item.oppName : "我" }}:
          </span>
          <span>{{ item['newChatContent'] }}</span>
        </ARow>
        <ARow>
          <ACol push="21" span="3">
            <van-icon :badge="item['isRead'] ? 1 : ''" name="chat-o" @click="showPopup(index)"/>
          </ACol>
        </ARow>
        <ARow style="height : 5px"></ARow>
      </ARow>
      <van-popup v-model="show" style="height: 95%" closeable position="bottom">
        <SubMails :messages="subMailMessage"></SubMails>
      </van-popup>
    </van-cell>
  </van-list>
</template>

<script>
import SubMails from "@/components/subcomponents/SubMails";

export default {
  name: "Mails",
  data() {
    return {
      /* 是否显示POP-UP */
      show: false,
      /* 表示是否Loading */
      loading: null,
      /* 表示是否已经到底 */
      finished: false,
      /* 存储mails */
      mails: [],
      /* 子页面的数据传输 */
      subMailMessage: {
        /* 聊天对象名 */
        oppName: null,
        /* 聊天数据 */
        messages: [],
        /* 聊天对象的头像 */
        oppSelfie: null,
        /* 自己的头像 */
        mySelfie: null
      }
    }
  },
  methods: {
    async onLoad() {
      const { $ } = await import("@/util/ajax");
      const result = await $.get('/user/aboutChats');
      const mails = result.data.information;
      Array.prototype.push.apply(this.mails, mails);
      this.finished = true;
    },
    async showPopup(index) {
      const { $ } = await import("@/util/ajax");

      const oppUid = this.mails[index]['oppId'];
      const result = await $.get('/user/receiveChats', {
        params: {
          oppUid,
          oppType: this.mails[index]['oppType'],
          selfType: this.mails[index]['myType']
        }
      });
      this.subMailMessage.oppName = this.mails[index].oppName;
      this.subMailMessage.oppSelfie = this.mails[index].oppSelfie;
      this.subMailMessage.mySelfie = this.mails[index].mySelfie;
      this.subMailMessage.messages = result.data.information;
      this.show = true;
    },
  },
  components: {
    SubMails
  }
}
</script>

<style scoped>

</style>