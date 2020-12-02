<template>
  <div class="header">
    <div class="header-inner">
      <div class="header-top">
        <div class="header-login">
          <p>尚品汇欢迎您！</p>
          <p>
            请&nbsp;<router-link to="/login">登录</router-link> |
            <router-link to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="header-nav">
          <div class="header-nav-list">
            <a href="###">我的订单</a>
            <a href="###">我的购物车</a>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <h1 class="logo">
        <router-link to="/"><img src="./images/logo.png" alt="" /></router-link>
      </h1>
      <div class="search">
        <input type="text" v-model="searchText" />
        <button class="header-btn" @click="search">搜索</button>
      </div>
    </div>
  </div>
</template> 

 <script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      // 判断params参数存不存在（因为搜索框可能为空）
      const { searchText } = this;
      //方法一：拼串形式
      //   const params = searchText ? `/${searchText}` : "";
      //   const location = "/search" + params;
      //   this.$router.push(location);
      //方法二：具名路由
      const location = {
        name: "search",
      };
      if (searchText) {
        location.params = { searchText };
      }
      // 判断query参数存不存在
      const { categoryName } = this.$route.query;

      if (categoryName) {
        location.query = this.$route.query;
      }
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
  },
  mounted() {
    //点击链接，清空搜索框
    this.$bus.$on("clearKeyword", () => {
      this.searchText = "";
    });
  },
};
</script> 

 <style lang='less' scoped>
.header {
  width: 100%;
  .header-inner {
    width: 100%;
    background-color: #eaeaea;
  }
}

.header-top {
  width: 1200px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-login {
    display: flex;
    font-size: 12px;
    p a {
      text-decoration: none;
      color: #000;
    }
  }
  .header-nav {
    .header-nav-list a {
      font-size: 12px;
      text-decoration: none;
      color: #000;
      padding: 0 10px;
      border-left: 1px solid #b3aeae;
      &:first-child {
        border: 0;
      }
    }
  }
}
.header-bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 img {
    width: 175px;
    height: 56px;
    margin: 25px 45px;
  }
  .search {
    display: flex;
    align-items: center;
  }
  .search input {
    width: 490px;
    height: 32px;
    border: 2px solid #ea4a36;
    padding: 0 4px;
    box-sizing: border-box;
    outline: none;
  }
  .search .header-btn {
    width: 68px;
    height: 32px;
    font-size: 12px;
    background-color: #ea4a36;
    color: white;
    border: none;
  }
}
</style>