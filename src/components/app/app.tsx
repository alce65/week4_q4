import { MenuOption } from '../../types/menu.option';
import { Counter } from '../counter/counter';
import { Footer } from '../footer/footer';
import { Greetings } from '../greetings/greetings';
import { Header } from '../header/header';
import './App.css';

export function App() {
  const title = 'Learning React';
  const menuOptions: MenuOption[] = [
    { label: 'Home', path: '/' },
    { label: 'Productos', path: '/products.html' },
    { label: 'Clientes', path: '/clients.html' },
    { label: 'GoT', path: '/got.html' },
    { label: 'ToDo', path: '/todo.html' },
    { label: 'Acerca de', path: '/about.html' },
  ];

  return (
    <div>
      <Header title={title} menuOptions={menuOptions}></Header>
      <p>Hola mundo</p>
      <Counter></Counter>
      <Greetings></Greetings>
      <Footer></Footer>
    </div>
  );
}
