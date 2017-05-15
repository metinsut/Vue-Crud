<template lang="html">
  <div class="details container">
    <router-link to="/">Back</router-link>
    <h1 class="page-header">
      {{user.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+user.id">Edit</router-link>
        <button class="btn btn-danger" v-on:click="deletePersonel(user.id)">Delete</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">{{user.email}}</li>
      <li class="list-group-item">{{user.gender}}</li>
      <li class="list-group-item">{{user.phone}}</li>
      <li class="list-group-item">{{user.city}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"personeldetails",
  data(){
    return{
      user:""
    }
  },
  created(){
    this.fetchpersonel(this.$route.params.id);
  },
  methods:{
    fetchpersonel(id){
      this.$http.get("http://slimapp/api/personel/"+id)
      .then((response) => {this.user = response.data})
    },
    deletePersonel(id){
      this.$http.delete("http://slimapp/api/personel/delete/"+id)
      .then((response) => {this.$router.push({path: '/', query:{alert:"Personel Deleted"}})
      })
    }
  }
}
</script>

<style lang="css">

</style>
