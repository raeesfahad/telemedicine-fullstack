<script lang="ts">
	import DashboardNav from "$lib/DashboardNav.svelte";
	import DashboardSideNav from "$lib/DashboardSideNav.svelte";

     export let logged : Boolean


</script>

<div class=""><DashboardNav loggedIn={logged}/></div>
<div><DashboardSideNav/></div>