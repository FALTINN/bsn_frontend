import {createWebHistory, createRouter } from "vue-router";

import CatalogGame from "./apps/CatalogGame.vue";
import StoreGame from "./apps/StoreGame.vue";
import MainPage from "./apps/MainPage.vue";

const routes = [
    {
        path: "/catalog",
        component: CatalogGame
    },
    {
        path: "/store",
        component: StoreGame
    },
    {
        path: "/",
        component: MainPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;