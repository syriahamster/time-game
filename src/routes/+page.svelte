<script>
    import Home from '/src/lib/Home.svelte';
    import "/src/app.css";
</script>

<svelte:head>
    <title>타임 게임</title>
</svelte:head>

<main>
    <div class="card">
        <Home />
        <a href="/kor_history"><button>근현대 한국사 측정기</button></a>
        <br>
        <p>svelte kit doc : <a href="https://kit.svelte.dev">kit.svelte.dev</a></p>
    </div>   
</main>


