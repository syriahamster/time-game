<script>
    export let current
    export let enterGuess
</script>

<div>
  아마도 <b>{current}</b> 년?
</div>

<input
    type="range"
    min="1900"
    max="2022"
    bind:value={current}
    class="slider"
    id="myRange"
    style="width: 300px;"
/>

<slot>

</slot>

<div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      on:click={enterGuess}
    >
      확인
    </button>
</div>