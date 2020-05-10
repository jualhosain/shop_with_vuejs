<template>
  <div>
    <div class="card mb-4">
      <img class="card-img-top" :src="item.photo" alt="Card image cap" style='height: 40vh;' />
      <div class="card-body">
        <h2 class="card-title text-center">{{item.title}}</h2>
        <h3 class='h5 text-center'>Price : {{item.price}}Tk</h3>
        <p class="card-text">
            {{item.description}}
        </p>
        <div class="text-center">
            <button @click='addtocart(item)' class="btn btn-primary"> Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      item: []
    };
  },
  mounted() {
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      let self = this;
      axios
        .get("http://localhost:3000/item/" + this.$route.params.id)
        .then(res => {
          self.item = res.data;
        });
    },
    addtocart(x){
      this.$store.commit('addtocart',x)
    }
  }
};
</script>
