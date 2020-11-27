<template>
  <div class="goods-nav">
    <div class="inner">
      <h3>全部商品分类</h3>
      <ul>
        <li><a href="">服装城</a></li>
        <li><a href="">美妆馆</a></li>
        <li><a href="">尚品汇超市</a></li>
        <li><a href="">全球购</a></li>
        <li><a href="">闪购</a></li>
        <li><a href="">团购</a></li>
        <li><a href="">有趣</a></li>
        <li><a href="">秒杀</a></li>
      </ul>
    </div>
  </div>
</template>

       
<script>
export default {
  name: "Home",
};
</script>

<style lang="less" scoped>
.goods-nav {
  width: 100%;
  border-bottom: 2px solid #e1251b;

  .inner {
    width: 1200px;
    height: 45px;
    margin: 0 auto;
    display: flex;
    h3 {
      width: 210px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      font-size: 14px;
      background-color: #e1251b;
      color: #fff;
    }
    ul {
      display: flex;
      li {
        font-size: 16px;
        margin: 0 22px;
        line-height: 45px;
        text-align: center;
      }
    }
  }
}
</style>
