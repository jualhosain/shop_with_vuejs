<template>
  <div >
    <div v-for="(a,b) in items" :key='b' class="card float-left m-1" style="width: 12rem; height: 22rem">
      <router-link tag='div' :to="{path:'/items/'+ a.id}">
      <img :src="a.photo" class="card-img-top" style='height: 150px;' />
      </router-link>
      <div class="card-body d-flex flex-column justify-content-between">
        <div>
          <router-link :to="{path:'/items/'+ a.id}">
            <h5 class="card-title">{{a.title}}</h5>
          </router-link>
             <p class="card-text">{{a.price}}Tk</p>
        </div>
       
        <a @click='addtocart(a)' class="btn btn-sm btn-primary">Add to Card</a>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted(){
    this.fetchdata()
  }
  ,
  methods: {
      addtocart(a){
          this.$store.commit('addtocart',a)
      },
      fetchdata(){
        let self= this
        axios.get('http://localhost:3000/items').then(res=>{
          self.$store.commit('allproduct', res.data)
        })
      }
  },
  computed:{
    items(){
      return this.$store.getters.getproduct
    }
  }
};
</script>

