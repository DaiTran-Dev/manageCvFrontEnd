<template>
  <div class="wrapper">
    <div id="sidebar">
      <div class="container-fluid">
        <a href="" class="navbar-brand"> Dev<span>Fast</span> </a>
        <b-nav class="flex-column menu">
          <li class="nav-item">
            <NuxtLink to="/task/" class="nav-link active"
              ><b-icon icon="camera" font-scale="1" class="icon-menu"></b-icon
              ><span>Task</span></NuxtLink
            >
          </li>
          <li class="nav-item">
            <div class="nav-link" v-b-toggle.collapse-2>
              <b-icon icon="camera" font-scale="1" class="icon-menu"></b-icon
              ><span>Manage CV</span>
            </div>
            <b-collapse id="collapse-2">
              <ul>
                <li class="nav-item">
                  <NuxtLink to="/cv/" class="nav-link"
                    ><b-icon icon="camera" font-scale="1" class="icon-menu"></b-icon
                    ><span>Index</span></NuxtLink
                  >
                </li>
                <li class="nav-item">
                  <NuxtLink to="/task/" class="nav-link"
                    ><b-icon icon="camera" font-scale="1" class="icon-menu"></b-icon
                    ><span>Task</span></NuxtLink
                  >
                </li>
              </ul>
            </b-collapse>
          </li>
          <li class="nav-item">
            <NuxtLink to="/task/" class="nav-link"
              ><b-icon icon="camera" font-scale="1" class="icon-menu"></b-icon
              ><span>Task</span></NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/task/" class="nav-link"
              ><b-icon icon="camera" font-scale="1" class="icon-menu"></b-icon
              ><span>Task</span></NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/task/" class="nav-link"
              ><b-icon icon="camera" font-scale="1" class="icon-menu"></b-icon
              ><span>Task</span></NuxtLink
            >
          </li>
        </b-nav>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
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