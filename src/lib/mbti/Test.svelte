<script>
    export let TestData

</script>

{#each TestData.question_list as q_item, idx}
    <span>{idx}. {q_item.q_title}</span><br>
    <span>{q_item.q_contents}</span><br>
    {#each Object.entries(q_item.answer) as [key, val], idx}
        <span class="btn"> {key}: {val}</span> &nbsp;
    {/each}
    <hr>
{/each}

