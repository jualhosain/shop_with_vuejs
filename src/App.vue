<template>
  <div id="app">
    <Navbar ></Navbar>

    
    <div class="container mt-3">
      <div class="row">
        <div class="col-7">
          <!-- <product @abcd="addcart" :abc="items"></product> -->
           <router-view></router-view>
        </div>
        <div class="col-5">
          <div style="height: 70vh; position: sticky; top: 10%; overflow: auto;">
              <cart></cart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import cart from "./cart";

export default {
  components: {
    Navbar: navbar,
    cart,
  }
};
</script>

<style>
</style>
