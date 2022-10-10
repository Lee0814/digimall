<template>
  <div class="submit">
    <div class="button"><button @click="submit">提交订单</button></div>
    <div class="total">
      合计￥<span>{{ $store.state.total_price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartBottomBar',
  data() {
    return {}
  },

  methods: {
    submit() {
      this.$emit('submit')
    }
  },
  components: {}
}
</script>

<style scoped>
.submit {
  display: flex;
  flex-direction: row-reverse;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 1000 !important;
  background-color: #fff;
  line-height: 50px;
  width: 100%;
}
.total {
  font-size: 12px;
  padding-right: 10px;
}
.total span {
  color: var(--color-high-text);
  font-size: 20px;
}
.button {
  padding-right: 10px;
}
.button button {
  font-size: 14px;
  border: none;
  padding: 8px;
  color: white;
  border-radius: 10px;
  background-color: var(--color-high-text);
}
</style>
