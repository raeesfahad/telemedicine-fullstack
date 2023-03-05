<script lang="ts">
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import ProfileAvatar from '$lib/ProfileAvatar.svelte';
    import { DarkMode } from 'flowbite-svelte';

 
    let text = "";
    let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 ml-2';

	function search() {
	
        text === "" ? alert("Please Enter text") : alert(`You searched for ${text}`)
	}
</script>


<div class="flex flex-row justify-end -ml-1">
    <div class="relative">
        <input
            class="px-4 py-2 h-8 w-26 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 dark:bg-gray-600 dark:border-gray-600 dark:text-white"
            type="text"
            bind:value={text}
            placeholder="Search..."
        />
        <button on:click={search} class="absolute top-0 right-0 px-4 py-2">
            <div class="w-4 h-4 text-blue-700"><FaSearch /></div>
        </button>
    </div>

    <div class="ml-3 mt-2  text-blue-600">
        <button class=""on:click={(event)=>{event.preventDefault(); alert("ring!!")}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </button>
    </div>

    <div class="ml-3">
        <ProfileAvatar />
    </div>

    <DarkMode btnClass={btnClass}/>

    
</div>