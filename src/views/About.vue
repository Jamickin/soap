<template>
	<div
		class="min-h-screen flex flex-col justify-center items-center p-6">
		<!-- Header -->
		<header class="mb-8">
			<h1 class="text-5xl font-bold text-green-700">
				About Dinkum Soaps
			</h1>
		</header>

		<!-- Main Content -->
		<main
			class="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl w-full">
			<h2
				class="text-3xl font-semibold mb-4 text-green-600">
				Our Story
			</h2>
			<p class="text-lg mb-6">
				At Dinkum Soaps, we believe in the power of nature.
				Our soaps are handcrafted with love, using only the
				finest natural ingredients. Our journey began with a
				simple idea: to create soaps that are not only good
				for your skin but also kind to the environment.
			</p>
			<p class="text-lg mb-6">
				We take pride in our sustainable practices and our
				commitment to delivering quality products that you
				can trust. From lavender fields to citrus groves,
				our ingredients are sourced from the most ethical
				suppliers to ensure that every bar of soap is a
				reflection of our values.
			</p>
			<p class="text-lg">
				Thank you for being a part of our story. We look
				forward to sharing our passion with you.
			</p>
		</main>

		<!-- Navigation Button -->
		<div class="mt-8">
			<router-link
				to="/contact"
				class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
				Get in Touch
			</router-link>
		</div>
	</div>
</template>
