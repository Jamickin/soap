import { ref, computed } from "vue";

export function useCart() {
	const cart = ref([]);
	const showCart = ref(false);
	const customerName = ref("");

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

	const prepareWhatsAppMessage = () => {
		if (cart.value.length === 0) {
			alert("Your cart is empty!");
			return;
		}

		if (customerName.value === "") {
			alert("Please enter your name.");
			return;
		}

		const cartInfo = cart.value
			.map((soap, index) => {
				return `${index + 1}. ${soap.name}\nPrice: R${
					soap.price
				}`;
			})
			.join("\n\n");
		const messageBody = `Dear Nick,\n\nI have ordered ${cart.value.length}x soap(s). Here are the details:\n\n${cartInfo}\n\nTotal Price: R${totalPrice.value}\n\nThank you,\n${customerName.value}`;

		const whatsappUrl = `https://wa.me/${+27659462806}?text=${encodeURIComponent(
			messageBody
		)}`;
		window.open(whatsappUrl, "_blank");
	};

	return {
		cart,
		showCart,
		customerName,
		addToCart,
		toggleCart,
		prepareWhatsAppMessage,
		totalPrice,
	};
}
