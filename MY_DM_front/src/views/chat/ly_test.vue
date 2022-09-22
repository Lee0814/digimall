<template>
  <div class="test">
    <scroll class="scroll">
      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </scroll>
    <div class="add"><button @click="add">添加</button></div>
  </div>
</template>

<script>
import scroll from '@/components/common/scroll/scroll.vue'

export default {
  name: 'lytest',
  components: {
    scroll
  },
  data: () => {
    return {
      list_data: 0,
      list: []
    }
  },
  methods: {
    add() {
      this.list_data++
      this.list.push(this.list_data)
    }
  }
}
</script>
<style>
.test {
  width: 100%;
  position: absolute;
  top: 20px;
  bottom: 50px;
  background-color: #bfa;
}
.scroll {
  position: absolute;
  bottom: 79px;
  background-color: #fff;
  overflow: hidden;
  height: 400px;
}
.add {
  position: fixed;
  height: 30px;
  width: 100%;
  bottom: 49px;
}
</style>
