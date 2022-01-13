import store from "../../store";
import router from "../../router";
import AuthenticationService from "../../services/AuthenticationService";

export default {
  loginRequest(credentials) {
    store.dispatch("setLoading", true);
    const response = AuthenticationService.login(credentials)
      .then((result) => {
        store.dispatch("login", result.data.data);
        router.push({
          name: "dashboard",
        });
        return { status: true };
      })
      .catch((err) => {
        if (err?.response === undefined) {
          return { status: false, message: 'Oops! took long to get a response' }
        } else {
          return { status: false, message: err?.response?.data?.message }
        }
      })
      .finally(() => {
        store.dispatch("setLoading", false);
      });
      return response
  },
  logoutRequest() {
    store.dispatch("setLoading", true);
    const response = AuthenticationService.logout()
      .then(() => {
        store.dispatch("logout");
        router.push({
          name: "login",
        });
        return { status: true };
      })
      .catch((err) => {
        store.dispatch("logout");
        router.push({
          name: "login",
        });
        if (err?.response === undefined) {
          return { status: false, message: 'Oops! took long to get a response' }
        } else {
          return { status: false, message: "Kindly login to reauthenticate" }
        }
      })
      .finally(() => {
        store.dispatch("setLoading", false);
      });
      return response
  },
};
