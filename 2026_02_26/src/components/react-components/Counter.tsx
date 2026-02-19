/** @jsxImportSource react */
import { useState } from 'react';

export default function MissionControl() {
  const [count, setCount] = useState(0);
  if (typeof window === 'undefined') {
    console.log(`${Date.now()} - React Counter rendered ⚛️🤖`);
  } else {
    console.log(`${Date.now()} - React Counter hydrated ⚛️💧`);
  }

  return (
    <div
      className='react-card'
      style={{
        padding: '1.5rem',
        background: '#1a1a1a',
        borderRadius: '8px',
        border: '2px solid #61dafb',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
        }}
      >
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          alt='React'
          width='30'
        />
        <h3 style={{ margin: 0, color: '#61dafb' }}>React Island</h3>
      </div>
      <div
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#fff',
          margin: '1rem 0',
        }}
      >
        {count}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
        }}
      >
        <button
          type='button'
          onClick={() => setCount((c) => c - 1)}
          style={{
            padding: '0.5rem 1rem',
            background: '#61dafb',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          -
        </button>
        <button
          type='button'
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: '0.5rem 1rem',
            background: '#61dafb',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
