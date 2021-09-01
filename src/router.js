import Vue from "vue";
import Router from "vue-router";
import Main from "./pages/Main";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Main
        },
        {
            path: "/delivery",
            component: () => import("./pages/Delivery")
        },
        {
            path: "/comments",
            component: () => import("./pages/Comments")
        },
        {
            path: "/cart",
            component: () => import("./pages/Cart")
        },
        {
            path: "/catalog",
            component: () => import("./pages/Catalog"),
            // children: [
            //     {
            //         path: "dress"
            //     }

            // ]
        }
    ]

})