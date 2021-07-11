<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AuthenticationService from './services/AuthenticationService'
export default {
  name: "App",
  computed: {
    ...mapState(['loading']),
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
