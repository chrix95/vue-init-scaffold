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
import AuthHelpers from './functions/actions/AuthRequest'
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
  beforeMount() {
    if (this.$store.state.isUserLoggedIn) {
      this.$router.push({
        name: 'Dashboard'
      });
    }
  },
  mounted () {
    // this.sendLogin(); // sample login request pattern
  },
  data() {
    return {
      fields: {
        email: "engchris95@gmail.com",
        password: "secret1234"
      }
    }
  },
  methods: {
    async sendLogin() {
      if (this.validateRequest()) {
        const response = await AuthHelpers.loginRequest(this.fields)
        if (response.status) {
          this.showAlert('Success', 'User logged in successful', 'success')
        } else {
          this.showAlert('Error occured', response.message, 'error')
        }
      }
    },
    validateRequest() {
      if (this.fields.email) {
        if (this.fields.password) {
          return true
        } else {
          this.showAlert('Validation Error', 'Kidnly provide your password', 'error')
        }
      } else {
        this.showAlert('Validation Error', 'Kidnly provide your email address', 'error')
      }
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
