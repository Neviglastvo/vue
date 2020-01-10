<template>
  <Layout>

    <div class="index-page">
      <div class="index-page__row">
        <div class="index-page__title">Choose game to play with comfort (60FPS FHD):</div>
        <div class="index-page__row-container">

          <div class="list-slider ">

            <template>
              <swiper :options="swiperOption" class="list-slider swiper-box">

                <swiper-slide class="list-slider__item swiper-item" v-for="item in 10" :key="item">
                  <g-image alt="Example image" src="~/favicon.png" width="135" class="list-slider__img"/>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <div class="swiper-scrollbar"></div>
              </swiper>
            </template>

          </div>

        </div>
      </div>

      <div class="index-page__row">



      </div>

      <div class="index-page__row">
        <div class="index-page__col"></div>
        <div class="index-page__col"></div>
      </div>

    </div>

    <hr />

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <font-awesome :icon="['fab', 'github']"/>
    <font-awesome :icon="['fab', 'twitter']"/>

    <pin class="logo" />


  </Layout>
</template>

<script>

// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

import pin from '~/assets/icons/pinPaper.svg';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    // swiper,
    // swiperSlide,
    pin
  },
  // data() {
  //   return {
  //     swiperOption: {
  //       direction: 'horizontal',
  //       slidesPerView: 5,
  //       spaceBetween: 0,
  //       mousewheel: true,
  //       pagination: {
  //         el: '.swiper-pagination',
  //         type: 'progressbar',
  //         clickable: true
  //       },
  //       navigation: {
  //         nextEl: '.swiper-button-next',
  //         prevEl: '.swiper-button-prev',
  //       },
  //       scrollbar: {
  //         el: '.swiper-scrollbar',
  //         draggable: true,
  //       },
  //     }
  //   }
  // }
}

</script>


