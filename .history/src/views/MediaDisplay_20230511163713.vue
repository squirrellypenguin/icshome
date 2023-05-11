<template>

<div class="container">
  <div class="row">
    <div class="col">
<h1>Take a tour</h1>
<div class="video-container">
<iframe src="https://www.youtube.com/embed/nmsZRw-RWYI" title="2017 Island Craft Shop South Hero Vermont 05486" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div></div>
    <div class="col">
    <p></p>
    <ul>
       <p v-for="(link, index) in links" :key="index">
    <a :href="index">{{link.year}}</a>
</li>
</ul>
    
    
    </div>
  
  </div>
</div>


</template>


<script>
import linksData from "../../photoLinks.json";
export default {
  data() {
    return {
      links: linksData,    };
  },
};
</script>