<template>
  <div class="footer">
    <div class="inner">
      <div class="footer-menu">
        <dl>
          <dt>购物指南</dt>
          <dd>购物流程</dd>
          <dd>会员介绍</dd>
          <dd>生活旅行/团购</dd>
          <dd>常见问题</dd>
          <dd>购物指南</dd>
        </dl>
        <dl>
          <dt>配送方式</dt>
          <dd>上门自提</dd>
          <dd>211限时达</dd>
          <dd>配送服务查询</dd>
          <dd>配送费收取标准</dd>
          <dd>海外配送</dd>
        </dl>
        <dl>
          <dt>支付方式</dt>
          <dd>货到付款</dd>
          <dd>在线支付</dd>
          <dd>分期付款</dd>
          <dd>邮局汇款</dd>
          <dd>公司转账</dd>
        </dl>
        <dl>
          <dt>售后服务</dt>
          <dd>售后政策</dd>
          <dd>价格保护</dd>
          <dd>退款说明</dd>
          <dd>返修/退换货</dd>
          <dd>取消订单</dd>
        </dl>
        <dl>
          <dt>特色服务</dt>
          <dd>夺宝岛</dd>
          <dd>DIY装机</dd>
          <dd>延保服务</dd>
          <dd>尚品汇E卡</dd>
          <dd>尚品汇通信</dd>
        </dl>
        <dl>
          <dt>帮助中心</dt>
          <dd><img src="./images/wx_cz.jpg" alt="" /></dd>
        </dl>
      </div>

      <div class="footer-nav">
        <ul>
          <li><a href="###">关于我们</a></li>
          <li><a href="###">联系我们</a></li>
          <li><a href="###">关于我们</a></li>
          <li><a href="###">商家入驻</a></li>
          <li><a href="###">营销中心</a></li>
          <li><a href="###">友情链接</a></li>
          <li><a href="###">关于我们</a></li>
          <li><a href="###">营销中心</a></li>
          <li><a href="###">友情链接</a></li>
          <li><a href="###">关于我们</a></li>
        </ul>
        <p>地址：北京市昌平区宏福科技园综合楼6层</p>
        <p>京ICP备19006430号</p>
      </div>
    </div>
  </div>
</template> 

 <script>
export default {
  name: "Footer",
};
</script> 

 <style  lang="less" scoped>
.footer {
  width: 100%;
  background-color: #eaeaea;
  .inner {
    width: 1200px;
    margin: 0 auto;
    .footer-menu {
      padding: 20px 20px 20px 40px;
      display: flex;
      justify-content: space-around;
      dl {
        dt {
          font-size: 14px;
          font-weight: bold;
        }
        dd {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
    .footer-nav {
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      ul {
        display: flex;
        li {
          font-size: 12px;
          border-left: 1px solid #333;
          padding: 0 10px;
          &:first-child{
              border: 0;
          }
        }
      }
        p{
            margin-top:10px;
        }
    }
  }
}
</style>