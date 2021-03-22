<template>
  <div>
    <ARow style="margin-top: 10px">
      <ARow>
        <ACol style="height:5vw; font-size: 4vw; font-weight: bold;" push="1" span="24">
          {{ messages.oppName }}
        </ACol>
      </ARow>
      <ARow :style="{'height':'10px'}"></ARow>
      <VanCell v-for="(item, index) in messages.messages" :key="index">
        <ARow>
          <ACol span="3">
            <a-avatar :src="item['senderId'] === $store.state.user.uid ? messages.oppSelfie : messages.mySelfie"/>
          </ACol>
          <ACol style="height: 5vw; font-size: 4vw; font-weight: bold" span="21">
            {{ item["senderId"] === $store.state.user.uid ? messages.oppName : "我" }}
          </ACol>
          <ACol>
            {{ item["chatDate"][0] }}/{{ item["chatDate"][1] }}/{{ item["chatDate"][2] }}
            {{ item["chatDate"][3] }}:{{ item["chatDate"][4] }}:{{ item["chatDate"][5] }}
          </ACol>
        </ARow>
        <ARow>
          <ACol style="font-size: 4vw; height:5vw" push="1">
            {{ item["chatDetails"] }}
          </ACol>
        </ARow>
      </VanCell>
    </ARow>
  </div>
</template>

<script>
export default {
  name: "SubComments",
  props: {
    messages: Object
  }
}
</script>
<style scoped>
</style>