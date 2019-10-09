<template>
  <div>
    <div class='chat' style='float:left;'>
      <span>用户:</span>
      <span v-if="message.type == 'text'"> {{ message.content }} </span>
      <span v-else><img style="max-height:45px" :src="message.content" /></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "left ",
    props: ["message"]
  };
</script>

