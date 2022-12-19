<script>
    import Test from "./Test.svelte";
    
    export let TestData
    let test_mode=false

</script>


{#if test_mode}
    <Test {TestData}>

    </Test>
    <button class="btn" on:click={()=>{test_mode=!test_mode}}>go back</button>
{:else}
    MBTI 테스트를 시작합니다. <br>
    <button class="btn" on:click={()=>{test_mode=!test_mode}}>start!</button>
    <hr><br>
    <pre>
        {JSON.stringify(TestData,null," ")}
    </pre>
    
{/if}


<style>

</style>