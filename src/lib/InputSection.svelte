<script>
    export let current
    export let enterGuess
    export let year_range_start = 1900
    export let year_range_end = 2022
</script>

<div>
  아마도 <b>{current}</b> 년?
</div>

<input
    type="range"
    min={year_range_start}
    max={year_range_end}
    bind:value={current}
    class="range"
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