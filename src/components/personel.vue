<template lang="html">
  <div class="container">
    <vue-alert v-if="alert" v-bind:message="alert"></vue-alert>
    <h1 class="page-header">Personel</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.gender}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.city}}</td>
          <td><router-link class="btn btn-default" v-bind:to="'/personel/'+user.id">View</router-link></router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./Alert"

export default {
  name:"personel",
  data(){
    return{
      users:[],
      alert:""
    }
  },
  methods:{
    fetchpersonel(){
      this.$http.get("http://slimapp/api/personel")
      .then((response) => {this.users = response.data})
    }
  },
  created(){
    if(this.$route.query.alert)
    {
      this.alert = this.$route.query.alert;
    }
    this.fetchpersonel();
  },
  components:{
    "vue-alert":Alert
  }
}
</script>

<style lang="css">
</style>
