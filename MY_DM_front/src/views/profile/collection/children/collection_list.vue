<template>
  <div class="collection_list">
    <collection-list-item
      class="item"
      v-for="(item, index) in collection"
      :index="index"
      :key="index"
      :item-info="item"
      :list="collection"
    />
  </div>
</template>

<script>
import collectionListItem from './collection_list_item.vue'

export default {
  name: 'Collection_List',
  components: {
    collectionListItem
  },
  props: {
    collection: {
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
.collection_list {
  /* width: 350px; */
  width: 93%;
  background-color: #eee;
  border: 1px solid transparent;
  margin: 0 auto;
}
</style>
