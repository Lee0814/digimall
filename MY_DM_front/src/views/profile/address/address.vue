<template>
  <div class="address">
    <div class="title">
      <div class="title_img" @click="goprofile"></div>
      <div>地址</div>
    </div>
    <scroll class="content">
      <address-list :address="address" />
      <div class="add_address" @click="show_true">+添加地址</div>
      <!-- <div class="add_address" @click="update_default">+添加地址</div> -->
    </scroll>
    <div class="background" v-show="this.show">
      <div class="add_address_detail">
        <div class="input">
          <label for="recipient">收件人：</label>
          <input v-model="name" type="text" id="recipient" placeholder="名字" />
        </div>
        <div class="input">
          <label for="receipt_number">收件号码：</label>
          <input
            v-model="phone"
            type="text"
            id="receipt_number"
            placeholder="手机号"
          />
        </div>
        <div class="input">
          <label for="receiving_address">收件地址：</label>
          <input
            v-model="detail"
            type="text"
            id="receiving_address"
            placeholder="省、市、区、街道"
          />
        </div>
        <div class="choice">
          <div class="add" @click="add_address">添加</div>
          <div class="cancel" @click="show_false">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addressList from './children/address_list.vue'
import Scroll from 'components/common/scroll/scroll'
import { add_address } from 'network/lyTest/add_address'
import { get_address } from 'network/lyTest/get_address'
import { update_default } from 'network/lyTest/update_default'
import localCache from '@/common/cache'
import { delete_the_address } from 'network/lyTest/delete_the_address'

export default {
  name: 'Address',
  components: {
    addressList,
    Scroll
  },
  data() {
    return {
      show: false,
      name: '',
      phone: '',
      detail: '',
      default: 0,
      new_address: null,
      address: [],
      default_checked_id: 0,
      // present_click_id: 0,
      default_checked: 1,
      default_unchecked: 0
    }
  },
  activated() {
    get_address(this.$store.state.user_id).then((res) => {
      this.address = res
      console.log(this.address)
    })
  },
  methods: {
    goprofile() {
      this.$router.push('/profile')
    },
    show_true() {
      this.show = true
    },
    show_false() {
      this.show = false
      this.name = ''
      this.phone = ''
      this.detail = ''
    },
    add_address() {
      this.show = false
      this.new_address = {
        user_id: this.$store.state.user_id,
        name: this.name,
        phone: this.phone,
        detail: this.detail,
        default: this.default
      }

      add_address(
        this.$store.state.user_id,
        this.name,
        this.phone,
        this.detail,
        this.default
      ).then((res) => {
        this.name = ''
        this.phone = ''
        this.detail = ''
        get_address(this.$store.state.user_id).then((res) => {
          console.log('重新请求成功')
          this.address = res
          console.log(this.address)
        })
      })
    },
    update_default_grandfather(present_id) {
      // console.log(this.address)
      for (var item of this.address) {
        if (item.default == 1) {
          this.default_checked_id = item.id
          // console.log(this.default_checked_id)
        }
      }
      update_default(this.default_checked_id, this.default_unchecked).then(
        (res) => {
          console.log('修改成功')
          // this.address = res
          // console.log(this.address)
          // console.log(this.default_checked_id)
          update_default(present_id, this.default_checked).then((res) => {
            console.log('修改成功')
            get_address(this.$store.state.user_id).then((res) => {
              this.address = res
            })
          })
        }
      )
    },
    delete_the_address(present_id) {
      console.log(present_id)
      delete_the_address(present_id).then((res) => {
        console.log('删除成功')
        get_address(this.$store.state.user_id).then((res) => {
          this.address = res
        })
      })
    }
  },
  provide() {
    return {
      update_default_grandfather: this.update_default_grandfather,
      delete_the_address: this.delete_the_address
    }
  }
}
</script>

<style scoped>
.address {
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
  /* display: none; */
  width: 100%;
  height: calc(100vh - 44px - 49px);
  position: absolute;
  top: 44px;
  overflow: hidden;
}

.add_address {
  /* width: 350px; */
  width: 92.5%;
  height: 50px;
  background-color: #fff;
  color: black;
  border-radius: 5px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);
  font-size: 15px;
  text-align: center;
  line-height: 50px;
  margin: 0 auto;
  margin-top: 10px;
}

.background {
  width: 100%;
  height: 85.5%;
  background-color: rgba(0, 0, 0, 0.35);
  position: relative;
  border: 1px solid transparent;
}

.add_address_detail {
  width: 90%;
  height: 220px;
  color: black;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 0 auto;
  margin-top: 40%;
  border: 1px solid white;
}

.input {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 13px;
}

input {
  width: 70%;
  height: 40px;
  font-size: 15px;
  text-indent: 10px;
  border: none;
  border-radius: 5px;
  outline: medium;
  background-color: #eeeeee;
}

.choice {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 13px;
}

.add {
  width: 40%;
  height: 30px;
  color: #fff;
  background-color: #0086f6;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}

.cancel {
  width: 40%;
  height: 30px;
  color: #fff;
  background-color: #0086f6;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
</style>
