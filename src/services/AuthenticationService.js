import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("/auth/register", credentials);
  },
  verifyAccount(credentials) {
    return Api().post("/auth/verify-account", credentials);
  },
  login(credentials) {
    return Api().post("/auth/login", credentials);
  },
  logout(credentials) {
    return Api().get("/auth/logout", credentials);
  }
};