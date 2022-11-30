<script>
  import { onMount } from 'svelte';
  import { fade, fly, scale } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { quartIn } from 'svelte/easing'
  import questionDefalut from "/src/static/quiz_kor_history.json";
  import InputSection from "./InputSection.svelte";
  import ResultSection from "./ResultSection.svelte";
  import PlayGuide from "./PlayGuide.svelte";
  import NextBtns from "./NextBtns.svelte";

  export let quizdata = questionDefalut;
  export let is_game_mode = true;
  let is_show_playguide = false;

  const quiz_title = quizdata["title"]
  const quiz_intro = quizdata["intro"]
  const play_desc = quizdata["play_desc"]
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

  let showAnswer = ""
  let showQuestion = ""
  let showDescription = ""
  
  onMount(() => {
    questionAnswerMap.sort(() => Math.random() - 0.5); //shuffe quiz array
    showAnswer = questionAnswerMap[questionIdx].year;
    showQuestion = questionAnswerMap[questionIdx].question;
    showDescription = questionAnswerMap[questionIdx].description;
    is_show_playguide = true;
	});

  let animatedLife = tweened(life, {
    interpolate: (frm, to) => (t) => Math.floor(frm + (to - frm) * t),
  });
  let lifeAnimationTimeout;
  
  let score_level = "측정중.."

  let last_level_score = 0
  const updateScoreLevel = () => {
    let lv_keys = Object.keys(quizdata["score_level"])

    for (let key of lv_keys){
      let int_key = parseInt(key)
      if (int_key > last_level_score && score >= key) {
        last_level_score = int_key
      }
    }
    score_level = quizdata["score_level"][last_level_score.toString()]
    
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

      if (lifeLost <= 3) {
        score += 2;
      } else if (lifeLost <= 5) {
        score += 1;
      }
    } else { // correct answer
      score += 3;
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
    showQuestion = questionAnswerMap[questionIdx].question;
    showDescription = questionAnswerMap[questionIdx].description;

    clearTimeout(lifeAnimationTimeout);
    animatedLife.set(life);
  };

  const retry = () => {
    questionAnswerMap.sort(() => Math.random() - 0.5);
    questionIdx = 0;
    showAnswer = questionAnswerMap[questionIdx].year;
    showQuestion = questionAnswerMap[questionIdx].question;
    showDescription = questionAnswerMap[questionIdx].description;

    score = 0;
    life = 100;
    mode = "input";
    last_level_score = 0

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

  const showPlayGuide = () => {
    is_show_playguide = true
  };

</script>

<h2 class="quiz_title"> {quiz_title} </h2>

<h4 class="quiz_intro"> {@html quiz_intro} </h4>

<br>
{#key score_level} 
  <h3 class="quiz_title" in:scale={{ delay: 1200, duration: 500,  start: 1.5, opacity: 0.0, easing: quartIn}}> ({score_level}) </h3>
{/key} 

<div class="quiz_section justify-center items-center">
  <div class="card justify-center items-center w-80">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="icon_btn_group"> <span class="icon_btn" on:click={()=>{showPlayGuide()}}>🤔</span></div>

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
    <div class="leading-normal" in:fade={{delay: 500, duration: 500}}>
      {@html showQuestion}
    </div>
    {#if mode === "input"}
      <InputSection bind:current {enterGuess} year_range_start={yearRange.start} year_range_end={yearRange.end} />
    {:else if mode === "result"}
      <ResultSection {questionAnswerMap} {current} {questionIdx} {lifeLost}>
        <div class="p-4 m-2 bg-gray-200 border-green-900 rounded-md text-sm break-keep dark:text-black" in:fade={{ delay: 1600, duration: 500 }}>
          {@html showDescription}
        </div>
      </ResultSection>
    {/if}
  
    {#if showNextBtn}
      <NextBtns {isAlive} {nextQuestion} {retry} {score} {score_level}/>
    {/if}
  </div>

</div>

{#if is_show_playguide}
  <PlayGuide bind:is_show_playguide {quiz_title} {quiz_intro} {play_desc}>
  
  </PlayGuide>
{/if}


<style>
  .icon_btn_group{
    text-align: right;
    width: 100%;
    height: 0px;
    opacity: 50%;
  }
  .icon_btn {
    cursor: pointer;
  }
  .quiz_title {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }

  .quiz_intro {
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    width: 50%;
    margin : 0 25%;
  }

  .quiz_section {
    display: flex;
  }
  .card {
    margin: 10px;
    padding: 10px 20px;
    line-height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: 1s;
  }
</style>
