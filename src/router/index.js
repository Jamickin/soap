import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/soap/:id",
			component: () => import("../views/blackMagic.vue"),
			props: (route) => ({
				name: route.query.name,
				description: route.query.description,
				price: route.query.price,
				imageUrl: route.query.imageUrl,
			}),
		},

		{
			path: "/blackMagic",
			name: "blackMagic",
			component: () => import("../views/blackMagic.vue"),
		},
		{
			path: "/calmingStorm",
			name: "calmingStorm",
			component: () => import("../views/calmingStorm.vue"),
		},
		{
			path: "/aloeVera",
			name: "aloeVera",
			component: () => import("../views/aloeVera.vue"),
		},
		{
			path: "/mduziFire",
			name: "mduziFire",
			component: () => import("../views/mduziFire.vue"),
		},
		{
			path: "/pureGoatsMilk",
			name: "pureGoatsMilk",
			component: () => import("../views/pureGoatsMilk.vue"),
		},
		{
			path: "/honeyDew",
			name: "honeyDew",
			component: () => import("../views/honeyDew.vue"),
		},
	],
});

export default router;
