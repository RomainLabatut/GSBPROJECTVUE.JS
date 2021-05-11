<template>
<div>
<!-- <navbar></navbar> -->
<router-view />
<footergsb></footergsb>
</div>
</template>

<script>
// import navbar from '@/components/navbar.vue'
import footergsb from '@/components/footergsb.vue'


export default {
  name: 'App',
  components: {
    // navbar,
    footergsb,
  }
}
</script>
    

<style>

</style>
