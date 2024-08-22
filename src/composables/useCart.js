import { ref, computed } from "vue";

export function useCart() {
	const cart = ref([]);
	const showCart = ref(false);

	const addToCart = (soap) => {
		cart.value.push(soap);
	};

	const toggleCart = () => {
		showCart.value = !showCart.value;
	};

	const totalPrice = computed(() =>
		cart.value.reduce(
			(total, soap) => total + soap.price,
			0
		)
	);

	const prepareEmail = () => {
		if (cart.value.length === 0) {
			alert("Your cart is empty!");
			return;
		}

		const cartInfo = cart.value
			.map((soap, index) => {
				const ingredients = soap.ingredients.join(", ");
				return `${index + 1}. ${soap.name} - ${
					soap.description
				}\nIngredients: ${ingredients}\nPrice: $${
					soap.price
				}`;
			})
			.join("\n\n");
		const emailBody = `Dear Nick,\n\nI have ordered ${cart.value.length}x soap(s). Here are the details:\n\n${cartInfo}\n\nTotal Price: $${totalPrice.value}\n\nPlease enter any additional details here...\n\nThank you,\n[Your Name]`;

		window.location.href = `mailto:nick@example.com?subject=Soap Order&body=${encodeURIComponent(
			emailBody
		)}`;
	};

	return {
		cart,
		showCart,
		addToCart,
		toggleCart,
		prepareEmail,
		totalPrice,
	};
}
