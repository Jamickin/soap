import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "landing",
			component: () => import("../views/Landing.vue"),
		},
		{
			path: "/shop",
			name: "shop",
			component: () => import("../views/Shop.vue"),
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/About.vue"),
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("../views/Contact.vue"),
		},
	],
});

export default router;
