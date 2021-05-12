<template>
  <div class="wrapper">
  <h1>Demo icon<font-awesome-icon prefix="far" icon="spinner" />
</h1>
    <div id="sidebar">
      <div class="container-fluid">
        <a href="" class="navbar-brand"> Dev<span>Fast</span> </a>
        <b-nav class="flex-column menu">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link active"
              ><b-icon icon="house-fill" font-scale="1" class="icon-menu"></b-icon
              ><span>Home</span></NuxtLink
            >
          </li>
          <li class="nav-item">
            <div class="nav-link" v-b-toggle.collapse-2>
              <b-icon icon="menu-button-wide-fill" font-scale="1" class="icon-menu"></b-icon
              ><span>Manage CV</span>
            </div>
            <b-collapse id="collapse-2">
              <ul>
                <li
                  class="nav-item"
                  v-for="route in routesManagerCurriculumVitae"
                  :key="route.url"
                >
                  <NuxtLink :to="route.url" :class="route.class"
                    ><b-icon
                      :icon="route.icon"
                      font-scale="1"
                      class="icon-menu"
                    ></b-icon
                    ><span>{{ route.title }}</span></NuxtLink
                  >
                </li>
              </ul>
            </b-collapse>
          </li>
          <li class="nav-item">
            <span @click.prevent="logout" class="nav-link"
              ><b-icon icon="camera" font-scale="1" class="icon-menu"></b-icon
              ><span>Logout</span></span
            >
          </li>
        </b-nav>
      </div>
    </div>
  </div>
</template>


<script>
import { Routes_Manager_Curriculum_Vitae } from '~/constant/constant'
export default {
  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push('/login')
    },
  },
  computed: {
    routesManagerCurriculumVitae() {
      var levelUser = this.$auth.user.level
      return Routes_Manager_Curriculum_Vitae.filter((row) => {
        return row.level == levelUser
      })
    },
  },
}
</script>

<style>
.icon-menu {
  margin-right: 15px;
}
#sidebar {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 250px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  overflow-y: auto;
}
#sidebar .container-fluid {
  padding-left: 0;
  padding-right: 0;
}
#sidebar .navbar-brand {
  text-align: center;
  font-size: 35px;
  color: #000;
  margin-right: 0;
  margin-bottom: 1rem;
  width: 100%;
}
#sidebar .menu .nav-link {
  padding-left: 0;
  color: rgba(0, 0, 0, 0.5);
}
#sidebar .menu .nav-link.active {
  color: #000;
}
</style>
