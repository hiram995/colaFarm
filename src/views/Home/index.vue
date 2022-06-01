<template>
  <div class="home">
    <product class="product"  />
    <product class="product"  />
    <product class="product"  />
    <product class="product"  />
    <product class="product"  />
    <product class="product"  />
    <product class="product"  />
    <product class="product"  />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import product from './product/index.vue'
@Component({
  components: {
    product
  },
})
export default class HomeView extends Vue {}
</script>

<style lang=less scoped>
.home {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .product {
    width: 23.4375rem;
    height: 25rem;
    margin-left: 2.125rem;
    margin-right: 2.125rem;
    margin-top: 6.25rem;
    background-image: url("./images/Com - Card - Item.png");
    background-size: 23.4375rem;
    background-repeat: no-repeat;
  }
  &::after {
    content: "";
    width: 23.4375rem;
    margin-left: 3.125rem;
    margin-right: 3.125rem;
  }
}
@media only screen and (max-width: 510px) {
  .home .product {
    width: 19.4375rem;
    height: 20rem;
    background-image: url("./images/Com - Card - Item.png");
    background-size: 20rem;
    margin-top: 0;
    margin-left: 0rem;
    margin-right: 0rem;
  }
  .home {
    justify-content: space-around;
  }
}
</style>