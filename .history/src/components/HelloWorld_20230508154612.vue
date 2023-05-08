<template>
  <div class="hello">
   
     <div class="frontSign">
      <p class="title">Island Craft Shop</p>
      <p class="tagline">A Coopertative Community</p>
      <p class="place">Located in South Hero</p>
      <p class="oldest">The oldest <a style="color:#bf1b2c" href="/artisans#/artists">artisan</a> cooperative in the Lake Champlain Region</p>
      </div>
    <div class="text-center">
   
      <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/duvzhauq9/image/upload/v1682544835/Copy_of_IMG_4701_qbxqvt.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/duvzhauq9/image/upload/v1682419123/craftshop/IMG_4706_c7tfwe.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://res.cloudinary.com/duvzhauq9/image/upload/v1682419122/craftshop/IMG_4708_dmr4tu.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
