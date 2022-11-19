<script>
    import { fade } from 'svelte/transition';
    import quizKorHistory from '../static/quiz_kor_history.json'
    import quizKorTrend from '../static/quiz_kor_trend.json'
    import quizWorldHistory from '../static/quiz_world_history.json'

    import Game from './Game.svelte';

    let is_game_mode = false
    let quizData = null;

</script>

<!-- <span>game mode : {is_game_mode}</span> -->

<h2 class="service_title">한국인 상식수준 측정기</h2>
<br>

{#if is_game_mode}
    <div class="quiz_section" in:fade="{{delay:200, duration:500}}">
        <Game bind:is_game_mode
              quizdata={quizData}>
        </Game>
    </div>
{:else}
    <div class="quiz_section" in:fade="{{delay:200, duration:500}}">
        <button class="btn" on:click={()=>{is_game_mode=!is_game_mode; quizData=quizKorHistory}}>
            한국사 테스트 (근현대)
        </button>
        <button class="btn" on:click={()=>{is_game_mode=!is_game_mode; quizData=quizKorTrend}}>
            한국 트랜드 테스트
        </button>
        <button class="btn" on:click={()=>{is_game_mode=!is_game_mode; quizData=quizWorldHistory}}>
            세계사 테스트
        </button>
    </div>


{/if}


<style>
.service_title{
    font-size: 35px;
    font-weight: 700;
}
.quiz_section {
    padding: 5px;
    min-width: 350px;
    max-width: 100%;
    display: inline-block;
}

.btn {
    margin: 10px 10px;
}


</style>