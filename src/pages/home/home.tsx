import { CounterContext } from '../../components/counter.context/counter.context';
import { Counter } from '../../components/counter/counter';
import { Greetings } from '../../components/greetings/greetings';

export default function HomePage() {
  return (
    <>
      <Greetings></Greetings>
      <Counter></Counter>
      <CounterContext></CounterContext>
      <CounterContext></CounterContext>
    </>
  );
}
