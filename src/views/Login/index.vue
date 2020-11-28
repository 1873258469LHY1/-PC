<template>
  <div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import { reqLogin } from "@api/user";
export default {
  name: "Login",
  methods: {
    handleLogin() {
      reqLogin("13700000000", "111111")
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>