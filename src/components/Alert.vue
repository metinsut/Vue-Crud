<template lang="html">
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Warning!</strong>
    {{message}}
  </div>
</template>

<script>
export default {
  name:"vue-alert",
  props:["message"]
}
</script>

<style lang="css">
</style>
