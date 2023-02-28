<script>

    import SearchProfile from "./assets/SearchProfile.svelte";
	import DashboardSideNav from "./DashboardSideNav.svelte";



</script>

<div class="grid grid-cols-3 gap-4 h-32 bg-white dark:bg-gray-700">
    <div class="col-span-2 ..."><div class="flex flex-row ml-2">
		<span class=" mt-2 ml-5 rounded-lg text-white text-2xl bg-blue-700">logo</span>
	</div></div>
    <div class="mt-3">
        <div class="flex flex-row justify-center"><SearchProfile /></div>
    </div>
    <DashboardSideNav />
  </div>
 



