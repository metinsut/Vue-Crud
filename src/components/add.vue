<template lang="html">
  <div class="add container">
    <vue-alert v-if="alert" v-bind:message="alert"></vue-alert>
    <h1 class="page-header">Add Personel</h1>
    <form v-on:submit="addPersonel">
      <div class="well">
        <h4>Add New Personel</h4>
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
    addPersonel(e){
      if (!this.users.name||!this.users.email||!this.users.gender||!this.users.phone||!this.users.city) {
        this.alert = "Please fill out form...";
      }
      else {
        let newUsers = {
          name:this.users.name,
          email:this.users.email,
          gender:this.users.gender,
          phone:this.users.phone,
          city:this.users.city,
        }
        this.$http.post('http://slimapp/api/personel/add', newUsers)
          .then((response)=>{this.$router.push({path: '/',query:{alert:"Personel Added"}});});
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  components:{
    "vue-alert":Alert
  }
}
</script>

<style lang="css">
</style>
