<template>
	<div class="mt-10 max-w-4xl mx-auto lg:p-0 px-12">
		<!-- Top Banner -->
		<div
			v-if="showBanner"
			class="fixed top-0 left-0 right-0 bg-green-600 text-white text-center py-2 z-50">
			Item added to cart!
		</div>

		<!-- Soap List -->
		<ul class="space-y-4">
			<li
				v-for="soap in soaps"
				:key="soap.id"
				@click="addToCartWithBanner(soap)"
				class="lg:hover:scale-105 transition-transform flex lg:flex-row-reverse place-items-center flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg duration-300 mx-auto text-center lg:text-left">
				<img
					:src="soap.image"
					alt="Soap Image"
					class="lg:w-32 lg:h-32 w-64 h-auto lg:object-cover rounded-lg ml-4" />
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
					'hover:bg-green-600': !showCart,
				}"
				class="bg-gray-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
				{{ showCart ? "Hide Cart" : "View Cart" }} ({{
					cart.length
				}} Items)
			</button>
		</div>

		<!-- Cart Component -->
		<div
			v-if="showCart"
			class="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
			<h3 class="text-lg font-semibold mb-4">Your Cart</h3>
			<div v-if="cart.length > 0">
				<ul class="space-y-2">
					<li
						v-for="(soap, index) in cart"
						:key="index"
						class="border-b border-gray-300 pb-2">
						<strong>{{ soap.name }}</strong>
						<br />
						<p>R{{ soap.price }}</p>
						<div class="flex items-center mt-2">
							<button @click="decreaseQuantity(soap)" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">-</button>
							<span class="px-3">{{ soap.quantity }}</span>
							<button @click="increaseQuantity(soap)" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r">+</button>
						</div>
					</li>
				</ul>
				<div class="mt-4">Total Price: R{{ totalPrice }}</div>
				<!-- Customer Name Input -->
				<div class="mt-6 space-y-4">
					<input
						v-model="customerName"
						type="text"
						class="placeholder:text-gray-500 text-gray-600 w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
						placeholder="Your Name" />
					<!-- WhatsApp Button -->
					<div class="mt-6 text-center">
						<button
							@click="prepareWhatsAppMessage"
							class="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded transition duration-300">
							Send Cart Info via WhatsApp
						</button>
					</div>
				</div>
			</div>
			<div v-else>No items in Cart</div>
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
	customerName,
	addToCart,
	toggleCart,
	prepareWhatsAppMessage,
	totalPrice,
} = useCart();

const soaps = ref([]);
const showBanner = ref(false);

onMounted(() => {
	soaps.value = soapData;
});

const addToCartWithBanner = (soap) => {
	// Check if the soap is already in the cart
	const existingItem = cart.value.find(item => item.id === soap.id);
	if (existingItem) {
		existingItem.quantity++;
	} else {
		// Add the soap to the cart with a quantity of 1
		cart.value.push({ ...soap, quantity: 1 });
	}

	showBanner.value = true;
	// Hide the banner after 3 seconds
	setTimeout(() => {
		showBanner.value = false;
	}, 3000);
};


const increaseQuantity = (item) => {
	item.quantity++;
};

const decreaseQuantity = (item) => {
	if (item.quantity > 1) {
		item.quantity--;
	} else {
		const index = cart.value.indexOf(item);
		if (index > -1) {
			cart.value.splice(index, 1);
		}
	}
};
</script>
