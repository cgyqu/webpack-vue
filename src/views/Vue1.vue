<template>
</template>
<script>
import printMe from "../print.js";
import _ from "lodash";
import "../style.css";
import ipl from "../../test.tpl.html";
export default {
  name: "vue1",
  data() {
    return {};
  },
  methods: {
    component() {
      var element = document.createElement("div");
      var btn = document.createElement("button");
      // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
      element.innerHTML = _.join(["Hello", "webpack"], " ");
      element.classList.add("hello");

      btn.innerHTML = "Click me and check the console!";
      btn.onclick = printMe;
      element.appendChild(btn);
      console.log(ipl);
      var iplHtml = document.createElement("div");
      iplHtml.innerHTML = ipl;
      element.appendChild(iplHtml);
      document.body.appendChild(element);
    }
  },
  mounted() {
    this.component();
  }
};
</script>