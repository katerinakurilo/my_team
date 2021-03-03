<template>
<div class="v-catalog-item">
  
<div class="person">
<img :src="require('../assets/images/' + person_data.image)" alt="img">
<p>{{person_data.name}}</p>
<p>{{person_data.href}}</p>
 
  <button 
  @click="addToTeam"
  type="button" class="btn btn-success"
  >Добавить участника</button>
</div>
 



</div>
</template>




<script>




export default {
    name: 'v-catalog-item',
  
    props: {
      person_data: {
        type: Object, 
        default() {
          return{}
        }
      }  



    },
    data() {
        return {
          
        }
    },
    computed: {
      
    },
    methods: {
      addToTeam() {
        this.$emit('addToTeam', this.person_data);

      }
      }
    
}
</script>




<style lang="scss">
.v-catalog-item img{
  height: 150px;
  width: 150px;
}

.person {
  border: 1px solid green;
  margin-top: 25px;
}
</style>