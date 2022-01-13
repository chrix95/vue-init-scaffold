<template>
  <section class="section">
    <div class="container mt-5">
      <div class="row">
        <div
          class="
            col-12 col-sm-8
            offset-sm-2
            col-md-6
            offset-md-3
            col-lg-6
            offset-lg-3
            col-xl-4
            offset-xl-4
          "
        >
          <div class="login-brand">
            <img
              src="assets/img/logo.png"
              alt="logo"
              width="70%"
              class="shadow-light"
            />
          </div>

          <div class="card card-primary">
            <div class="card-header"><h4>Forgot Password</h4></div>

            <div class="card-body">
              <p class="text-muted">
                We will send a link to reset your password
              </p>
              <form method="POST">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    tabindex="1"
                    required
                    autofocus
                  />
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                    tabindex="4"
                  >
                    Forgot Password
                  </button>
                </div>
              </form>
              <div class="text-center mt-4 mb-3">
                <router-link to="/login" class="text-small">
                  Already have an account?
                </router-link>
              </div>
            </div>
          </div>
          <div class="simple-footer">Copyright &copy; [COMPANY NAME] {{ new Date().getFullYear() }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AuthForgotPassword",
  computed: {
    ...mapState(["loading"]),
  },
};
</script>

<style scoped>
</style>