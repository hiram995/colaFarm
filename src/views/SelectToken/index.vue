<template>
  <div class="selectToken">
    <div class="tokenTitle">
      <span>Deposit in COLA_ETH, Make in COLA</span>
    </div>
    <div class="tokenBox">
      <div>
        <div class="leftBox" style="padding-top:30px;">
          <div style="text-align:center; margin-bottom:10px;"><img src="./images/1.png" style="width:100px; border-radius: 50%;"></div>
          <div style="text-align:center; font-size:20px">
            <p>0.00000</p>
            <p style="font-size:25px">GET the COLA</p>
            <p style="font-size:13px">Expect to dig out in 24 hours  <span style="padding-left:30px">260.84COLA</span> </p>
            <p style="font-size:13px">Expect to dig out in 24 hours  <span style="padding-left:30px">260.84COLA</span> </p>
          </div>
        </div>
        <div class="toObtain">
          <span>To Obtain</span>
        </div>
      </div>
      <div>
        <div class="rightBox" style="padding-top:30px;">
          <div style="text-align:center; margin-bottom:10px;">
            <img src="./images/1.png" style="width:100px; border-radius: 50%;">
            <img src="./images/2.png" style="width:100px; border-radius: 50%;">
          </div>
          <div style="text-align:center; font-size:20px">
            <p>0.00000</p>
            <p style="font-size:25px">Pledge is COLA_ETH_LP</p>
            <p style="font-size:13px; margin-top:10px">Deposit the receipt coins into the pool for mining</p>
          </div>
        </div>
        <div class="rp">
          <div class="leftR">
            <span>Redemption</span>
          </div>
          <div class="rightP">
            <span>Pledge</span>
          </div>
        </div>
      </div>
    </div>
    <div class="earnings">
      <span>Withdraw principal and earnings</span>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class HomeView extends Vue {}
</script>

<style lang='less' scoped>
p {
  margin: 0;
  padding: 0;
}
.selectToken {
  width: 100%;
  height: 100%;
  background-image: url("./images/Cola标.png");
  background-position: 23.75rem -6.25rem;
  background-size: 50%;
  background-repeat: no-repeat;
  flex-wrap: wrap;
  .earnings {
    margin: 0 auto;
    margin-top: 5rem;
    width: 25rem;
    height: 5rem;
    background-image: url("./images/Bar - Button-1.png");
    background-size: 100% 100%;
    text-align: center;
    span {
      line-height: 5rem;
      color: #fff;
    }
  }
  .tokenTitle {
    span {
      line-height: 4.075rem;
      font-size: 1.5625rem;
    }
    margin: 0 auto;
    width: 40.625rem;
    height: 4.075rem;
    text-align: center;
    background-image: url("./images/Button - -1.png");
    background-repeat: no-repeat;
  }
  .tokenBox {
    display: flex;
    justify-content: center;
    margin-top: 2.6875rem;
    .leftBox {
      width: 20rem;
      height: 14.25rem;
      background-image: url("./images/Button - -2.png");
      background-repeat: no-repeat;
      margin-left: 0.125rem;
      background-size: 100%;
    }
    .toObtain {
      span {
        line-height: 4.5rem;
        color: #fff;
        font-size: 0.9375rem;
      }
      width: 20rem;
      height: 4.5rem;
      border-radius: 0.9375rem;
      text-align: center;
      background-image: url("./images/Bar - Button-4.png");
      background-size: 100%;
      margin-left: 0.125rem;
    }
    .rightBox {
      width: 20rem;
      height: 14.25rem;
      background-image: url("./images/Button - -2.png");
      background-repeat: no-repeat;
      margin-left: 3.125rem;
      background-size: 100%;
    }
    .rp {
      display: flex;
      width: 20rem;
      height: 4.5rem;
      border-radius: 0.9375rem;
      text-align: center;
      margin-left: 3.125rem;
      .leftR {
        flex: 1;
        background-image: url("./images/Bar - Button-1.png");
        background-size: 100% 100%;
        border-radius: 0.9375rem;
        text-align: center;
        span {
          color: #fff;
          line-height: 4.375rem;
        }
      }
      .rightP {
        flex: 1;
        background-image: url("./images/Bar - Button-1.png");
        background-size: 100% 100%;
        border-radius: 0.9375rem;
        text-align: center;
        span {
          color: #fff;
          line-height: 4.375rem;
        }
      }
    }
  }
}
</style>