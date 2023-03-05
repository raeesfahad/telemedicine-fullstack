<script>
	import PieChart from "./PieChart.svelte";
import ProfileWidget from "./ProfileWidget.svelte";

</script>
<div class="flex flex-row h-72 w-96 bg-white dark:{`bg-gray-700 text-white`}">
<ProfileWidget cash={0}/>
</div>
<div class="flex flex-row h-72 w-96 bg-white dark:{`bg-gray-700 text-white`}">
	<div class="flex flex-col text-blue-600 dark:text-white mx-4 mt-3 font-medium">
		<span>This week</span>
		<span class="text-4xl">33 Appointments</span>
		<span class="text-sm">0% change from yesterday</span>

	</div>
</div>
<div class="flex flex-row h-72 w-96 bg-white-200 dark:{`bg-gray-700 text-white`}"></div>
