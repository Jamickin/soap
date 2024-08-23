<template>
	<header class="text-gray-600 font-bold py-4 shadow-md">
		<div
			class="container mx-auto flex justify-between items-center">
			<!-- Logo / Brand Name -->
			<!-- Hamburger Menu for Mobile -->
			<div class="lg:hidden relative z-50">
				<button
					@click="toggleMenu"
					class="focus:outline-none transform transition-transform duration-300"
					:class="{
						'translate-x-56': menuOpen,
						'translate-x-0': !menuOpen,
					}">
					<!-- Hamburger Icon -->
					<svg
						class="w-12 h-12 pr-4"
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

			<!-- Navigation Links -->
			<nav
				class="fixed inset-y-0 left-0 w-64 transform transition-transform duration-300 lg:static lg:transform-none bg-gray-800 lg:bg-transparent lg:flex lg:items-center lg:space-x-6 lg:text-lg"
				:class="{
					'-translate-x-full': !menuOpen,
					'translate-x-0': menuOpen,
				}">
				<ul
					class="flex flex-col space-y-4 p-6 lg:flex-row lg:space-y-0 lg:space-x-6 text-lg">
					<li>
						<router-link
							:to="{ name: 'shop' }"
							@click="closeMenu"
							>Shop</router-link
						>
					</li>
					<li>
						<router-link
							:to="{ name: 'about' }"
							@click="closeMenu"
							>About</router-link
						>
					</li>
					<li>
						<router-link
							:to="{ name: 'contact' }"
							@click="closeMenu"
							>Contact</router-link
						>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				menuOpen: false,
			};
		},
		methods: {
			toggleMenu() {
				this.menuOpen = !this.menuOpen;
			},
			closeMenu() {
				this.menuOpen = false;
			},
		},
	};
</script>
