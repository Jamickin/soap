import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "layout",
			component: () => import("../views/Layout.vue"),
		},

		{
			path: "/blackMagic",
			name: "blackMagic",
			component: () =>
				import("../components/blackMagic.vue"),
		},
		{
			path: "/calmingStorm",
			name: "calmingStorm",
			component: () =>
				import("../components/calmingStorm.vue"),
		},
		{
			path: "/aloeVera",
			name: "aloeVera",
			component: () => import("../components/aloeVera.vue"),
		},
		{
			path: "/mduziFire",
			name: "mduziFire",
			component: () =>
				import("../components/mduziFire.vue"),
		},
		{
			path: "/pureGoatsMilk",
			name: "pureGoatsMilk",
			component: () =>
				import("../components/pureGoatsMilk.vue"),
		},
		{
			path: "/honeyDew",
			name: "honeyDew",
			component: () => import("../components/honeyDew.vue"),
		},
	],
});

export default router;
