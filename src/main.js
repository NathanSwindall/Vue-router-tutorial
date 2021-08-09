import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'


import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'

const router = createRouter({
    history: createWebHashHistory(), // This makes it so that the user can go back to the previous page
    routes: [
        { path: '/teams', component: TeamsList}, // our-domain.com/teams
        { path: '/users', component: UsersList}
    ]
});



const app = createApp(App)

app.use(router) // tells our app that we want to use the router we made
app.mount('#app');
