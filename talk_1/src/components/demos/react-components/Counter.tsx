import { useState } from 'react';

export default function MissionControl() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: '2rem',
        background: '#1f2937',
        borderRadius: '8px',
        border: '2px solid #38bdf8',
        textAlign: 'center',
      }}
    >
      <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>
        React Mission Control
      </h3>
      <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#38bdf8' }}>
        {count}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        <button
          type='button'
          onClick={() => setCount((c) => c - 1)}
          style={{
            padding: '0.5rem 1rem',
            background: '#374151',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          - Thrust
        </button>
        <button
          type='button'
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: '0.5rem 1rem',
            background: '#38bdf8',
            color: '#0b0d17',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          + Thrust
        </button>
      </div>
    </div>
  );
}
