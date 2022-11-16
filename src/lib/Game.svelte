<script>
  let current = 1900;
  let mode = "input"; //input, result
  let showAnswer = 1945;

  const onEnterHandler = (nextmode) => {
    mode = nextmode;
  };
</script>

<div>한국이 일본으로부터 독립한 년도는?</div>
<div>
  아마도 {current} 년?
</div>
{#if mode === "input"}
  <input
    type="range"
    min="1900"
    max="2022"
    bind:value={current}
    class="slider"
    id="myRange"
  />

  <div>
    <input
      type="button"
      value="확인"
      on:click={() => onEnterHandler("result")}
    />
  </div>
{:else if mode === "result"}
  {#if current === showAnswer}
    정답입니다!
  {:else}
    틀렸습니다!
  {/if}

  <div>
    <input
      type="button"
      value="다시하기"
      on:click={() => onEnterHandler("input")}
    />
  </div>
{/if}
