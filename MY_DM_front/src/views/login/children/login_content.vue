<template>
  <div class="login_content">
    <div class="user">
      <div class="user_img"></div>
      <input
        id="user"
        type="text"
        v-model="user_name"
        placeholder="请输入用户名"
      />
    </div>
    <div class="password">
      <div class="password_img"></div>
      <input
        id="password"
        type="password"
        v-model="user_password"
        placeholder="请输入密码"
      />
    </div>
    <div class="password_choice">
      <div class="remember_password">
        <input v-model="isRemenber" type="checkbox" id="remember_password" />
        <label for="remember_password">记住密码</label>
      </div>
      <div class="forget_password">忘记密码？</div>
    </div>
    <div class="login_button" @click="user_login">登录</div>
    <div class="flxed" v-show="this.if_data">登录成功</div>
    <!-- <div class="flxed" v-show="this.if_data">登录{{ this.message }}</div> -->
  </div>
</template>

<script>
import { lyuser_login } from 'network/lyTest/login'
import localCache from '@/common/cache'
export default {
  name: 'login_content',
  data() {
    return {
      if_data: false,
      user_name: '',
      user_password: '',
      message: '',
      isRemenber: false
    }
  },
  methods: {
    user_login() {
      //存入localstorage
      if (this.isRemenber) {
        localCache.setCache('username', this.user_name)
        localCache.setCache('password', this.user_password)
      } else {
        localCache.clearCache()
      }

      lyuser_login(this.user_name, this.user_password).then((res) => {
        console.log(res)
        const token = res.token
        localCache.setCache('token', token)
        localCache.setCache('user_id', res.userInfo.id)
        this.$store.state.UserName = res.userInfo.username
        this.$store.state.user_id = res.userInfo.id
        this.$router.push({
          path: '/profile/'
        })
      })

      let that = this
      that.if_data = true
      setTimeout(function () {
        that.if_data = false
      }, 1000)
    }
  },
  created() {
    // 判断 localCache.getCache("name")
    if (localCache.getCache('username')) {
      this.user_name = localCache.getCache('username')
      this.user_password = localCache.getCache('password')
      // this.user_name = localCache.getCache("name");
      // this.user_password = localCache.getCache("password");
      this.isRemenber = true
    }
  }
}
</script>

<style scoped>
.login_content {
  width: 304px;
  height: 281px;
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: #91c5f0;
  /* background-color: #eee; */
  border-radius: 21px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  position: absolute;
  /* top: 11%; */
  /* top: -5%; */
  top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user {
  width: 262px;
  height: 39px;
  position: absolute;
  top: 16%;
}

.user_img {
  width: 32px;
  height: 38px;
  background-image: url(assets/img/login/用户.svg);
  background-size: cover;
  background-repeat: no-repeat;
  float: left;
}

input {
  /* width: 70%;
  height: 40px; */
  font-size: 15px;
  text-indent: 10px;
  border: none;
  border-radius: 5px;
  outline: medium;
  /* background-color: #eeeeee; */
}

#user {
  width: 211px;
  height: 39px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  float: right;
}

.password {
  width: 262px;
  height: 39px;
  position: absolute;
  top: 36%;
}

.password_img {
  width: 34px;
  height: 38px;
  background-image: url(assets/img/login/密码.svg);
  background-size: cover;
  background-repeat: no-repeat;
  float: left;
}

#password {
  width: 211px;
  height: 39px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  float: right;
}

.password_choice {
  width: 246px;
  height: 17px;
  position: absolute;
  top: 57.6%;
}

.remember_password {
  color: black;
  font-size: 13px;
  float: left;
  display: flex;
  align-items: center;
}

.forget_password {
  color: black;
  font-size: 13px;
  float: right;
}

.login_button {
  width: 262px;
  height: 55px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  color: black;
  font-size: 18px;
  font-weight: 1000;
  text-align: center;
  line-height: 55px;
  position: absolute;
  top: 70%;
}

.flxed {
  width: 80px;
  height: 30px;
  background-color: gray;
  border-radius: 5px;
  color: #eee;
  text-align: center;
  line-height: 30px;
  position: absolute;
  top: 50%;
  z-index: 1000;
}
</style>
