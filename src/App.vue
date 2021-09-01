<template>
  <div id="app">
    <Header />
    <router-view class="main"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #878787;
}
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.main {
  flex: 1 1 auto;
}
.title {
  font-size: 24px;
  margin: 0;
}
</style>
