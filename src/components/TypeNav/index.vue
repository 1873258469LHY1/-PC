<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="isSearchShowNav = false">
      <h2 class="all" @mouseenter="isSearchShowNav = true">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="navDown">
        <div class="sort" v-show="isHomeShowNav || isSearchShowNav">
          <div class="all-sort-list2" @click="handleGetCategory">
            <div
              class="item bo"
              v-for="category in categorys"
              :key="category.categoryId"
            >
              <h3>
                <a
                  :data-categoryName="category.categoryName"
                  :data-categoryId="category.categoryId"
                  :data-grade="1"
                  >{{ category.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="Child in category.categoryChild"
                    :key="Child.categoryId"
                  >
                    <dt>
                      <a
                        :data-categoryName="Child.categoryName"
                        :data-categoryId="Child.categoryId"
                        :data-grade="2"
                        >{{ Child.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="grandChild in Child.categoryChild"
                        :key="grandChild.categoryId"
                      >
                        <a
                          :data-categoryName="grandChild.categoryName"
                          :data-categoryId="grandChild.categoryId"
                          :data-grade="3"
                          >{{ grandChild.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypeNav",
  data() {
    return {
      isHomeShowNav: this.$route.path === "/",
      isSearchShowNav: false,
    };
  },
  computed: {
    ...mapState({
      categorys: (state) => state.home.categorys,
    }),
  },
  methods: {
    ...mapActions(["getTypeNav"]),
    //   事件委托获取categorys
    handleGetCategory(e) {
      // 解构赋值获取数据传递到事件委托中
      const { categoryname, categoryid, grade } = e.target.dataset;
      // 防止点击空白处也会触发事件委托
      if (!categoryname) return;
      // 点击搜索的时候改变TypeNav的状态
      this.isSearchShowNav = false;
      // 编程式导航点击跳转，判断有没有传递params，query必传不用判断，因为点击时会自动获取
      const location = {
        name: "search",
        query: {
          categoryName: categoryname,
          [`category${grade}Id`]: categoryid,
        },
      };
      // 判断有没有传递params
      const { searchText } = this.$route.params;
      if (searchText) {
        location.params = { searchText };
      }

      this.$router.push(location);
    },
  },
  mounted() {
    if (this.categorys.length) return;
    this.getTypeNav();
  },
};
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      &.navDown-enter-active {
        transition: height 0.5s;
        overflow: hidden;
      }
      &.navDown-enter {
        height: 0px;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
