import {createRouter, createWebHistory } from 'vue-router';

// ---- Pages
import Artists from './pages/Artist.vue';
import Home from './pages/Home.vue';
import Ranking from './pages/Ranking.vue';
import Songs from './pages/Songs.vue';
import Voting from './pages/Voting.vue';


// ---- Config of routes
const routes = [
    {
        path: '/artists',
        name: 'artists',
        component: Home
    },

    {
        path: '/home',
        name: 'home',
        component: Home
    },

    {
        path: '/ranking',
        name: 'ranking',
        component: Home
    },

    {
        path: '/songs',
        name: 'songs',
        component: Home
    },

    {
        path: '/voting2',
        name: 'voting',
        component: Home
    },
];
export const router = createRouter({
    history: createWebHistory(),
    routes
})