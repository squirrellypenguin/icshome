<template>
  <div class="container">
    <!-- <h4>Horizontal Flip</h4> -->
    <div v-for="(artist, index) in artists" :key="index" class="flip">
      <div class="front">
        <h3 id="example5" class="text-shadow">{{ artist.name }}</h3>
        <img style="height: 125px" :src="artist.photo1" />
      </div>
      <div class="back">
        <!-- Title -->
        <p style="font-size: 12px">
          {{ artist.name }}

          <!-- Business name -->
        </p>

        <p v-if="artist.dba">{{ artist.dba }}</p>

        <!-- About me -->
        <p class="artisttext">{{ artist.artistStatement }}</p>

        <!-- Website -->
        <a
          v-if="artist.website"
          :href="artist.website"
          alt="homepage"
          style="color: black; font-size: 24px; padding-right: 5px"
        >
          <b-icon-house></b-icon-house
        ></a>

        <!-- Twitter Link -->
        <a v-if="artist.twitter" :href="artist.twitter" alt="twitter" style="font-size: 24px; color: black; padding-right: 5px"
          ><b-icon-twitter></b-icon-twitter
        ></a>

        <!-- Facebook Link -->
        <a
          v-if="artist.facebook"
          class="link-light"
          :href="artist.facebook"
          alt="FB"
          style="font-size: 24px; color: black; padding-right: 5px"
          ><b-icon-facebook></b-icon-facebook
        ></a>

        <!-- Instragram Link -->
        <a
          v-if="artist.Instagram"
          :href="artist.Instagram"
          alt="insta"
          style="font-size: 24px; color: black; padding-right: 5px"
          ><b-icon-instagram></b-icon-instagram
        ></a>

        <!-- Esty Store -->
        <a v-if="artist.EtsayStore" :href="artist.EtsayStore" alt="etsy" style="color: black; padding-right: 5px"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-explicit"
            viewBox="0 0 16 16"
          >
            <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
            <path
              d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11ZM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11Z"
            /></svg
        ></a>

        <!-- Email -->
        <a :href="'mailto:' + artist.email"> <b-icon-envelope style="font-size: 30px; color: black"></b-icon-envelope></a>
      </div>
    </div>

    <br />
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Artists',
  components: {},

  data() {
    return {
      artists: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get('https://sheet.best/api/sheets/06fc3b51-300c-40ce-a5ef-76c218e62cdd')

      console.log(response.data[1])
      this.artists = response.data
    } catch (error) {
      this.errors.push(error)
    }
  }
}
</script>
