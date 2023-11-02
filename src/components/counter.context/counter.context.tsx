import { useContext, useEffect } from 'react';
import './counter.context.scss';
import { AppContext } from '../../context/app.context';

export const CounterContext = () => {
  console.log('Render Counter');

  const { foo, count, setCount } = useContext(AppContext);

  const initialCounter = 0;

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
      <p>{foo}</p>
    </section>
  );
};
