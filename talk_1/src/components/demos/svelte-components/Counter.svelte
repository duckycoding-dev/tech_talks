<script>
  let count = $state(0);

  function increment() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }
</script>

<div class="card svelte-card">
  <div class="header">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
      alt="Svelte"
      width="30"
    />
    <h3>Svelte Island</h3>
  </div>
  <div class="display"> {count} </div>
  <div class="controls">
    <button onclick={decrement}>-</button>
    <button onclick={increment}>+</button>
  </div>
</div>

<style>
  .card {
    padding: 1.5rem;
    background: #1a1a1a;
    border: 2px solid #ff3e00;
    border-radius: 8px;
    text-align: center;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  h3 {
    margin: 0;
    color: #ff3e00;
  }
  .display {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    margin: 1rem 0;
  }
  .controls {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }
  button {
    background: #ff3e00;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
