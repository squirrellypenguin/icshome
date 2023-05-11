<template>
  <div class="">
   
     <div class="frontSign">
      <p class="title">Island Craft Shop</p>
      <p class="tagline">A Coopertative Community</p>
      <p class="place">Located in South Hero</p>
      <p class="oldest">The oldest <a style="color:#bf1b2c" href="/#/artists">artisan</a> cooperative in the Lake Champlain Region</p>
      </div>
    <div class="text-center">
   
      <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/doammukzv/image/upload/v1683635876/Products/PXL_20230426_171146454_a2loi4.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/doammukzv/image/upload/v1682701989/Products/Joyce1_wxu3gj.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/doammukzv/image/upload/v1682698686/Products/Davison_1_purivs.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/doammukzv/image/upload/v1682691417/Products/powers1_r35sis.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/doammukzv/image/upload/v1682931111/Little_Guys_1_twdlmj.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/doammukzv/image/upload/v1682682860/Art/Halstrom6_zdisrz.jpg"
        ></b-carousel-slide>
      </b-carousel>
            <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import message from "../../../dailyMessage.json";
export default {
  data() {
    return {
      users: message,    };
  },
};
</script>