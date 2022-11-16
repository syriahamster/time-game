<script>
    import { fade } from 'svelte/transition';
    export let isAlive
    export let nextQuestion
    export let retry
</script>

<div in:fade="{{delay:2400, duration:500}}">
    {#if isAlive()}
        <button class="btn btn-outline" on:click={() => nextQuestion()}
            >다음문제</button
        >

    {:else}
        <div>게임이 끝났습니다</div>
        <button class="btn btn-outline" on:click={() => retry()}
            >다시하기</button
        >
    {/if}
</div>