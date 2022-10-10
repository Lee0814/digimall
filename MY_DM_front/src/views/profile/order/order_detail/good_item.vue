<template>
  <div class="good-container" @click="godetail">
    <div class="good-img">
      <img :src="itemInfo.image_url" alt="" />
    </div>
    <div class="good-detail">
      <p class="title">
        {{ itemInfo.title }}
      </p>
      <p class="desc">
        {{ itemInfo.desc }}
      </p>
      <div class="price">
        <div class="good-attention"><span>七天无理由退货</span></div>
        <div class="count">{{ itemInfo.price }}</div>
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
    godetail() {
      this.$router.push('/detail/' + this.itemInfo.good_id)
    }
  }
}
</script>

<style scoped>
.good-container {
  display: flex;
  padding: 10px;
  background-color: #eee;
  border-radius: 10px;
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
.good-detail .title {
  padding: 5px 0;
  font-size: 16px;
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.good-detail .desc {
  padding: 5px 0;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.good-detail .price {
  padding-top: 15px;
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.good-detail .count {
  padding-right: 10px;
}
.good-attention {
  font-size: 10px;
}
.good-attention span {
  color: #0086f6;
  border: 1px solid #0086f6;
  padding: 1px;
}
</style>
