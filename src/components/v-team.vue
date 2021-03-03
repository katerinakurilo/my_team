<template>
<div class="v-team">
  <h1>Команда</h1>
<div class="team_container">
<v-team-item
v-for="(item, index) in team_data"
:key="item.id"
:team_item_data="item"
@deleteFromTeam="deleteFromTeam(index)"

/>
</div>


<div class="button_sort">
<button 
@click="sortIncrease"
type="button" class="btn btn-secondary"
>Сортировать по возрастанию</button>  
</div>

<div class="button_sort">
<button 
 @click="sortDecrease"
 type="button" class="btn btn-secondary"
 >Сортировать по убыванию</button>
</div>
 


<p>Итого участников в команде: {{totalQuantity}}</p>


</div>


</template>




<script>



import vTeamItem from './v-team-item'
import {mapActions} from 'vuex'

export default {
    name: 'v-team',
    components: {
      vTeamItem
    },
  
    props: {
      team_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
        return {
          
        }
    },
    computed: {
       totalQuantity() {
      let result = []
      if (this.team_data.length) {
        for (let item of this.team_data) {
       
        result.push(item.quantity);
      }
      
      result = result.reduce(function(sum, el) {
        
        return sum +el;
      })
      return result;

      } else {
        return 0;
      }
    }
    },




    methods: {
      ...mapActions([
        'DELETE_FROM_TEAM'
      ]),
      deleteFromTeam(index) {
        this.DELETE_FROM_TEAM(index)

      },
      sortIncrease() {
      this.team_data.sort(function(a, b){
var nameA=a.name.toLowerCase();
var nameB=b.name.toLowerCase();
if (nameA < nameB) 
  return -1
if (nameA > nameB)
 return 1
return 0 
})
   },
    sortDecrease() {
      this.team_data.sort(function(a, b){
   var nameA=a.name.toLowerCase();
   var nameB=b.name.toLowerCase();
   if (nameA > nameB) 
   return -1
   if (nameA < nameB)
   return 1
   return 0 
})
   },
    }
}
</script>




<style lang="scss">
.button_sort {
  margin-top: 15px;
  margin-bottom: 10px;
}
.team_container {
  margin-top: 75px;
}
</style>