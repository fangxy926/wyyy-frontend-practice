<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="login-title">快速登录</h1>
      <van-form ref="loginForm" :model="loginForm" :rules="rules" label-width="80px" @submit="onSubmit">
        <van-field v-model="loginForm.username" name="username" label="用户名" placeholder="请输入用户名" required
          :rules="[{ required: true, message: '用户名必填！' }]" />
        <van-field v-model="loginForm.password" name="password" label="密码" placeholder="请输入密码" type="password" required
          :rules="[{ required: true, message: '密码必填！' }]" />
        <div class="login-btn">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "用户名必填！" }],
        password: [{ required: true, message: "密码必填！" }],
      },
      loading: false,
    };
  },
  methods: {
    onSubmit() {
      const valid = this.$refs.loginForm.validate();
      if (valid) {
        this.loading = true;
        // 在这里编写登录逻辑

        // todo 用户信息保存在session中
        this.$router.push("/")
        this.loading = false
      }
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100%;
}

.login-box {
  display: flex;
  flex-direction: column;
}

.login-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: left;
}

.login-btn {
  margin-top: 35px;
  width: 100%;
}

.login-box .van-cell {
  border-bottom: 0.5px solid #999;
}
</style>