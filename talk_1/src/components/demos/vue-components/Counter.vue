<script setup>
  import { ref } from 'vue';

  const count = ref(0);
</script>

<template>
  <div class="card vue-card">
    <div class="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        alt="Vue"
        width="30"
      />
      <h3>Vue Island</h3>
    </div>
    <div class="display"> {{ count }} </div>
    <div class="controls">
      <button @click="count--">-</button>
      <button @click="count++">+</button>
    </div>
  </div>
</template>

<style scoped>
  .card {
    padding: 1.5rem;
    background: #1a1a1a;
    border: 2px solid #41b883;
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
    color: #41b883;
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
    background: #41b883;
    color: #000;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
