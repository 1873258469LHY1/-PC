<template>
  <div>
    <!-- <Carousel /> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="skuImage in skuInfo.skuImageList"
          :key="skuImage.id"
        >
          <img :src="skuImage.imgUrl" alt="" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
// import Carousel from "@comps/Carousel";
import { mapGetters } from "vuex";
import Swiper from "swiper";
export default {
  name: "ImageList",
  components: {
    //   Carousel
  },
  computed: {
    ...mapGetters(["skuInfo"]),
  },
  mounted() {
    if (this.imageListSwiper) return;
    this.imageListSwiper = new Swiper(".swiper-container", {
      slidesPerView: 5,
      spaceBetween: 0,
      slidesPerGroup: 5,
      loop: false,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-wrapper {
      margin-left: 10px;
    .swiper-slide {
      width: 56px;
      height: 56px;
    //   margin: 0 5px;
    //   padding: 2px;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        &:hover {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>