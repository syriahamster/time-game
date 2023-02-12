<script>
    import Test from "./Test.svelte";
    import Result from "./Result.svelte";
    import PlayGuide from "$lib/PlayGuide.svelte";
    
    export let TestData
    let isShowPlayguide = true
    let mode = "main"
    let Answers = {}

    const resetData = () => {
        Answers = {}
    }
    
</script>

{#if isShowPlayguide}
    <PlayGuide bind:isShowPlayguide quizTitle={TestData.title} quizIntro={TestData.intro} play_desc={TestData.play_desc}>
    
    </PlayGuide>
{/if}

{#if mode=="main"}
    MBTI 테스트를 시작합니다. <br>
    <button class="btn" on:click={()=>{mode="test"}}>start!</button>
    <hr><br>
    <!-- <pre>
        {JSON.stringify(TestData,null," ")}
    </pre> -->

{:else if mode=="test"}
    <Test bind:mode
          bind:Answers
          {TestData}
          >

    </Test>
    <button class="btn" on:click={()=>{mode="main"; resetData()}}>go back</button>

{:else if mode=="result"}
    <Result {Answers}
            {TestData}>

    </Result>    
    <button class="btn" on:click={()=>{mode="main"; resetData()}}>go back</button>

{:else}

-
{/if}



<style>

</style>