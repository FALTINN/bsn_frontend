import {createWebHistory, createRouter } from "vue-router";

import MainPage from "./apps/MainPage.vue";
import RichNomination from "./apps/RichNomination.vue";
import BuilderNomination from "./apps/BuilderNomination.vue";
import KingNomination from "./apps/KingNomination.vue";
import RedStonerNomination from "./apps/RedStonerNomination.vue";
import CreatorNomination from "./apps/CreatorNomination.vue";
import EventNomination from "./apps/EventNomination.vue";
import BuildingNomination from "./apps/BuildingNomination.vue";

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/rich",
        component: RichNomination
    },
    {
        path: "/builder",
        component: BuilderNomination
    },
    {
        path: "/king",
        component: KingNomination
    },
    {
        path: "/redstoner",
        component: RedStonerNomination
    },
    {
        path: "/creator",
        component: CreatorNomination
    },
    {
        path: "/event",
        component: EventNomination
    },
    {
        path: "/building",
        component: BuildingNomination
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;