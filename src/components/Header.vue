<template>
	<header class="text-gray-600 font-bold shadow-md">
		<div class="flex justify-between items-center">
			<div
				class="lg:hidden z-50 relative transition-all duration-300"
				:class="{ 'w-12': !menuOpen, 'w-1/3': menuOpen }">
				<button class="focus:outline-none">
					<svg
						@click="toggleMenu"
						class="absolute right-0 top-0 w-8 h-8 items-center"
						fill="none"
						stroke="white"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"></path>
					</svg>
				</button>
			</div>
			<div class="text-3xl font-bold lg:pl-4 pr-4">
				<router-link :to="{ name: 'shop' }"
					>Dinkum Soaps</router-link
				>
			</div>

			<nav
				class="fixed inset-y-0 left-0 w-1/3 bg-gray-800 transition-transform duration-300 transform lg:static lg:transform-none lg:bg-transparent lg:flex lg:items-center lg:space-x-6 lg:text-lg"
				:class="{
					'-translate-x-full': !menuOpen,
					'translate-x-0': menuOpen,
				}">
				<ul
					class="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6 text-lg">
					<li>
						<router-link
							@click="toggleMenu"
							:to="{ name: 'shop' }"
							>Shop</router-link
						>
					</li>
					<li>
						<router-link
							@click="toggleMenu"
							:to="{ name: 'about' }"
							>About</router-link
						>
					</li>
					<li>
						<router-link
							@click="toggleMenu"
							:to="{ name: 'contact' }"
							>Contact</router-link
						>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script setup>
	import { ref } from "vue";

	const menuOpen = ref(false);

	function toggleMenu() {
		menuOpen.value = !menuOpen.value;
	}
</script>
