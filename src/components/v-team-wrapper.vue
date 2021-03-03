<template>


<div class="v-team-wrapper">

<div class="v-team">
<v-team 
:team_data="TEAM"
/>
</div>

   <div class="v-persons">
<v-persons/>
   </div>





</div>
</template>




<script>

import vPersons from './v-persons'
import vTeam from './v-team'
import {mapGetters} from 'vuex'



export default {
    name: 'v-team-wrapper',
    components: {
        vPersons,
        vTeam
        
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




<style>
.v-team-wrapper {
   
    display: flex;
    justify-content: space-around;
}
.v-team {
    width: 400px;
    
}
.v-persons {
    width: 400px;
   
}
@media screen and (max-width: 768px) {
    .v-team-wrapper {
   
    display: flex;
    flex-direction: column;
}

}
</style>