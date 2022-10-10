<template>
  <div class="content">
    <img class="img" :src="itemInfo.image_url" alt="" />
    <div class="introduce">
      {{ itemInfo.title }}
    </div>
    <div class="price">￥{{ itemInfo.price }}</div>
    <div class="cancel_the_collection" @click="cancel_collection">取消收藏</div>
  </div>
</template>

<script>
// import { cancel_the_collection } from 'network/lyTest/cancel_the_collection'

export default {
  name: 'Collection_List_Item',
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default() {
        return 0
      }
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  inject: ['cancel_the_collection'],
  methods: {
    // cancel_the_collection() {
    //   cancel_the_collection(this.itemInfo.id).then((res) => {
    //     console.log(this.itemInfo.id)
    //     console.log('取消收藏')
    //   })
    // }
    cancel_collection() {
      this.cancel_the_collection(this.itemInfo.id)
    }
  }
}
</script>

<style scoped>
.content {
  /* width: 350px; */
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);
  font-size: 13px;
  color: black;
  position: relative;
  /* margin: 10px 0; */
  margin-top: 10px;
}

.img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
}

.introduce {
  width: 230px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  top: 15%;
  left: 30%;
}

.price {
  /* color: red; */
  color: #0086f6;
  font-size: 15px;
  position: absolute;
  top: 50%;
  left: 30%;
}

.cancel_the_collection {
  position: absolute;
  top: 76%;
  right: 4%;
}
</style>
