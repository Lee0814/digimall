<template>
  <div class="purchase-good" @click="todetail">
    <div class="good-img">
      <img :src="itemInfo.image_url" alt="" />
    </div>
    <div class="good-detail">
      <p class="title">{{ itemInfo.title }}</p>
      <p class="desc">
        {{ itemInfo.desc }}
      </p>
      <div class="price">
        <div>{{ itemInfo.price }}</div>
        <div class="count">x1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    todetail() {
      console.log('跳转')
      this.$router.push('/detail/' + this.itemInfo.good_id)
    }
  }
}
</script>

<style scoped>
.purchase-good {
  display: flex;
}
.good-img {
  width: 35%;
}
.good-img img {
  height: 90px;
  width: 90px;
}
.good-detail {
  padding-left: 10px;
  width: 70%;
}
.good-detail .price,
.title,
.desc {
  width: 100%;
  padding: 5px 0;
}
.good-detail .title {
  font-size: 16px;
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.good-detail .desc {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.good-detail .price {
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.good-detail .count {
  padding-right: 10px;
}
</style>
