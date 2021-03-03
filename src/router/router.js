import Vue from 'vue'
import Router from 'vue-router'
import vProfile from '../components/v-profile'

import vTeamWrapper from '../components/v-team-wrapper'

Vue.use(Router);



let router = new Router({
    routes: [
        {
            path: '/',
            name: 'profile',
            component: vProfile
        },

        {
            path: '/team',
            name: 'team',
            component: vTeamWrapper,
            
        },
      
    ]
})




export default router;