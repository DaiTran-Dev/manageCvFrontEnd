<template>
  <div>
    <b-navbar toggleable="lg" type="light" >
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-brand href="#">Dashboard</b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form class="mr-5">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <!-- Start login template  -->
          <NuxtLink to="/login" class="nav-link font-weight-bold"><span>Login</span></NuxtLink>
          <!-- End login template  -->

          <!-- Start logged template  -->
          <!-- <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <!-- End logged template  -->

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>