<script>
    export let current
    export let enterGuess
    export let yearRangeStart = 1900
    export let yearRangeEnd = 2022
</script>

<div>
  아마도 <b>{current}</b> 년?
</div>

<input
    type="range"
    min={yearRangeStart}
    max={yearRangeEnd}
    bind:value={current}
    id="myRange"
    style="width: 100%;"
/>

<slot>

</slot>

<div> <br>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
      on:click={enterGuess}
    >
      확인
    </button>
</div>


<style>

</style>