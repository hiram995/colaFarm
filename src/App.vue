<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import Header from "./components/Header/index.vue";
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
     Header,
  },
})
export default class HomeView extends Vue {

}
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
}
</style>
