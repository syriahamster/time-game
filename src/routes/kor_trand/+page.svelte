<script>
    import Game from '/src/lib/Game.svelte';
    import "/src/app.css";
    import { fade } from 'svelte/transition';
    import History from '/src/static/quiz_kor_trend'

    let is_game_mode = true
    let quizData = History

</script>

<svelte:head>
    <title>트랜드</title>
</svelte:head>

<main>
    <div class="card">
        <div class="quiz_section" in:fade="{{delay:200, duration:500}}">
            <Game bind:is_game_mode
                quizdata={quizData}>
            </Game>
        </div>
    </div>

</main>

