<template>
  <div class="productToken">
    <div style="padding-left: 2.8125rem">
      <h3 class="title">ColaSwap Token</h3>
    </div>
    <div class="describe">
      <div class="leftTxt">
        <p>REI/ETH</p>
        <p>APY:999%</p>
        <p>Daily output : 1000</p>
      </div>
      <div class="rightBtn">
        <button @click="goSelect">SELECT</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class HomeView extends Vue {
  //跳转路由去代币页面
  goSelect() {
    this.$router.push({path:'/select'})
  }
}
</script>

<style lang='less' scoped>
.productToken {
  position: relative;
  p {
    margin: 0;
    padding: 0;
  }
  .title {
    font-weight: 400;
  }
  .describe {
    position: absolute;
    bottom: 45px;
    width: 12.5rem;
    height: 4.375rem;
    display: flex;
    justify-content: space-between;
    padding: 0 5.3125rem;
    .rightBtn {
      button {
        position: absolute;
        right: 4.8125rem;
        display: block;
        width: 6.25rem;
        height: 2.5rem;
        cursor: pointer;
        background-color: #fff;
        border: 0;
        background-image: url("./images/Button - -1.png");
        background-repeat: no-repeat;
        color: #fff;
      }
    }
  }
}
@media only screen and (max-width: 510px) {
  .productToken .describe {
    bottom: 0.625rem;
    padding: 0px 64px;
  }
}
</style>