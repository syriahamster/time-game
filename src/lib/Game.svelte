<script>
  let score = 0;
  let life = 100;
  let current = 1900;

  let mode = "input"; //input, result
  let showAnswer = 1945;
  const questionAnswerMap = [
    {
      q: "한국이 일본으로부터 독립한 년도는?",
      a: 1945,
      d: "1945년 8월 15일 대한민국은 독립하였다.",
    },
    {
      q: "한국전쟁이 발발한 년도는?",
      a: 1950,
      d: "1950년 6월 25일 북한이 남침을 시작하며 전쟁이 시작되었다",
    },
    {
      q: "일제강점기가 시작된 년도는?",
      a: 1910,
      d: "1910년 8월 29일 한일 병합 조약에 의거 한국이 일본에 강제 병합되었다",
    },
  ];

  let questionIdx = 0;

  const enterGuess = () => {
    if (current === questionAnswerMap[questionIdx].a) {
      score += 1;
    } else {
      life -= Math.abs(current - showAnswer);
    }
    mode = "result";
  };

  const nextQuestion = () => {
    questionIdx += 1;
    mode = "input";
  };

  const retry = () => {
    questionIdx = 0;
    score = 0;
    life = 100;
    mode = "input";
  };

  const isAlive = () => {
    return life > 0 && questionAnswerMap.length - 1 > questionIdx;
  };
</script>

<div>현재점수:{score}, 남은 생명:{life}</div>
<div>문제{questionIdx + 1}) {questionAnswerMap[questionIdx].q}</div>
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
    style="width: 300px;"
  />

  <div>
    <input type="button" value="확인" on:click={() => enterGuess()} />
  </div>
{:else if mode === "result"}
  <div>
    {#if current === questionAnswerMap[questionIdx].a}
      정답입니다!
    {:else}
      틀렸습니다!
    {/if}
  </div>
  <div>
    정답: {questionAnswerMap[questionIdx].a}년
  </div>
  <div>
    {questionAnswerMap[questionIdx].d}
  </div>

  {#if isAlive()}
    <div>
      <input type="button" value="다음문제" on:click={() => nextQuestion()} />
    </div>
  {:else}
    <div>게임이 끝났습니다</div>
    <div>
      <input type="button" value="다시하기" on:click={() => retry()} />
    </div>
  {/if}
{/if}
