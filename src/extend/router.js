import Login from "@/components/frame/Login";
import VueRouter from "vue-router";

const routes = [
    { path: '/', component: Login }
];

const router = new VueRouter({
    routes
});

export default router;
