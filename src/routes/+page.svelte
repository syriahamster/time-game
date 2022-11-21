<script>
	import Home from '/src/lib/Home.svelte';
	import '/src/app.css';
	let darkmode = 'light';

	const toggleDarkMode = () => {
		darkmode = darkmode === 'dark' ? 'light' : 'dark';
		if (darkmode === 'dark') document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
	};
</script>

<svelte:head>
	<title>타임 게임</title>
</svelte:head>

<main class="bg-white dark:bg-slate-800">
	<div class="flex flex-col h-screen p-4">
		<div class="flex flex-row-reverse mb-2 p-4">
			{#if darkmode === 'light'}
				<button class="btn bg-slate-100" on:click={toggleDarkMode}>🌙</button>
			{:else}
				<button class="btn bg-slate-700" on:click={toggleDarkMode}>🌞</button>
			{/if}
		</div>
		<Home />
		<a href="/kor_history"><button>근현대 한국사 측정기</button></a>
		<br />
		<p>svelte kit doc : <a href="https://kit.svelte.dev">kit.svelte.dev</a></p>
	</div>
</main>
