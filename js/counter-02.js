window.addEventListener('click', function (event) {
	let counter;

	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' || event.target.dataset.action === 'payment') {
		const counterWrapper = event.target.closest('.counter-wrapper');
		counter = counterWrapper.querySelector('[data-counter]');
		const payment = event.target.closest('.counter-wrapper');
		payment = payment.querySelector('[data-action]');
	}

	if (event.target.dataset.action === "button") {
		let val = document.getElementById('input').value;
		if (i <= val) {
			alert('оплата успішна', val)
		} else {
			alert('нестача коштів', val)
		}
	}

	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	if (event.target.dataset.action === 'minus') {

		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			console.log('IN CART!!!!');
			event.target.closest('.cart-item').remove();
			toggleCartStatus();
			calcCartPrice();
		}

	}

	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		calcCartPrice();
	}
});