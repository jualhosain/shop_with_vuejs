<template>
  <div>
    <table class="table table-bordered mt-2">
      <thead>
        <tr>
          <th scope="col">Sl.</th>
          <th colspan="2" scope="col">Title</th>
          <th scope="col">price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      <tfoot>
        <tr class>
          <th class="px-4" colspan="3" scope="col">Total</th>
          <th class="px-4" colspan="3" scope="col">{{ total }} Tk</th>
        </tr>
      </tfoot>

      <tbody v-if="passdata.length > 0">
        <tr v-for="(a, b) in passdata" :key="b">
          <th scope="row">{{ b + 1 }}</th>
          <td colspan="2">{{ a.title }}</td>
          <td>{{ a.price }}tk</td>
          <td>
            <button @click="deletebtn(b)" class="btn btn-sm btn-outline-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5" class="text-center">Card is empty</td>
        </tr>
      </tbody>
    </table>
    <div v-if="passdata.length > 0" @click='clearcart' class="text-center mt-4">
      <button class="btn btn-block btn-success w-100">Checkout</button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    total() {
      let total = 0;
      this.passdata.forEach(a => {
        total += Number(a.price);
      });
      return total.toFixed(2);
    },
    passdata() {
      return this.$store.getters.getcart;
    }
  },
  methods: {
    deletebtn(x) {
      this.$store.commit("deletebtn", x);
    },
    clearcart(){
      if(confirm("Are You Sure You Want to Checkout ?")){
        this.$store.commit('clearcart');
      }
    }
  }
};
</script>
