<template>
        <nav class="navbar navbar-expand-md navbar-light" style="background-color: #e3f2fd;">
          <router-link class="navbar-brand ml-5" :to="{path: '/'}">AmaderSHOP
          </router-link>
      <div class="ml-auto mr-5">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form  @submit.prevent='searchbtn' class="form-inline my-2 my-lg-0">
            <input 
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model='search'
            />
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      search : ''
    }
  },
  methods:{
    searchbtn(){
      let self= this
      axios.get('http://localhost:3000/search/'+this.search, )
      .then(res=>{
        self.$store.commit('allproduct',res.data)
      })
      this.search = ''
    }
  }
}
</script>