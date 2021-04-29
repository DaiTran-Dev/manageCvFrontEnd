<template>
  <div class="wrapper">
    <TheSidebar></TheSidebar>
    <div class="main-content">
      <TheHeader></TheHeader>
      <div class="show-content">
        <Nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from "~/components/TheSidebar";
import TheHeader from "~/components/TheHeader";

export default {
  components: {
    TheSidebar,
    TheHeader,
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.main-content{
  position: relative;
  margin-left: 250px;
}
</style>
