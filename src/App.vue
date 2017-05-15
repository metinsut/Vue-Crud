<template>
    
</template>

<script>
export default {
  data(){
    return{
      users:[]
    }
  },
  created(){
    fetch ("http://slimapp/api/personel")
    .then((res)=>{return res.json()})
    .then((users) => {this.users = users;})
  },

}
</script>

<style>

</style>
