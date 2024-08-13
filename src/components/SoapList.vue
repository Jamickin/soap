<template>
	<div class="mt-10 w-full max-w-md mx-auto">
		<ul class="space-y-4">
			<li
				v-for="soap in soaps"
				:key="soap.id"
				class="bg-white p-6 rounded-lg shadow">
				<h2 class="text-2xl font-semibold">
					{{ soap.name }}
				</h2>
				<p class="mt-2 text-gray-600">
					{{ soap.description }}
				</p>
				<ul class="mt-4 list-disc list-inside">
					<li
						v-for="ingredient in soap.ingredients"
						:key="ingredient">
						{{ ingredient }}
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script setup>
	const soaps = [
		{
			id: 1,
			name: "Lavender Bliss",
			description:
				"A soothing lavender soap perfect for relaxation.",
			ingredients: [
				"Lavender Oil",
				"Coconut Oil",
				"Shea Butter",
			],
		},
		{
			id: 2,
			name: "Citrus Splash",
			description:
				"A refreshing citrus soap to start your day.",
			ingredients: [
				"Orange Oil",
				"Lemon Zest",
				"Olive Oil",
			],
		},
		{
			id: 3,
			name: "Minty Fresh",
			description:
				"A minty soap to keep you fresh all day.",
			ingredients: [
				"Peppermint Oil",
				"Eucalyptus Oil",
				"Coconut Oil",
			],
		},
		{
			id: 4,
			name: "Oatmeal Comfort",
			description:
				"A gentle oatmeal soap for sensitive skin.",
			ingredients: ["Oatmeal", "Honey", "Almond Oil"],
		},
		{
			id: 5,
			name: "Rose Petal",
			description:
				"A romantic rose-scented soap for a touch of luxury.",
			ingredients: ["Rose Oil", "Shea Butter", "Glycerin"],
		},
	];
</script>
