<script>
  let count = 0;

  const increment = () => {
    count += 1;
  };

  let isDone = false;
  const toggle = () => {
    isDone = !isDone;
    console.log(isDone);
  };

  let doneList = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  const toggleDone = (index) => {
    doneList[index] = !doneList[index];
    console.log(doneList);
  };
</script>

<button on:click={increment}>
  count is {count}
</button>

{#if isDone}
  <p>Done!</p>
{:else}
  <p>Not done yet</p>
{/if}
<input on:click={toggle} type="checkbox" value={isDone} />

{#each doneList as done, index}
  <input on:click={() => toggleDone(index)} type="checkbox" value={done} />
{/each}

