import { SyntheticEvent, useState } from 'react';
import './greetings.scss';

export function Greetings() {
  const [user, setUser] = useState('');

  const handleChange = (ev: SyntheticEvent) => {
    setUser((ev.target as HTMLInputElement).value);
  };

  const handleClick = (ev: SyntheticEvent) => {
    const button = ev.target as HTMLButtonElement;
    const input = button.previousElementSibling as HTMLInputElement;
    setUser('');
    input.value = '';
  };

  return (
    <section className="greetings">
      <p>Hola, {user ? user : 'Amigo'}</p>
      <label htmlFor=""></label>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Borrar</button>
    </section>
  );
}
