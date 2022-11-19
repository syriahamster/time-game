<script>
    import { fade, scale } from 'svelte/transition';
    import { quartIn } from 'svelte/easing';

    export let questionAnswerMap
    export let current
    export let questionIdx
    export let lifeLost
</script>

<div>
    당신의 선택 <b>{current}</b>년 - <span in:fade={{delay:0, duration:500}}>정답 <b>{questionAnswerMap[questionIdx].year}</b>년</span>
</div>
<div>
    {#if current === questionAnswerMap[questionIdx].year}
        <span in:scale={{delay:800, duration: 500, start: 3, opacity: 0.0, easing: quartIn}}>
            정답입니다!
        </span>
    {:else}
        <span in:fade={{delay:800, duration:500}}>
            틀렸습니다! (<b class="red">{lifeLost}</b>년 차이)
        </span>
    {/if}
</div>

<slot>

</slot>


<style>
.red {
    color:red;
}
</style>