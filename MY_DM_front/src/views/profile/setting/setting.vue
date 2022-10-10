<template>
  <div class="setting">
    <div class="title">
      <div class="title_img" @click="goProfile"></div>
      <div>设置</div>
      <!-- <div class="save">保存</div> -->
    </div>
    <div class="content">
      <!-- <div class="subitem user_avatar">头像</div> -->

      <div class="subitem user_name" @click="show_true_name">修改昵称</div>

      <!-- <div class="subitem user_sex">绑定手机号</div> -->

      <div class="subitem receiving_address" @click="show_true_password">
        修改密码
      </div>

      <div class="subitem bind_mobile_number" @click="logout">用户注销</div>

      <div class="logout" @click="toLogin">退出登录</div>
    </div>
    <div class="background" v-show="this.show_update_name">
      <div class="update_information">
        <div class="input">
          <label for="new_name">新昵称：</label>
          <input
            v-model="new_name"
            type="text"
            id="new_name"
            placeholder="用户名"
          />
        </div>
        <div class="choice">
          <div class="update" @click="update_name_setting">修改</div>
          <div class="cancel" @click="show_false_name">取消</div>
        </div>
      </div>
    </div>
    <div class="background" v-show="this.show_update_password">
      <div class="update_information">
        <div class="input">
          <label for="new_password">新密码：</label>
          <input
            v-model="new_password"
            type="password"
            id="new_password"
            placeholder="密码"
          />
        </div>
        <div class="choice">
          <div class="update" @click="update_password_setting">修改</div>
          <div class="cancel" @click="show_false_password">取消</div>
        </div>
      </div>
    </div>
    <div class="attention" v-show="this.show">{{ result }}</div>
  </div>
</template>

<script>
import localCache from '@/common/cache'
import { delete_user } from '@/network/lyTest/logout'
import { update_name } from 'network/lyTest/update_name'
import { update_password } from 'network/lyTest/update_password'

export default {
  name: 'Setting',
  data() {
    return {
      show_update_name: false,
      show_update_password: false,
      new_name: '',
      new_password: '',
      show: false,
      result: ''
    }
  },
  methods: {
    goProfile() {
      this.$router.push('/profile')
    },
    show_true_name() {
      this.show_update_name = true
    },
    show_false_name() {
      this.show_update_name = false
      this.new_name = ''
    },
    show_true_password() {
      this.show_update_password = true
    },
    show_false_password() {
      this.show_update_password = false
      this.new_password = ''
    },
    update_name_setting() {
      this.show_update_name = false
      update_name(this.$store.state.user_id, this.new_name).then((res) => {
        this.result = res.message
        console.log(this.result)
        this.new_name = ''
        let that = this
        that.show = true

        setTimeout(function () {
          that.show = false
        }, 1000)
      })
    },
    update_password_setting() {
      this.show_update_password = false
      update_password(this.$store.state.user_id, this.new_password).then(
        (res) => {
          this.new_password = ''
          this.result = res.message
          let that = this
          that.show = true

          setTimeout(function () {
            that.show = false
          }, 1000)
        }
      )
    },
    logout() {
      delete_user(localCache.getCache('user_id'))
      localCache.clearCache()
      this.$router.push({
        path: '/login/'
      })
    },
    toLogin() {
      localCache.clearCache()
      this.$router.push({
        path: '/login/'
      })
    }
  }
}
</script>

<style scoped>
.setting {
  width: 100vw;
  height: 100vh;
  font-size: 16px;
  background-color: #eeeeee;
  /* position: relative; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.title {
  width: 100vw;
  height: 44px;
  background-color: #0086f6;
  /* font-size: 20px; */
  font-weight: bolder;
  color: #fff;
  text-align: center;
  line-height: 44px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
}

.title_img {
  width: 25px;
  height: 25px;
  background-image: url(assets/img/profile/返回.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 9px;
  /* left: 10px; */
  left: 3.5%;
}

.save {
  position: absolute;
  top: 0%;
  right: 17px;
}

.content {
  margin-top: 44px;
  border: 1px solid transparent;
}

.subitem {
  /* width: 328px; */
  width: 93%;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);
  /* font-size: 18px; */
  text-align: center;
  line-height: 50px;
  /* position: absolute; */
  margin: 0 auto;
  margin-top: 10px;
}

/* .user_avatar {
  top: 11%;
}

.user_name {
  top: 24.5%;
}

.user_sex {
  top: 38%;
}

.receiving_address {
  top: 51.5%;
}

.bind_mobile_number {
  top: 65%;
} */

.logout {
  /* width: 328px; */
  width: 93%;
  height: 40px;
  background-color: #0086f6;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  /* font-size: 18px; */
  font-weight: bolder;
  color: #fff;
  text-align: center;
  line-height: 40px;
  /* position: absolute;
  top: 80%; */
  margin: 0 auto;
  margin-top: 10px;
}

.background {
  width: 100%;
  height: 85.5%;
  background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 44px;
  border: 1px solid transparent;
}

.update_information {
  width: 90%;
  height: 110px;
  color: black;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 0 auto;
  margin-top: 50%;
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
  width: 75%;
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

.update {
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

.attention {
  width: 200px;

  height: 30px;
  background-color: gray;
  border-radius: 5px;
  color: #eee;
  text-align: center;
  line-height: 30px;
  margin: 0 auto;
  /* position: absolute; */
  /* top: 50%; */
  /* z-index: 1000; */
}
</style>
