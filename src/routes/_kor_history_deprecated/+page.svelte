<script>
    import Game from '/src/lib/Game.svelte';
    import "/src/app.css";
    import { fade } from 'svelte/transition';
    import quizKorHistory from './kor_history.json'

    let is_game_mode = true
    let quizData = quizKorHistory

</script>

<svelte:head>
    <title>타임 게임</title>
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

