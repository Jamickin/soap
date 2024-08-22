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
			<form class="space-y-4">
				<div>
					<label
						for="name"
						class="block text-lg font-medium"
						>Name</label
					>
					<input
						type="text"
						id="name"
						class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
						placeholder="Your Name" />
				</div>
				<div>
					<label
						for="email"
						class="block text-lg font-medium"
						>Email</label
					>
					<input
						type="email"
						id="email"
						class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
						placeholder="Your Email" />
				</div>
				<div>
					<label
						for="message"
						class="block text-lg font-medium"
						>Message</label
					>
					<textarea
						id="message"
						class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
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
