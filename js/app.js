// let elUsersList = document.querySelector('.user-list');
// let elUserTemplate = document.querySelector('#user-temp').content;
// let elUserFragment = document.createDocumentFragment();

// let userClone = document.importNode(elUserTemplate, true);

// let isLoading = false;

// document.addEventListener('DOMContentLoaded', async () => {
// isLoading = true;
// const rawData = await fetch('https://reqres.in/api/users?page=2', {
// 	method: 'GET',
// });
// const { data } = await rawData.json();
// isLoading = false;

// data.forEach(user => {
// 	let newLi = document.createElement('li');
// 	newLi.textContent = user.first_name;
// 	elUserFragment.append(newLi);
// });
// elUsersList.append(elUserFragment);

// fetch('https://reqres.in/api/users?page=2', {
// 	method: 'GET',
// })
// 	.then(data => data.json())
// 	.then(data => {data});
// });

let elUsernameInp = document.getElementById('username');
let elPasswordInp = document.getElementById('password');
let elSubmitBtn = document.getElementById('btn-submit');

elSubmitBtn.addEventListener('click', async () => {
	try {
		let username = elUsernameInp.value;
		let password = elPasswordInp.value;
		if (username !== '' && password !== '') {
			let auth = await fetch('https://dummyjson.com/auth/login', {
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
				body: JSON.stringify({
					username,
					password,
				}),
			});
			let res = await auth.json();
			if (res.token) {
				localStorage.setItem('access_token', res.token);
				location.href = '/pages/users.html';
			} else {
				localStorage.removeItem('access_token');
				location.reload();
			}
		}
	} catch (err) {
		console.log(err);
	}
});
