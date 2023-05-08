<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand" @click.native="collapseNavbar">
        <img
          src="https://res.cloudinary.com/duvzhauq9/image/upload/v1682448814/icsLogo_psxrm0.png"
          alt="Girl in a jacket"
          width="32"
          height="32"
        />
      </router-link>
      <button
        :class="['navbar-toggler', !navbarExpanded && 'collapsed']"
        type="button"
        aria-controls="navbarDefault"
        :aria-expanded="navbarExpanded"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarDefault" :class="['collapse navbar-collapse', navbarExpanded && 'show']">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/about" class="nav-link" @click.native="collapseNavbar">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/artists" class="nav-link" @click.native="collapseNavbar">Artists</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/media" class="nav-link" @click.native="collapseNavbar">Media</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/location" class="nav-link" @click.native="collapseNavbar">Come visit!</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarExpanded: false
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarExpanded = !this.navbarExpanded
    },
    collapseNavbar() {
      this.navbarExpanded = false
    }
  }
}
</script>
