<template>
	<div
		class="min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center p-6">
		<!-- Header -->
		<header class="mb-8">
			<h1 class="text-5xl font-bold">Contact Us</h1>
		</header>

		<!-- Main Content -->
		<main
			class="dark:bg-gray-900 dark:text-gray-200 p-8 rounded-lg shadow-lg max-w-xl w-full">
			<h2 class="text-3xl font-semibold mb-4">
				We'd Love to Hear from You!
			</h2>
			<p class="text-lg mb-6">
				Have a question about our products, or just want to
				say hello? Fill out the form below, and we’ll get
				back to you as soon as possible.
			</p>
			<form
				class="space-y-4"
				@submit.prevent="sendMessage">
				<div>
					<label
						for="name"
						class="block text-lg font-medium"
						>Name</label
					>
					<input
						v-model="customerName"
						type="text"
						id="name"
						class="mt-1 block w-full border placeholder:text-gray-500 text-gray-600 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
						placeholder="Your Name" />
				</div>

				<div>
					<label
						for="message"
						class="block text-lg font-medium"
						>Message</label
					>
					<textarea
						v-model="message"
						id="message"
						class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder:text-gray-500 text-gray-600"
						rows="4"
						placeholder="Your Message"></textarea>
				</div>
				<div>
					<button
						type="submit"
						class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
						Send Message
					</button>
				</div>
			</form>
		</main>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const customerName = ref("");
	const message = ref("");

	const sendMessage = () => {
		if (!customerName.value || !message.value) {
			alert("Please fill out all fields!");
			return;
		}

		const messageBody = `Dear Nick,\n\n${message.value}\n\nThank you,\n${customerName.value}`;

		const whatsappUrl = `https://wa.me/${+27659462806}?text=${encodeURIComponent(
			messageBody
		)}`;
		window.open(whatsappUrl, "_blank");
	};
</script>
