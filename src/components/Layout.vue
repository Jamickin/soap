<script setup>
	import { defineProps } from "vue";

	const props = defineProps({
		name: String,
		description: String,
		price: String,
		imageUrl: String,
	});
</script>

<template>
	<main
		class="flex flex-col border border-solid border-slate-200 rounded-lg shadow-lg p-4 bg-white">
		<h1 class="text-2xl font-bold mb-4 text-gray-800">
			{{ name }}
		</h1>
		<div class="flex">
			<img
				:src="imageUrl"
				:alt="name"
				class="w-48 h-48 object-cover rounded-lg shadow-md mr-4" />
			<div class="flex flex-col justify-between">
				<p class="text-gray-600 mb-4">{{ description }}</p>
				<p class="text-xl font-semibold text-gray-800">
					{{ price }}
				</p>
			</div>
		</div>
	</main>
</template>
