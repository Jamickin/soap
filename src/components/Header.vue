<template>
	<header class="text-gray-600 font-bold py-4 shadow-md">
		<div
			class="container mx-auto flex justify-between items-center">
			<!-- Logo / Brand Name -->
			<div class="text-3xl font-bold">
				<router-link :to="{ name: 'shop' }"
					>Dinkum Soaps</router-link
				>
			</div>

			<!-- Navigation Links -->
			<nav>
				<ul class="flex space-x-6 text-lg">
					<li>
						<router-link :to="{ name: 'shop' }"
							>Shop</router-link
						>
					</li>
					<li>
						<router-link :to="{ name: 'about' }"
							>About</router-link
						>
					</li>
					<li>
						<router-link :to="{ name: 'contact' }"
							>Contact</router-link
						>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
