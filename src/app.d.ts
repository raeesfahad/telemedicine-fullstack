// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { colorScheme, ColorScheme } from '@svelteuidev/core';


export let color = colorScheme


declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
