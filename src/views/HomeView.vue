<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Web3 from 'web3'
let web3 = new Web3()

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {

}
</script>
