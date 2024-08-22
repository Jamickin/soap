<script setup>
	import { RouterView, RouterLink } from "vue-router";
	import Header from "@/components/Header.vue";
</script>

<template>
	<Header />
	<main><RouterView /></main>
	<!-- Footer -->
	<footer class="text-center py-6">
		<p>&copy; 2024 Dinkum Soaps. All rights reserved.</p>
	</footer>
</template>
