import { writable, readable } from 'svelte/store';

export let isLoggedIn = writable(false);

let current = {
	first_name: 'Fahad',
	last_name: 'Ullah Khan',
    image : 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
	email: 'fahadullahkhan@admin.com'
};

export let user = readable(current);
