<template>
	<div
		class="min-h-screen flex flex-col justify-center items-center text-center p-6">
		<!-- Header -->
		<header class="mb-6">
			<h1 class="text-4xl font-semibold">
				Welcome to Dinkum Soaps
			</h1>
		</header>

		<!-- Main Content -->
		<main
			class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-lg w-full">
			<h2 class="text-2xl font-medium mb-4">
				We're Glad You're Here!
			</h2>
			<p class="mb-6">
				Our website is currently under construction, but
				we’re working hard to bring you a delightful
				shopping experience soon. In the meantime, please
				explore our initial offerings, and know that
				exciting features and products are on the way!
			</p>

			<!-- Call to Action Buttons -->
			<div class="flex justify-center space-x-4">
				<router-link
					:to="{ name: 'shop' }"
					class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded transition duration-200">
					Explore Our Soaps
				</router-link>
				<router-link
					to="/contact"
					class="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium py-2 px-5 rounded transition duration-200">
					Contact Us
				</router-link>
			</div>
		</main>
	</div>
</template>

<script setup>
	import { RouterLink } from "vue-router";
</script>
