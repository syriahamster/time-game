<script>
    export let mode = "test"
    export let TestData
    export let Answers = {}

    let itemIdx = 0
    let qList = TestData.question_list
    let maxIdx = qList.length
    let nowQuestion = qList[0]

    const recordAnswer = (key, ans) => {
        if (!Answers.hasOwnProperty(key)){
            Answers[key] = []  
        }
        Answers[key].push(ans[0])
        
        console.log(Answers)

        moveToNextQuestion()
    }

    const moveToNextQuestion = () => {
        
        itemIdx += 1

        if (maxIdx === itemIdx) {
            finishTest()
        } else {
            nowQuestion = qList[itemIdx]
        }

    }
    
    const finishTest = () => {
        mode = "result"
    }



</script>

<div class="card flex justify-center items-center w-80">
    <span>{itemIdx+1}. {nowQuestion.q_title}</span><br>
    <span>{nowQuestion.q_contents}</span><br>
    {#each Object.entries(nowQuestion.answer) as [key, val], idx}
        <span class="btn" on:click={recordAnswer(nowQuestion.qtype, key)}> {key} : {val}</span> &nbsp;
    {/each}

</div>
