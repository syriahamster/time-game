<script>
    import { fade } from 'svelte/transition';
    import quizKorHistory from '/src/static/quiz_kor_history.json'
    import quizKorTrend from '/src/static/quiz_kor_trend.json'
    import quizWorldHistory from '/src/static/quiz_world_history.json'

    import Game from './Game.svelte';

    let is_game_mode = false
    let quizData = null;

</script>

<!-- <span>game mode : {is_game_mode}</span> -->

<h2 class="service_title">연도 맞추기</h2>
<br>

{#if is_game_mode}
    <div class="quiz_section" in:fade="{{delay:200, duration:500}}">
        <Game bind:is_game_mode
            quizdata={quizData}>
        </Game>
    </div>
{:else}
    <div class="quiz_section" in:fade="{{delay:200, duration:500}}">
        <!-- <button class="btn" on:click={()=>{is_game_mode=!is_game_mode; quizData=quizKorHistory}}>
            한국사 테스트 (근현대)
        </button> -->
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
    
    max-width: 100vw;
    display: inline-block;
}

.btn {
    margin: 10px 10px;
}


</style>