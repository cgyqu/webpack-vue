<template>
  <div class='chat' style='float:right;'>
    <span>客服:</span>
    <span v-if="message.type == 'text'"> {{ message.content }} </span>
    <span v-else><img :src="message.content" /></span>
  </div>
</template>

<script>
  export default {
    name: "right ",
    props: ['message']
  };
</script>

