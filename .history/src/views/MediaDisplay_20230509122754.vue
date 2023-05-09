<template>

<div class="container">
  <div class="row">
    <div class="col"><div>
<h1>Take a tour</h1>
<youtube :player-width="300" :video-id="videoid"></youtube>
</div></div>
    <div class="col"><ul>
<li> <a href="https://www.facebook.com/pg/Island-Craft-Shop-189477107771345/photos/?tab=album&album_id=1847258511993188" target="_blank" >2018 </a>
</li>
<li>
 <a href="https://www.facebook.com/pg/Island-Craft-Shop-189477107771345/photos/?tab=album&album_id=1472645036121206" target="_blank" >2017 </a>
</li>
<li>
 <a href="https://www.facebook.com/media/set/?set=a.1124913814227665.1073741837.189477107771345&type=3" target="_blank">2016</a>
 </li>
 <li>
 <a href="https://www.facebook.com/media/set/?set=a.913779898674392.1073741836.189477107771345&type=3" target="_blank">2015</a>
 </li>
 </ul></div>
  
  </div>
</div>


</template>


<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'ArtistsGallery',
  components: {},

  data() {
    return {
      artists: [],
      errors: [],
      videoid: "nmsZRw-RWYI"
    }
  },

  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get('https://sheet.best/api/sheets/06fc3b51-300c-40ce-a5ef-76c218e62cdd')

      console.log(response.data[1])
      this.fbUrls = response.data
    } catch (error) {
      this.errors.push(error)
    }
  }
}
</script>
