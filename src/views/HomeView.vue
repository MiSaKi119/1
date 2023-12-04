<template>
  <div id="Login">
    <div id="box">
      <h1>iHRM 后台登录系统</h1>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.mobile" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" prefix-icon="el-icon-lock" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
      <div id="title">
        仅用于IT培训教学使用， 为保障您的个人信息安全， 请勿向平台录入任何个人敏感信息 （如手机号、身份证号等）！
      </div>
    </div>
  </div>
</template>

<script>
import { setCookie, getCookie } from "../util/js-cookie"
export default {
  data() {
    return {
      form: {
        mobile: "13800000002",
        password: "888itcast.CN764%..."
      }
    }
  },
  methods: {
    onSubmit() {
      this.$http.post(process.env.VUE_APP_IDENT + "/sys/login", this.form).then((res) => {
        if (res.code == 10000) {
          setCookie(res.data)
          console.log(getCookie())
          this.$router.push("/about")
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#Login {
  width: 100%;
  height: 100vh;
  background: url(../assets/Login-Bg.jpg) 50% 50% no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

#box {
  width: 520px;
  min-height: 400px;
  padding: 35px 35px 15px;
}

#box h1 {
  color: white;
  font-weight: normal;
  font-size: 50px;
  margin: 0 auto 40px;
  text-align: center;
}

#title {
  line-height: 20px;
  font-size: 14px;
  color: #fff;
}

.el-button {
  width: 100%;
  background: #407ffe;
  height: 64px;
  line-height: 32px;
  margin-bottom: 20px;
  font-size: 24px;
}
</style>
