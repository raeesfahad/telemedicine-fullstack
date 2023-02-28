<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import MainImage from '$lib/assets/MainImage.jpg';
</script>

<section class="text-gray-600 body-font">
	<div class=" mt-14 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
	  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
		<h1 class="title-font sm:text-4xl text-4xl mb-4 font-extrabold text-blue-600 dark:text-neutral-100">Healthcare Professionals Who
		  <br class="hidden lg:inline-block"> Bring Medical Care to Your Doorstep
		</h1>
		<p class="mb-8 leading-relaxed dark:text-neutral-100">Telemedicine has emerged as a lifeline for patients who cannot access traditional healthcare
			services due to various reasons. In the midst of a global pandemic, telemedicine has proved
			to be a crucial tool for remote healthcare. The heroes of telemedicine are the dedicated
			healthcare professionals who have gone above and beyond to provide essential medical care to
			patients from the comfort of their homes.</p>
		<div class="flex justify-center">
		  <a href="/dashboard" class=" mt-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</a>
		</div>
	  </div>
	  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
		<img class="object-cover object-center rounded" alt="hero" src={MainImage}>
	  </div>
	</div>
  </section>