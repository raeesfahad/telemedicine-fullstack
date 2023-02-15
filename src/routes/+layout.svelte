<script lang="ts">
	import '../app.postcss';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
  import { DarkMode } from 'flowbite-svelte';
	import Footer from '$lib/Footer.svelte';
 import { page } from '$app/stores';
 import getHead from '../DyanamicHead';

  let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
  
 


</script>


<svelte:head>
    <title>{getHead($page.url.pathname)}</title> 
</svelte:head>



<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-neutral">
      RemoteCare
    </span>
  </NavBrand>
  <div class="flex md:order-2">
    <DarkMode class="mx-5" {btnClass} />
    <NavHamburger on:click={toggle} />
  </div>
  <NavUl {hidden} class="order-1">
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/doctors"> For Doctors</NavLi>
  </NavUl>
</Navbar>



<div class=""><slot /></div>

<div class=""><Footer /></div>


