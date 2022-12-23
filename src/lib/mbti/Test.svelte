<script>
    export let mode = "test"
    export let TestData
    export let Answers = {}

    let item_idx = 0
    let q_list = TestData.question_list
    let max_idx = q_list.length
    let now_question = q_list[0]

    const recordAnswer = (key, ans) => {
        if (!Answers.hasOwnProperty(key)){
            Answers[key] = []  
        }
        Answers[key].push(ans[0])
        
        console.log(Answers)

        moveToNextQuestion()
    }

    const moveToNextQuestion = () => {
        
        item_idx += 1

        if (max_idx === item_idx) {
            finishTest()
        } else {
            now_question = q_list[item_idx]
        }

    }
    
    const finishTest = () => {
        mode = "result"
    }



</script>

<div class="card">
    <span>{item_idx+1}. {now_question.q_title}</span><br>
    <span>{now_question.q_contents}</span><br>
    {#each Object.entries(now_question.answer) as [key, val], idx}
        <span class="btn" on:click={recordAnswer(now_question.qtype, key)}> {key} : {val}</span> &nbsp;
    {/each}

</div>
