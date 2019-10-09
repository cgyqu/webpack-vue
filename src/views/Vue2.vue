<template>
    <div class="vue2">
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>商品名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" (item,index) in store" v-bind:key="item.id">
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td>￥{{item.price}}</td>
                    <td><input
                            style="width: 50px"
                            type="number"
                            min="0"
                            v-model.number="item.count"
                        /></td>
                    <td><button
                            v-on:click="remove(item.id)"
                            onclick="alert(item)"
                        >移除</button></td>
                </tr>
            </tbody>
        </table>
        <span> 总价：￥{{total}}</span>
        <br />
        <span> 总价：￥{{getPrice()}}</span>
        <br />
        <span> 总价：￥{{totalPrice}}</span>
    </div>
</template>

<script>
export default {
  name: "vue2",
  data() {
    return {
      store: [
        { id: 1, name: "iphone8", price: 5099, count: 0 },
        { id: 2, name: "iphonexs", price: 8699, count: 0 },
        { id: 3, name: "iphonexr", price: 6499, count: 0 }
      ]
    };
  },
  methods: {
    remove(id) {
      this.store.find(x => x.id == id).count = 0;
    },
    getPrice() {
      var price = 0;
      for (var item of this.store) {
        price += item.price * item.count;
      }
      return price;
    }
  },
  watch: {
    //当store方式变化的才执行，内部元素变化监听不到
    store: function() {
      this.totalPrice = 0;
      for (var item of this.store) {
        this.totalPrice += item.price * item.count;
      }
    }
  },
  computed: {
    //计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：
    total: {
      get: function() {
        var price = 0;
        for (var item of this.store) {
          price += item.price * item.count;
        }
        return price;
      }
      // set: function(price) {
      //   // console.log(price);
      // }
    },
    //两种写法
    totalPrice: function() {
      var price = 0;
      for (var item of this.store) {
        price += item.price * item.count;
      }
      return price;
    }
  }
};
</script>

<style>
table {
  border-collapse: collapse;
}
table,
th,
td {
  border: 1px solid black;
}
th {
  width: 100px;
}
</style>