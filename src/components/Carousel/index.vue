<template>
  <div>
    <div class="swiper-container" id="mySwiper" ref="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="carousel in carousels"
          :key="carousel.id"
        >
          <img :src="carousel.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Carousel",
  props: {
    carousels: {
      type: Array,
      required: true,
    },
  },
  methods: {
    //   封装成一个方法方便复用
    initSwiper() {
      //   用this保存，便于判断防止多次new
      // 为了防止类名冲突，new Swiper的元素获取应该使用this.$refs.swiper
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  watch: {
    //   要发请求得到数据，所以要监视
    carousels() {
      if (this.swiper) return;
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  mounted() {
    //   刚开始的数据是传递过来的，直接挂载
    if (!this.carousels.length) return;
    this.initSwiper();
  },
};
</script>

<style lang="less" scoped>
</style>
