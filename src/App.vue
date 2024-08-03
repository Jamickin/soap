<script setup>
	import { RouterView, RouterLink } from "vue-router";
</script>

<template>
	<header
		class="flex justify-between text-white bg-slate-600 px-12">
		<RouterLink :to="{ name: 'aloeVera' }"
			>aloeVera</RouterLink
		>
		<RouterLink :to="{ name: 'blackMagic' }"
			>blackMagic</RouterLink
		>
		<RouterLink :to="{ name: 'calmingStorm' }"
			>calmingStorm</RouterLink
		>
		<RouterLink :to="{ name: 'honeyDew' }"
			>honeyDew</RouterLink
		>
		<RouterLink :to="{ name: 'mduziFire' }"
			>mduziFire</RouterLink
		>
		<RouterLink :to="{ name: 'pureGoatsMilk' }"
			>pureGoatsMilk</RouterLink
		>
	</header>
	<RouterView />
</template>
