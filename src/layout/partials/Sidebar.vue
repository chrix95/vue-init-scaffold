<template>
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <div
        class="
          sidebar-brand-wrapper
          d-none d-lg-flex
          align-items-center
          justify-content-center
          fixed-top
          text-center
        "
      >
        <router-link class="sidebar-brand brand-logo" to="/">
          <h3 class="text-white">SELLER SPOT</h3>
        </router-link>
        <router-link class="sidebar-brand brand-logo-mini" to="/">
          <h3 class="text-white">S S</h3>
        </router-link>
      </div>
      <ul class="nav">
        <li class="nav-item account-dropdown">
          <a class="nav-link" v-b-toggle="'account-dropdown'">
            <!-- <img
              class="img-xs rounded-circle"
              src="@/assets/images/faces-clipart/pic-1.png"
              alt=""
            /> -->
            <p class="mb-0 text-light">{{ adminFullname }}</p>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse accordion="sidebar-accordion" id="account-dropdown">
            <ul class="nav flex-column sub-menu pl-0">
              <li class="nav-item">
                <a class="nav-link pl-5" href="#">
                  <span class="menu-icon">
                    <i class="mdi mdi-account"></i>
                  </span>
                  <span class="menu-title">Profile</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link pl-5"
                  href="#"
                  @click.prevent="logoutAdmin()"
                >
                  <span class="menu-icon">
                    <i class="mdi mdi-power"></i>
                  </span>
                  <span class="menu-title">Logout</span>
                </a>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item nav-category">
          <span class="nav-link">Navigation</span>
        </li>
        <!-- Dashboard -->
        <li class="nav-item menu-items" v-on:click="collapseAll">
          <router-link class="nav-link" to="/">
            <span class="menu-icon">
              <i class="mdi mdi-speedometer"></i>
            </span>
            <span class="menu-title">Dashboard</span>
          </router-link>
        </li>
        <!-- Categories -->
        <li class="nav-item menu-items">
          <span
            class="nav-link"
            v-b-toggle="'categories'"
            :class="{ active: subIsActive('/categories') || subIsActive('/subcategories') }"
          >
            <span class="menu-icon">
              <i class="mdi mdi-table-large"></i>
            </span>
            <span class="menu-title">Categories</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="categories">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/categories/list/"
                  >List Categories</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/subcategories/create/"
                  >Create Subcategories</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <!-- Products -->
        <li class="nav-item menu-items">
          <span
            class="nav-link"
            v-b-toggle="'products'"
            :class="{ active: subIsActive('/products') }"
          >
            <span class="menu-icon">
              <i class="mdi mdi-laptop"></i>
            </span>
            <span class="menu-title">Products</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="products">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/products/list/"
                  >List products</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/products/create/"
                  >Create products</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <!-- Products -->
        <li class="nav-item menu-items">
          <span
            class="nav-link"
            v-b-toggle="'orders'"
            :class="{ active: subIsActive('/orders') }"
          >
            <span class="menu-icon">
              <i class="mdi mdi-shopping"></i>
            </span>
            <span class="menu-title">Orders</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="orders">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/orders/list/"
                  >List Orders</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <!-- Users -->
        <li class="nav-item menu-items">
          <span
            class="nav-link"
            v-b-toggle="'users'"
            :class="{ active: subIsActive('/users') }"
          >
            <span class="menu-icon">
              <i class="mdi mdi-account-multiple"></i>
            </span>
            <span class="menu-title">Users</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="users">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/users/list/"
                  >List</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <!-- Admins -->
        <li class="nav-item menu-items">
          <span
            class="nav-link"
            v-b-toggle="'admins'"
            :class="{ active: subIsActive('/admins') }"
          >
            <span class="menu-icon">
              <i class="mdi mdi-account"></i>
            </span>
            <span class="menu-title">Admins</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="admins">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/admins/list/"
                  >List</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <!-- Settings -->
        <li class="nav-item menu-items">
          <span
            class="nav-link"
            v-b-toggle="'settings'"
            :class="{ active: subIsActive('/settings') }"
          >
            <span class="menu-icon">
              <i class="mdi mdi-settings"></i>
            </span>
            <span class="menu-title">Settings</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="settings">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/settings/index"
                  >Store Information</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/settings/locations/"
                  >Delivery Location</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import AuthHelpers from '@/functions/actions/AuthRequest'
import { mapState } from 'vuex';
export default {
  name: "sidebar",
  computed: {
    ...mapState(['user']),
    adminFullname() {
      return this.user.first_name + ' ' + this.user.last_name
    },
  },
  data() {
    return {
      collapses: [{ show: false }, { show: false }, { show: false }],
    };
  },
  mounted() {
    const body = document.querySelector("body");
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll(".sidebar .nav-item").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  },
  methods: {
    logoutAdmin() {
      this.$confirm("Are you sure?").then(async () => {
        const response = await AuthHelpers.logoutRequest()
        if (response.status) {
          this.showAlert('Success', 'Admin logged out', 'success')
        } else {
          this.showAlert('Error occured', response.message, 'error')
        }
      });
    },
    showAlert(title, text, type) {
      this.$fire({
        title,
        text,
        type: type ? type : "warning",
      })
    },
    collapseAll() {
      var exp_element = document.getElementsByClassName("show");
      if (exp_element.length > 0) {
        var elm_id = exp_element[0].id;
        this.$root.$emit("bv::toggle::collapse", elm_id);
      }
    },
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
  },
  watch: {
    $route() {
      document.querySelector("#sidebar").classList.toggle("active");
    },
  },
};
</script>