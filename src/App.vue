<template>
  <div id="app">
    <div v-if="!isUserLoggedIn">
      <router-view />
    </div>
    <div class="main-wrapper main-wrapper-1" v-else>
      <div class="navbar-bg"></div>
      <main-navigation />
      <side-menu />
      <!-- Main Content -->
      <div class="main-content">
        <router-view />
      </div>
      <footer />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AuthenticationService from './services/AuthenticationService'
import MainNavigation from './components/layouts/MainNavigation'
import SideMenu from './components/layouts/SideMenu'
import Footer from './components/layouts/Footer'
export default {
  name: "App",
  computed: {
    ...mapState(['loading', 'isUserLoggedIn']),
  },
  components: {
    MainNavigation,
    SideMenu,
    Footer
  },
  mounted () {
    // this.sendLogin(); // sample login request pattern
  },
  data() {
    return {}
  },
  methods: {
    sendLogin() {
      const payload = {
        email: "engchris95@gmail.com",
        password: "secret1234"
      }
      this.$store.dispatch("setLoading", true)
      AuthenticationService.login(payload).then((result) => {
        this.showAlert("Success", "User logged in successful", "success")
      }).catch((err) => {
        if (err.response === undefined) {
          this.showAlert("Error occured", "Oops! took long to get a response", "warning")
        } else {
          this.showAlert("Error occured", "Oops! took long to get a response", "warning")
        }
      }).finally(() => {
        this.$store.dispatch("setLoading", false)
      });
    },
    showAlert(title, text, type) {
      this.$fire({
        title,
        text,
        type: type ? type : "warning",
      })
    }
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.swal2-popup {
  font-size: 0.7rem !important;
}
</style>
