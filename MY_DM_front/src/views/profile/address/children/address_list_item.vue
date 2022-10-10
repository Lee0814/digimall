<template>
  <div class="content">
    <div class="consignee">{{ itemInfo.name }}</div>
    <div class="phone">{{ itemInfo.phone }}</div>
    <div class="receiving_address">
      {{ itemInfo.detail }}
    </div>
    <div class="revise">修改</div>
    <div class="line"></div>
    <div class="checkbox">
      <!-- <input type="checkbox" id="default" checked /> -->
      <input
        :checked="itemInfo.default"
        type="checkbox"
        id="default"
        @click="update_default_grandchild"
      />
      <!-- <input :checked="itemInfo.default" type="checkbox" id="default" /> -->
      <label class="label" for="default">默认地址</label>
    </div>
    <div class="delete" @click="delete_address">删除</div>
  </div>
</template>

<script>
// import { delete_the_address } from 'network/lyTest/delete_the_address'

export default {
  name: 'address_list_item',
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
  data() {
    return {
      present_id: this.itemInfo.id
    }
  },
  inject: ['update_default_grandfather', 'delete_the_address'],
  methods: {
    // get_present_id() {
    //   this.present_id = this.itemInfo.id
    //   console.log(this.present_id)
    // }
    update_default_grandchild() {
      // this.update_default(this.present_id)
      // this.$parent.$parent.update_default()
      this.update_default_grandfather(this.present_id)
    },
    // delete_the_address() {
    //   delete_the_address(this.itemInfo.id).then((res) => {
    //     console.log('删除成功')
    //     console.log(this.itemInfo)

    //   })
    // }
    delete_address() {
      this.delete_the_address(this.itemInfo.id)
    }
  }
  // computed:{
  // itemInfo(){

  //   }
  // }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);
  font-size: 13px;
  color: black;
  position: relative;
  margin-top: 10px;
}

.consignee {
  color: black;
  font-size: 18px;
  position: absolute;
  top: 10%;
  left: 4%;
}

.phone {
  color: black;
  font-size: 15px;
  position: absolute;
  top: 11%;
  left: 21%;
}

.receiving_address {
  color: black;
  font-size: 15px;
  position: absolute;
  top: 40%;
  left: 4%;
}

.revise {
  font-size: 15px;
  position: absolute;
  top: 12%;
  right: 4%;
}

.line {
  width: 100%;
  height: 0.5px;
  /* background-color: gray; */
  background-color: #0086f6;
  position: absolute;
  top: 70%;
}

.checkbox {
  display: flex;
  align-items: center;
  position: absolute;
  top: 76%;
  left: 4%;
}

input[type='checkbox'] {
  width: 15px;
  height: 15px;
  margin-top: 0.5px;
  position: relative;
}

input[type='checkbox']::after {
  position: absolute;
  top: 0;
  color: #000;
  width: 15px;
  height: 15px;
  display: inline-block;
  visibility: visible;
  padding-left: 0px;
  text-align: center;
  content: ' ';
  border-radius: 3px;
}

input[type='checkbox']:checked::after {
  content: '✓';
  color: #fff;
  font-size: 10px;
  line-height: 15px;
  background-color: #0086f6;
}

.delete {
  position: absolute;
  top: 76%;
  right: 4%;
}
</style>
