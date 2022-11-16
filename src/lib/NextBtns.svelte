<script>
    export let isAlive
    export let nextQuestion
    export let retry
</script>

{#if isAlive()}
<div>
  <button class="btn btn-outline" on:click={() => nextQuestion()}
    >다음문제</button
  >
</div>
{:else}
<div>게임이 끝났습니다</div>
<div>
  <button class="btn btn-outline" on:click={() => retry()}
    >다시하기</button
  >
</div>
{/if}