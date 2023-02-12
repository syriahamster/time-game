<script>
    import { page } from '$app/stores';
    import Game from '/src/lib/Game.svelte';
    import "/src/app.css";
    import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
    
    let is_game_mode = true
    let is_init_done = false
    let quizData 
    let game_title = "loading.."
    let error_log = ""
    let endpoint_name = $page.params.slug
    console.log(endpoint_name)
    
    async function load_game_data(){
        try{
            const res = await fetch("/game_config/"+endpoint_name+".json")
            quizData = await res.json()
            game_title = quizData.title
            is_init_done = true
        } catch (err) {
            console.log(err)
            error_log = err
            game_title = "잘못된 접근입니다"
        }
    }

    onMount(() => {
        load_game_data();
	});


</script>

<svelte:head>
    <title>{game_title} - {$page.params.slug}</title>
</svelte:head>

<main>
    dynamic page name : {$page.params.slug}<hr><br>

    <div class="card">
        <div class="quiz-section" in:fade="{{delay:200, duration:500}}">
            {#if is_init_done}
                <Game bind:is_game_mode
                    quizdata={quizData}>
                </Game>
            {:else if error_log}
                {game_title} - {endpoint_name}
                <hr><br>
                error log -----
                <pre>{error_log}</pre>
            {:else}
                {game_title} - {endpoint_name}
            {/if}
        </div>
    </div>

</main>

