<script lang="ts">
	import { Button } from 'flowbite-svelte';
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
		<div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
			<h1 class="title-font font-large text-3xl text-gray-900 dark:text-neutral-100">
				Healthcare Professionals Who Bring Medical Care to Your Doorstep
			</h1>
			<p class="leading-relaxed mt-4 text-sm dark:text-neutral-200">
				Telemedicine has emerged as a lifeline for patients who cannot access traditional healthcare
				services due to various reasons. In the midst of a global pandemic, telemedicine has proved
				to be a crucial tool for remote healthcare. The heroes of telemedicine are the dedicated
				healthcare professionals who have gone above and beyond to provide essential medical care to
				patients from the comfort of their homes. Let's celebrate and honor these heroes for their
				unwavering commitment to ensuring that healthcare services remain accessible to all.
			</p>

      <Button class="mt-10 rounded-full" size="xl">Get started</Button>
		</div>
		<div
			class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 dark:bg-gray-800"
		>
			<h2 class="text-gray-900 text-lg font-medium title-font mb-5 mx-12 dark:text-neutral-100">
				Get yourself Registered
			</h2>
			<div class="relative mb-4 dark:bg-grey-700">
				<label for="email" class="leading-7 text-sm text-gray-600 dark:text-neutral-100"
					>Phone</label
				>
				<input
					type="email"
					id="email"
					placeholder="+92"
					name="email"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-grey-700"
				/>
			</div>
			<button
				class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
				>Register</button
			>
			<p class="text-xs text-gray-500 mt-3">you will receive a code text message.</p>
		</div>
	</div>
</section>
