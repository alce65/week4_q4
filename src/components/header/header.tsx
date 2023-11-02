import { useContext } from 'react';
import './header.scss';
import { AppContext } from '../../context/app.context';

type Props = {
  title: string;
  children: JSX.Element;
};
export function Header({ title, children }: Props) {
  const { count } = useContext(AppContext);

  return (
    <header>
      <h1>
        {title} | {count}
      </h1>
      {children}
    </header>
  );
}
