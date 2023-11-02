import { MenuOption } from '../../types/menu.option';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import './App.css';
import { AppRoutes } from '../app.routes/app.routes';
import { Menu } from '../menu/menu';

export function App() {
  const title = 'Learning React';
  const menuOptions: MenuOption[] = [
    { label: 'Home', path: '/' },
    { label: 'Productos', path: '/products' },
    { label: 'Gentlemen', path: '/gents' },
    { label: 'GoT', path: '/got' },
    { label: 'ToDo', path: '/todo' },
    { label: 'Acerca de', path: '/about' },
  ];

  return (
    <div>
      <Header title={title}>
        <Menu options={menuOptions}></Menu>
      </Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </div>
  );
}
