<template>
	<div class="mt-10 max-w-4xl mx-auto">
		<!-- Soap List -->
		<ul class="space-y-4">
			<li
				v-for="soap in soaps"
				:key="soap.id"
				@click="addToCart(soap)"
				class="flex flex-row-reverse bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300">
				<img
					:src="soap.image"
					alt="Soap Image"
					class="w-32 h-32 object-cover rounded-lg ml-4" />
				<div class="flex-1 p-4">
					<h2 class="text-xl font-semibold">
						{{ soap.name }}
					</h2>
					<p class="mt-2 text-gray-400">
						{{ soap.description }}
					</p>
					<ul
						class="mt-4 list-disc list-inside text-gray-500">
						<li
							v-for="ingredient in soap.ingredients"
							:key="ingredient">
							{{ ingredient }}
						</li>
					</ul>
				</div>
			</li>
		</ul>

		<!-- Cart Toggle Button -->
		<div class="mt-6 text-center">
			<button
				@click="toggleCart"
				:class="{
					'hover:bg-red-600': showCart,
					' hover:bg-green-600': !showCart,
				}"
				class="bg-gray-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
				{{ showCart ? "Hide Cart" : "View Cart" }} ({{
					cart.length
				}}
				Items)
			</button>
		</div>

		<!-- Cart Component -->
		<div
			v-if="showCart"
			class="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
			<h3 class="text-lg font-semibold mb-4">Your Cart</h3>
			<ul class="space-y-2">
				<li
					v-for="(soap, index) in cart"
					:key="index"
					class="border-b border-gray-300 pb-2">
					<strong>{{ soap.name }}</strong> -
					{{ soap.description }}
					<ul class="mt-2 list-disc list-inside">
						<li
							v-for="ingredient in soap.ingredients"
							:key="ingredient">
							{{ ingredient }}
						</li>
					</ul>
					<strong>{{ soap.price }}</strong>
				</li>
			</ul>
			<div>Total Price: {{ totalPrice }}</div>
		</div>

		<!-- Email Button -->
		<div class="mt-6 text-center">
			<button
				@click="prepareEmail"
				class="bg-gray-600 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition duration-300">
				Email Cart Info
			</button>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from "vue";
	import { useCart } from "@/composables/useCart";
	import soapData from "@/data/soaps.json";

	const {
		cart,
		showCart,
		addToCart,
		toggleCart,
		prepareEmail,
		totalPrice,
	} = useCart();
	const soaps = ref([]);

	onMounted(() => {
		soaps.value = soapData;
	});
</script>
