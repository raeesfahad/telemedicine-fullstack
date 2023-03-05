<script>
	import { Avatar } from "flowbite-svelte";
    export let cash = 0 ;

</script>
<div class="flex flex-col gap-0 text-blue-600 dark:text-white">
    <div class="w-80 h-46  mx-8 flex flex-col items-center justify-center">
        <Avatar size="lg" class="mt-3 text-blue-600">FU</Avatar>
        <span class="mt-2 mx-3 text-lg font-bold">Fahad Ullah Khan</span>
        <span class="mt-1 mx-3 text-md">Developer</span>
        
    </div>
    <div class="w-80 h-36 flex flex-row mx-10 mt-3 gap-1">
        
        <div class="text-blue-600 h-24 w-40 dark:text-white flex flex-col items-center justify-center">
          
            <span>Balance RS</span>
             <span class="text-4xl font-bold">{cash}</span>
            

        </div>

        <div class="h-24 w-40 text-white flex flex-col items-center justify-center">
            
             <button type="button" class="w-24 h-10 rounded-md text-center cursor-not-allowed text-white bg-blue-600 mt-2 hover:bg-blue-800 disabled:bg-blue-400" on:click={()=>{alert("Paisa he Piasa Hogaa!!!")}} disabled={cash === 0 ? true : false}>Withdraw</button>
        </div>

    </div>
</div>