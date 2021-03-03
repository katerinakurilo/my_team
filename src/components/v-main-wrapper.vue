<template>


<div class="v-main-wrapper">
<router-view></router-view>






</div>
</template>




<script>


import {mapGetters} from 'vuex'



export default {
    name: 'v-main-wrapper',
    components: {
      
        
    },
  
    props: {},
    data() {
        return {
         
        }
    },
    computed: {
      ...mapGetters([
          'TEAM'
      ])
    }
}
</script>




<style lang="scss">
.v-main-wrapper {
    max-width: 900px;
    color: black;
    margin: 0 auto;
   
}
</style>