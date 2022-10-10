<template>
  <div class="address_list">
    <address-list-item
      class="item"
      v-for="(item, index) in address"
      :index="index"
      :key="index"
      :item-info="item"
      :list="address"
    />
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/scroll'
import addressListItem from './address_list_item.vue'
import { get_address } from 'network/lyTest/get_address'
import localCache from '@/common/cache'

export default {
  name: 'Address',
  components: {
    Scroll,
    addressListItem
  },
  props: {
    address: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.address_list {
  width: 93%;
  background-color: #eee;
  border: 1px solid transparent;
  margin: 0 auto;
}
</style>
