import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        persons: [],
        team: []
    },
    mutations: {
        SET_PERSONS_TO_STATE: (state, persons) => {
           state.persons = persons; 
        },
        SET_TEAM: (state, person) => {
            if (state.team.length) {
                let isPersonExists = false;
                state.team.map(function(item) {
                    if (item.id === person.id) {
                        isPersonExists = true;
                        item.quantity

                    }
                })
                if (!isPersonExists) {
                    state.team.push(person)
                }




            } else {
                state.team.push(person)
            }
            
                
            },

           

            
        
        REMOVE_FROM_TEAM: (state, index) =>{
            state.team.splice(index, 1)
        }
    },
    actions: {
        GET_PERSONS_FROM_API({commit}) {
            return axios('http://localhost:3000/persons', {
                method: "GET"
            })
            .then((persons) => {
                commit('SET_PERSONS_TO_STATE', persons.data);
                return persons;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        },
        ADD_TO_TEAM({commit}, person) {
            commit('SET_TEAM', person);
        },
        DELETE_FROM_TEAM({commit}, index) {
            commit('REMOVE_FROM_TEAM', index)
        }
    },
    getters: {
        PERSONS(state) {
            return state.persons;
        },
        TEAM(state) {
            return state.team;
        }
    }
});

export default store;