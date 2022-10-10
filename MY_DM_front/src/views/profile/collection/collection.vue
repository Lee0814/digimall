<template>
  <div class="collection">
    <div class="title">
      <div class="title_img" @click="goprofile"></div>
      <div>收藏</div>
    </div>
    <scroll class="content">
      <collection-list :collection="collection" />
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/scroll'
import collectionList from './children/collection_list.vue'
import { get_collection } from 'network/lyTest/get_collection'
import { cancel_the_collection } from 'network/lyTest/cancel_the_collection'

export default {
  name: 'Collection',
  components: {
    Scroll,
    collectionList
  },
  data() {
    return {
      collection: []
    }
  },
  activated() {
    get_collection(this.$store.state.user_id).then((res) => {
      this.collection = res
    })
  },
  methods: {
    goprofile() {
      this.$router.push('/profile')
    },
    cancel_the_collection(present_id) {
      cancel_the_collection(present_id).then((res) => {
        console.log(present_id)
        console.log('取消收藏')
        get_collection(this.$store.state.user_id).then((res) => {
          this.collection = res
        })
      })
    }
  },
  provide() {
    return {
      cancel_the_collection: this.cancel_the_collection
    }
  }
}
</script>

<style scoped>
.collection {
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
}

.title {
  width: 100%;
  height: 44px;
  background-color: #0086f6;
  font-size: 16px;
  font-weight: bolder;
  color: #fff;
  text-align: center;
  line-height: 44px;
  position: fixed;
  z-index: 1;
}

.title_img {
  width: 25px;
  height: 25px;
  background-image: url(assets/img/profile/返回.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 9px;
  left: 3.5%;
}

.content {
  width: 100%;
  height: calc(100vh - 44px - 49px);
  position: absolute;
  top: 44px;
  overflow: hidden;
}
</style>
