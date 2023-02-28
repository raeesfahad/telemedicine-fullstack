<script>
	import '../app.postcss';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte'
  import { DarkMode } from 'flowbite-svelte';
	import Footer from '$lib/Footer.svelte';
  import { page } from '$app/stores';
  import getHead from '../DyanamicHead';
  import { isLoggedIn } from '../store';



  let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
 
  let LoggedIn;

   isLoggedIn.subscribe( value => {

    LoggedIn = value;
   })



</script>


<svelte:head>
    <title>{getHead($page.url.pathname)}</title> 
</svelte:head>


{#if $page.url.pathname !== "/dashboard"}
  


<Navbar 
let:hidden 
let:toggle
navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b">
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
    <NavLi href="/" active={$page.url.pathname === "/" ? true : false}>Home</NavLi>
    <NavLi href="/services" active={$page.url.pathname === "/services" ? true : false}>Services</NavLi>
    <NavLi href="/doctors" active={$page.url.pathname === "/doctors" ? true : false}> For Doctors</NavLi>
    <NavLi href="/login" active={$page.url.pathname === "/login" ? true : false}> Login </NavLi>
  </NavUl>
</Navbar>

<div class=""><slot /></div>

<div class=""><Footer /></div>


{:else if $page.url.pathname === "/dashboard"}
 
<slot />

{/if}


