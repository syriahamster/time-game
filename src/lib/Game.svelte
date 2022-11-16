<script>
  import questionJson from '../static/questions_kor.json'
  import InputSection from './InputSection.svelte';
  import ResultSection from './ResultSection.svelte';
  import NextBtns from './NextBtns.svelte';

  let score = 0;
  let life = 100;
  let current = 1900;

  let mode = "input"; //input, result
  let showAnswer = 1945;
  const questionAnswerMap = questionJson["question_list"]
  let showNextBtn = false
  let questionIdx = 0;

  const enterGuess = () => {
    if (current === questionAnswerMap[questionIdx].year) {
      score += 1;
    } else {
      life -= Math.abs(current - showAnswer);
    }
    mode = "result";
    showNextBtn = true

  };

  const nextQuestion = () => {
    questionIdx += 1;
    mode = "input";
    showNextBtn = false
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

<div>
  <div class="text-xl font-bold">현재점수:{score}, 남은 생명:{life}</div>
  <div>문제{questionIdx + 1}) {@html questionAnswerMap[questionIdx].question}</div>

  {#if mode === "input"}
    <InputSection bind:current
                  enterGuess={enterGuess} />

  {:else if mode === "result"}
    <ResultSection questionAnswerMap={questionAnswerMap}
                   current={current}
                   questionIdx={questionIdx}>
      <div class='m-2'>
          정보 : {questionAnswerMap[questionIdx].description}
      </div>            
    </ResultSection>
  {/if}
  
  {#if showNextBtn}  
    <NextBtns isAlive={isAlive} 
              nextQuestion={nextQuestion} 
              retry={retry}
              />  
  {/if}

</div>


<style>
.info{
  border-radius: 2px;
  border-width: 2px;
  border-color: rgba(255,255,255,0.5)
}

</style>