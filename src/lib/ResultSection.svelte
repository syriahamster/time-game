<script>
    export let questionAnswerMap
    export let current
    export let questionIdx
</script>

<div>
    {#if current === questionAnswerMap[questionIdx].year}
        정답입니다!
    {:else}
        틀렸습니다!
    {/if}
</div>
<div>
    정답: {questionAnswerMap[questionIdx].year}년
</div>

<slot>

</slot>
