<script>
  import { fade } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import questionDefalut from "../static/quiz_kor_history.json";
  import InputSection from "./InputSection.svelte";
  import ResultSection from "./ResultSection.svelte";
  import NextBtns from "./NextBtns.svelte";

  export let quizdata = questionDefalut;
  export let is_game_mode = true;

  let questionJson = quizdata;

  let score = 0;
  let life = 100;
  let lifeLost = 0;
  let current = 1900;

  let mode = "input"; //input, result
  let showNextBtn = false;
  let questionIdx = 0;

  const questionAnswerMap = questionJson["question_list"];

  questionAnswerMap.sort(() => Math.random() - 0.5); //shuffe quiz array
  let showAnswer = questionAnswerMap[questionIdx].year;

  let animatedLife = tweened(life, {
    interpolate: (frm, to) => (t) => Math.floor(frm + (to - frm) * t),
  });
  let lifeAnimationTimeout;

  const enterGuess = () => {
    if (current !== questionAnswerMap[questionIdx].year) {
      lifeLost = Math.abs(current - showAnswer);
      life = Math.max(0, life - lifeLost);

      lifeAnimationTimeout = setTimeout(() => {
        animatedLife.set(life),
          {
            duration: lifeLost * 50,
          };
      }, 2000);
    }

    if (life >= 0) {
      score += 1;
    }
    mode = "result";
    showNextBtn = true;
  };

  const nextQuestion = () => {
    questionIdx += 1;
    mode = "input";
    showNextBtn = false;
    showAnswer = questionAnswerMap[questionIdx].year;

    clearTimeout(lifeAnimationTimeout);
    animatedLife.set(life);
  };

  const retry = () => {
    questionAnswerMap.sort(() => Math.random() - 0.5);
    questionIdx = 0;
    showAnswer = questionAnswerMap[questionIdx].year;
    score = 0;
    life = 100;
    mode = "input";

    showNextBtn = false;
    animatedLife.set(life),
      {
        duration: 100 * 50,
      };
  };

  const isAlive = () => {
    return life > 0 && questionAnswerMap.length - 1 > questionIdx;
  };
</script>

<div class="card">
  <div class="text-xl font-bold">
    현재점수:{score}, 남은 생명:{$animatedLife}
  </div>
  <div>
    문제{questionIdx + 1}) {@html questionAnswerMap[questionIdx].question}
  </div>

  {#if mode === "input"}
    <InputSection bind:current {enterGuess} />
  {:else if mode === "result"}
    <ResultSection {questionAnswerMap} {current} {questionIdx} {lifeLost}>
      <div class="info m-2" in:fade={{ delay: 1600, duration: 500 }}>
        정보 : {questionAnswerMap[questionIdx].description}
      </div>
    </ResultSection>
  {/if}

  {#if showNextBtn}
    <NextBtns {isAlive} {nextQuestion} {retry} />
  {/if}
</div>

<button
  on:click={() => {
    is_game_mode = false;
  }}
>
  메인으로
</button>

<style>
  .card {
    padding: 30px 30px;
    margin: 10px;
    line-height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: 1s;
  }

  .info {
    padding: 0px 10px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.3);
  }
</style>
