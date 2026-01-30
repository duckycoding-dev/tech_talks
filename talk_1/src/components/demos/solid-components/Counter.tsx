/** @jsxImportSource solid-js */
import { createSignal } from 'solid-js';

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div
      class='solid-card'
      style='padding: 1.5rem; background: #1a1a1a; border: 2px solid #2c4f7c; border-radius: 8px; text-align: center;'
    >
      <div style='display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 1rem;'>
        <img
          src='https://www.solidjs.com/img/logo/without-wordmark/logo.svg'
          alt='Solid'
          width='30'
        />
        <h3 style='margin: 0; color: #4483c6;'>SolidJS Island</h3>
      </div>
      <div style='font-size: 2.5rem; font-weight: bold; color: #fff; margin: 1rem 0;'>
        {count()}
      </div>
      <div style='display: flex; gap: 0.5rem; justify-content: center;'>
        <button
          type='button'
          onClick={() => setCount((c) => c - 1)}
          style='background: #4483c6; color: #fff; border: none; padding: 0.5rem 1rem; border-radius: 4px; font-weight: bold; cursor: pointer;'
        >
          -
        </button>
        <button
          type='button'
          onClick={() => setCount((c) => c + 1)}
          style='background: #4483c6; color: #fff; border: none; padding: 0.5rem 1rem; border-radius: 4px; font-weight: bold; cursor: pointer;'
        >
          +
        </button>
      </div>
    </div>
  );
}
