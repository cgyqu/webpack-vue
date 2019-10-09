
import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import createRouter from './components/Route.js'
import App from './App.vue'


Vue.use(VueRouter);
let router = createRouter();

(async function init() {
  var app = new Vue({
    router,
    render: h => h(App)
  });
  app.$mount('#app')
})()


function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn)
    console.log(ipl)
    var iplHtml = document.createElement('div');
    iplHtml.innerHTML = ipl;
    element.appendChild(iplHtml);

    return element;
}




