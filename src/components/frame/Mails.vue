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
        </ARow>
        <ARow :style="{'font-size':'4vw','height':'5vw'}">
          {{ item.newChatContent }}
        </ARow>
        <ARow>
          <ACol push="21" span="3">
            <van-icon :badge="item.isRead ? 1 : ''" name="chat-o" @click="showPopup(index)"/>
          </ACol>
        </ARow>
        <ARow style="height : 5px"></ARow>
      </ARow>
      <van-popup v-model="show" style="height: 95%" closeable position="bottom">
        <SubMails :opp-name="subMailMessage.oppName"></SubMails>
      </van-popup>
    </van-cell>
  </van-list>
</template>

<script>
import SubMails from "@/components/subcomponents/SubMails";

class Mail {
  constructor(chatDate, senderId, senderType, receiverId, receiverType, isRead, newChatContent, oppSelfie, oppName) {
    this.chatDate = chatDate;
    this.senderId = senderId;
    this.senderType = senderType;
    this.receiverId = receiverId;
    this.receiverType = receiverType;
    this.isRead = isRead;
    this.newChatContent = newChatContent;
    this.oppSelfie = oppSelfie;
    this.oppName = oppName;
  }
}

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
      /*  */
      subMailMessage: {
        oppName: null
      }
    }
  },
  methods: {
    async onLoad() {
      const { $ } = await import("@/util/ajax");
      const result = await $.get('/user/aboutChats');
      const mails = result.data.information;
      console.log(mails);
      Array.prototype.push.apply(this.mails, mails.map(
          record => new Mail(
              record.chatDate,
              record.senderId,
              record.senderType,
              record.receiverId,
              record.receiverType,
              record.isRead,
              record.newChatContent,
              record.oppSelfie,
              record.oppName
          )
      ));
      this.finished = true;
    },
    showPopup(index) {
      this.show = true;
      this.subMailMessage = this.mails[index];
    },
  },
  components: {
    SubMails
  }
}
</script>

<style scoped>

</style>