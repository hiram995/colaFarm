<template>
  <div class="selectToken">
    <div class="tokenTitle">
      <span>Deposit in COLA_ETH, Make in COLA</span>
    </div>
    <div class="tokenBox">
      <div>
        <div class="leftBox" style="padding-top: 30px">
          <div style="text-align: center; margin-bottom: 10px">
            <img
              src="./images/1.png"
              style="width: 100px; border-radius: 50%"
            />
          </div>
          <div style="text-align: center; font-size: 20px">
            <p>0.00000</p>
            <p style="font-size: 25px">GET the COLA</p>
            <p style="font-size: 13px">
              Expect to dig out in 24 hours
              <span style="padding-left: 30px">260.84COLA</span>
            </p>
            <p style="font-size: 13px">
              Expect to dig out in 24 hours
              <span style="padding-left: 30px">260.84COLA</span>
            </p>
          </div>
        </div>
        <div class="toObtain">
          <span>To Obtain</span>
        </div>
      </div>
      <div>
        <div class="rightBox" style="padding-top: 30px">
          <div style="text-align: center; margin-bottom: 10px">
            <img
              src="./images/1.png"
              style="width: 100px; border-radius: 50%"
            />
            <img
              src="./images/2.png"
              style="width: 100px; border-radius: 50%"
            />
          </div>
          <div style="text-align: center; font-size: 20px">
            <p>0.00000</p>
            <p style="font-size: 25px">Pledge is COLA_ETH_LP</p>
            <p style="font-size: 13px; margin-top: 10px">
              Deposit the receipt coins into the pool for mining
            </p>
          </div>
        </div>
        <div class="rp">
          <div class="leftR">
            <span @click="dialogVisible = true">Redemption</span>
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
    <!-- 点击Redemption弹出遮罩层 -->
    <el-dialog
      title="Deposit in COLA_ETH-LP"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>You'll receive bids on this item</span>
      <!-- 图片 -->
      <div style="display: flex; justify-content: center; margin-top: 20px">
        <img src="./images/1.png" style="border-radius: 50%" width="70px" />
        <img src="./images/2.png" style="border-radius: 50%" width="70px" />
      </div>
      <!-- 输入框 -->
      <div class="IntBox" style="text-align: center; position: relative">
        <input type="text" class="AmountInt" />
        <a href="#" class="AllBtn">ALL</a>
      </div>
      <!-- 底部 -->
      <span slot="footer" class="dialog-footer">
        <!-- element ui 中的确定与取消按钮 -->
        <!-- <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        > -->
        <a href="#">Cancel</a>
        <a href="#">Confirm</a>
      </span>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class HomeView extends Vue {
  dialogVisible = true;
  // 弹出层关闭方法
  // handleClose(done) {
  //   this.$confirm("确认关闭？")
  //     .then((_) => {
  //       done();
  //     })
  //     .catch((_) => {});
  // }
}
</script>

<style lang='less'>
.el-dialog {
  margin-top: 28vh !important;
}
.el-dialog__footer {
  text-align: center;
}
.dialog-footer {
  a {
    display: inline-block;
    background-image: url("./images/Bar - Button-1.png");
    width: 150px;
    height: 65px;
    background-size: 100% 100%;
    margin-top: 30px;
    line-height: 65px;
    text-align: center;
    color: #fff;
  }
}
a {
  text-decoration: none;
}
.AllBtn {
  text-decoration: none;
  color: #000;
  line-height: 40px;
  font-size: 20px;
  display: block;
  width: 100px;
  position: absolute;
  top: 25px;
  right: 34px;
  height: 40px;
  background-image: url("./images/Button - -1@2x.png");
  background-size: 100% 100%;
}
.el-dialog {
  background-color: #fff;
  border-radius: 20px;
}
.AmountInt {
  font-size: 20px;
  color: rgb(135, 131, 131);
  margin-top: 20px;
  padding: 2px 10px;
  height: 40px;
  width: 80%;
  border-radius: 10px;
  border: 3px solid rgb(178, 178, 178);
  outline: none;
}
.el-dialog__body {
  padding: 0 20px;
  span {
    color: rgb(156, 162, 154);
    font-size: 14px;
  }
}
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