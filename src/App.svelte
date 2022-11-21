<script>
  // import Game from "./lib/Game.svelte";
  import Home from "./lib/Home.svelte";
  import "./app.css";
  let darkmode = localStorage.getItem('color-theme');
  if (darkmode === null) {
    darkmode = 'light';
    localStorage.setItem('color-theme', darkmode);
  }

  const toggleDarkMode = () => {
    darkmode = darkmode === 'dark' ? 'light' : 'dark';
    if (darkmode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', darkmode);
  };
</script>

<main class="bg-white dark:bg-slate-800">
  <div class="flex flex-col h-screen p-4">
    <!-- <Game /> -->
    <div class="flex flex-row-reverse mb-2 p-4">
      {#if darkmode === 'light'}
      <button class="btn bg-slate-100" on:click={toggleDarkMode}>🌙</button>
      {:else}
      <button class="btn bg-slate-700" on:click={toggleDarkMode}>🌞</button>
      {/if}
    </div>
    <Home />
  </div>
</main>

<style>
</style>
