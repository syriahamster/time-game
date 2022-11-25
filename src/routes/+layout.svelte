<script>
	let darkmode = "dark";
	const toggleDarkMode = () => {
		darkmode = darkmode === 'dark' ? 'light' : 'dark';
		if (darkmode === 'dark') {
			document.documentElement.classList.add('dark');
			window.localStorage.setItem('darkmode', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			window.localStorage.setItem('darkmode', 'light');
		}
	};
	
	if (typeof window !== "undefined") {
		// init = localStorage.getItem("theme") || "dart";
		darkmode = window.localStorage.getItem('darkmode') === 'light' ? "light" : "dark";
		if (darkmode === "light") {
			document.documentElement.classList.remove('dark');
		}
	}
</script>
<div class="bg-white dark:bg-slate-800 h-screen">
	<div class="flex justify-center items-center"></div>
	<div class="flex flex-row-reverse mb-2 p-4">
		{#if darkmode === 'dark'}
			<button class="btn bg-slate-700" on:click={toggleDarkMode}>🌞</button>
		{:else}
			<button class="btn bg-slate-100" on:click={toggleDarkMode}>🌙</button>
		{/if}
	</div>
	<div class="flex justify-center items-center dark:text-white">
		<slot />
	</div>
</div>
