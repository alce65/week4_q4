import { useEffect, useState } from 'react';
import './counter.scss';

export const Counter = () => {
  console.log('Render Counter');
  const initialCounter = 0;
  const [count, setCount] = useState(initialCounter);

  useEffect(() => {
    console.log('First Render Counter');
    console.log('Initial count', initialCounter);
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = (increment: number) => {
    setCount(count + increment);
  };

  return (
    <section className="counter">
      <p>{count}</p>
      <button onClick={() => handleClick(+1)}>+</button>
      <button onClick={() => handleClick(-1)}>-</button>
    </section>
  );
};
