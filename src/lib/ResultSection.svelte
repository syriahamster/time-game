<script>
    import { fade } from 'svelte/transition';

    export let questionAnswerMap
    export let current
    export let questionIdx
    export let lifeLost
</script>

<div>
    당신의 선택 <b>{current}</b>년 - <span in:fade="{{delay:0, duration:500}}">정답 <b>{questionAnswerMap[questionIdx].year}</b>년</span>
</div>
<div in:fade="{{delay:800, duration:500}}">
    {#if current === questionAnswerMap[questionIdx].year}
        정답입니다!
    {:else}
        틀렸습니다! (<b class="red">{lifeLost}</b>년 차이)
    {/if}
</div>

<slot>

</slot>


<style>
.red {
    color:red;
}
</style>