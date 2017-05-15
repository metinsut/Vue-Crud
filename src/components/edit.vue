<template lang="html">
  <div class="add container">
    <vue-alert v-if="alert" v-bind:message="alert"></vue-alert>
    <h1 class="page-header">Edit Personel</h1>
    <form v-on:submit="updatePersonel">
      <div class="well">
        <h4>Edit Personel</h4>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" placeholder="Name" v-model="users.name">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" placeholder="Email" v-model="users.email">
        </div>
        <div class="form-group">
          <label>Gender</label>
          <input type="text" class="form-control" placeholder="Gender" v-model="users.gender">
        </div>
        <div class="form-group">
          <label>Phıne</label>
          <input type="text" class="form-control" placeholder="Phone" v-model="users.phone">
        </div>
        <div class="form-group">
          <label>City</label>
          <input type="text" class="form-control" placeholder="City" v-model="users.city">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert"
export default {
  name:"add",
  data(){
    return{
      users:{},
      alert:""
    }
  },
  methods:{
    fetchpersonel(id){
      this.$http.get("http://slimapp/api/personel/"+id)
      .then((response) => {this.users = response.data})
    },
    updatePersonel(e){
      if (!this.users.name||!this.users.email||!this.users.gender||!this.users.phone||!this.users.city) {
        this.alert = "Please fill out form...";
      }
      else {
        let updateUsers = {
          name:this.users.name,
          email:this.users.email,
          gender:this.users.gender,
          phone:this.users.phone,
          city:this.users.city,
        }
        this.$http.put('http://slimapp/api/personel/update/'+this.$route.params.id, updateUsers)
          .then((response)=>{this.$router.push({path: '/',query:{alert:"Personel Updated"}});});
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created(){
    this.fetchpersonel(this.$route.params.id)
  },
  components:{
    "vue-alert":Alert
  }
}
</script>

<style lang="css">
</style>
