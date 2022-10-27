document.addEventListener('DOMContentLoaded', () => {
	let prod_id = location.href.split('?')[1].split('=')[1];
	let token = localStorage.getItem('access_token');
	if (token) {
		async function fetchSingleProduct() {
			const data = await fetch(
				`https://dummyjson.com/products/${prod_id}`,
			);
			const product = await data.json();
		}
		fetchSingleProduct();
	}
});
