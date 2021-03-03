<template>
<div class="v-team-item">
 <div class="team_person">
<img :src="require('../assets/images/' + team_item_data.image)" alt="img">
<p>{{team_item_data.name}}</p>

<div class="button_delete">
<button 
@click="deleteFromTeam" 
type="button" class="btn btn-danger"
>DELETE</button>
</div>


 </div>

</div>
</template>




<script>




export default {
    name: 'v-team-item',
  
    props: {
      team_item_data: {
        type: Object,
        default() {
          return {}
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
      deleteFromTeam() {
        this.$emit('deleteFromTeam')
      }
    },
    mounted() {
      this.$set(this.team_item_data, 'quantity', 1)
    }
}
</script>




<style lang="scss">
img {
  width: 150px;
  height: 150px;
}
.team_person {
  border: 1px solid orangered;
  margin-top: 25px;
  height: 268px;
}
.button_delete {
  margin-top: 54px;
  width: 200px;
}
.button_delete button{
  
  width: 180px;
}
</style>