<script>
  import { fade, fly, scale } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { quartIn } from 'svelte/easing'
  import questionDefalut from "/src/static/quiz_kor_history.json";
  import InputSection from "./InputSection.svelte";
  import ResultSection from "./ResultSection.svelte";
  import NextBtns from "./NextBtns.svelte";

  export let quizdata = questionDefalut;
  export let is_game_mode = true;

  const quiz_title = quizdata["title"]
  const yearRange = quizdata["year_range"]
  const questionAnswerMap = quizdata["question_list"];

  let score = 0;
  let life = quizdata["default_life"];
  let lifeLost = 0;
  // let current = 1900;
  let current = Math.ceil((yearRange.start + yearRange.end)/2);

  let mode = "input"; //input, result
  let showNextBtn = false;
  let questionIdx = 0;

  questionAnswerMap.sort(() => Math.random() - 0.5); //shuffe quiz array
  let showAnswer = questionAnswerMap[questionIdx].year;

  let animatedLife = tweened(life, {
    interpolate: (frm, to) => (t) => Math.floor(frm + (to - frm) * t),
  });
  let lifeAnimationTimeout;
 
  let score_level = "측정중.."
  const updateScoreLevel = () => {
    try {
      if (score > 0 && quizdata["score_level"][score.toFixed(0)]){
        score_level = quizdata["score_level"][score.toFixed(0)]
      }
    } catch {
      console.log("skip calculate score_level")      
    }
  }

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
    } else {
      score += 1;
    }

    // if (life >= 0) {
    //   score += 1;
    // }
    mode = "result";
    showNextBtn = true;
    
    updateScoreLevel()

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
    score_level = "측정중.."
  };

  const isAlive = () => {
    return (life > 0 && questionAnswerMap.length - 1 > questionIdx) && (quizdata["quiz_max"] > questionIdx);
  };
</script>

<h2 class="quiz_title"> {quiz_title} </h2>

{#key score_level} 
  <h3 class="quiz_title" in:scale={{ delay: 1200, duration: 500,  start: 1.5, opacity: 0.0, easing: quartIn}}> ({score_level}) </h3>
{/key} 

<div class="card justify-center items-center w-80">
  <div class="text-lg font-bold">
    <span>
      Score 
      {#key score} 
        <!-- <span style="display: inline-block" in:fly={{ y: 10, delay: 500 }}> -->
        <span style="display: inline-block" in:scale={{ delay: 500, duration: 500,  start: 3, opacity: 0.0, easing: quartIn}}>
          {score}
        </span>
      {/key}
    </span>
   <span>
     ❤️x{$animatedLife}
   </span>
  </div>
  <br />
  <div class="text-xl font-bold">
    Quiz {questionIdx+1}.
  </div>
  <div>
   언제일까? {@html questionAnswerMap[questionIdx].question}
  </div>
  {#if mode === "input"}
    <InputSection bind:current {enterGuess} year_range_start={yearRange.start} year_range_end={yearRange.end} />
  {:else if mode === "result"}
    <ResultSection {questionAnswerMap} {current} {questionIdx} {lifeLost}>
      <div class="p-4 m-2 bg-gray-200 border-green-900 rounded-md text-sm" in:fade={{ delay: 1600, duration: 500 }}>
        {@html questionAnswerMap[questionIdx].description}
      </div>
    </ResultSection>
  {/if}

  {#if showNextBtn}
    <NextBtns {isAlive} {nextQuestion} {retry} />
  {/if}
</div>

<style>
  .quiz_title{
    font-size: 20px;
    font-weight: 500;
  }
  .card {
    margin: 10px;
    padding: 10px 20px;
    line-height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: 1s;
  }
</style>
