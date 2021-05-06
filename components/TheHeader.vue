<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-brand href="#">Dashboard</b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" >
          <NuxtLink  v-if="!$auth.loggedIn" to="/login" class="nav-link font-weight-bold"><span>Login</span></NuxtLink>
          <b-nav-item-dropdown v-else right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click.prevent="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<style>
</style>