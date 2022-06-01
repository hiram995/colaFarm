<template>
  <div class="rightBox">
    <button><img src="./images/Setting.png" class="setBtn" /></button>
    <button>
      <img src="./images/Button - 64px - Gradient.png" class="gradientBtn" />
    </button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class HomeView extends Vue {}
</script>

<style lang='less' scoped>
.rightBox {
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: 0.625rem;
  button {
    border: 0;
    background-color: #fff;
    cursor: pointer;
  }
}
@media only screen and (max-width: 510px) {
  .rightBox {
    padding-top: 15px;
    .setBtn {
      height: 1.875rem;
    }
    .gradientBtn {
      height: 30px;
    }
  }
}
</style>