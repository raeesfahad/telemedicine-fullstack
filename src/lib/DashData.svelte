<script>
	const data = [{ color: 'bg-red-500' }, { color: 'bg-blue-500' }, { color: 'bg-green-500' }];
</script>

<div class="flex flex-wrap justify-right mt-10 ml-32">
		<div class={`w-80 h-32 bg-red-400 ml-6 rounded-lg flex items-center justify-center`}>
			<span class="text-white text-2xl font-bold">
        {"Doctors"}
      </span>
		</div>

    <div class={`w-80 h-32 bg-blue-400 ml-6 rounded-lg flex items-center justify-center`}>
			<span class="text-white text-2xl font-bold">
        {"Patients"}
      </span>
		</div>

    <div class={`w-80 h-32 bg-green-400 ml-6 rounded-lg flex items-center justify-center`}>
			<span class="text-white text-2xl font-bold">
        {"All Users"}
      </span>
		</div>
</div>
