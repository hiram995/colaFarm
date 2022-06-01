<template>
  <div class="header">
    <div class="logo">
      <img src="./images/`ColaLogo-Black.png" alt="logo" />
    </div>
    <div class="txt">
      <img
        src="./images/Provide liquidity in ColaSwap,Earn ColaSwap Token..png"
        alt="txt"
      />
    </div>
    <ConnectWalletBtn class="btn" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import ConnectWalletBtn from "./ConnectWalletBtn/index.vue";
@Component({
  components: {
    ConnectWalletBtn,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang=less scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3.125rem;
  .logo {
    margin-left: 3.125rem;
  }
  .txt {
    margin-top: 2.25rem;
  }
  .btn {
    margin-right: 3.125rem;
    width: 18.75rem;
  }
}
@media only screen and (max-width: 510px) {
  .txt {
    display: none;
  }
  .header {
    margin-top: 0.9375rem;
    .btn {
      margin-right: 1.125rem;
      width: 9.75rem;
    }
    .logo {
      margin-left: 1.125rem;
      img {
        height: 3.125rem;
      }
    }
  }
}
</style>