<template>
<div class="v-persons">
   <h1>Список участников</h1>
  <input 
  type="search" 
  class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" 
  v-model="search" 
  placeholder="введите имя участника">
 
<v-persons-item
v-for="person in searchHandler"
:key="person.id"
v-bind:person_data="person"
@addToTeam="addToTeam"

/>



</div>
</template>




<script>

import vPersonsItem from './v-persons-item'
import {mapActions, mapGetters} from 'vuex'


export default {
    name: 'v-persons',
    components: {
        vPersonsItem
    },
  
    props: {},
    data() {
        return {
          search: ''
        }
    },
    computed: {
      ...mapGetters([
        'PERSONS'
      ]),
      searchHandler() {
      return this.PERSONS.filter(person => {
        return person.name.toLowerCase().includes(this.search)
      });
    }
    },
    methods: {
      ...mapActions([
        'GET_PERSONS_FROM_API',
        'ADD_TO_TEAM'
      ]),
      addToTeam(data) {
        this.ADD_TO_TEAM(data)
      }
    },
    mounted() {
      this.GET_PERSONS_FROM_API()
    }
}
</script>




<style lang="scss">

</style>