import './header.scss';

type Props = {
  title: string;
  children: JSX.Element;
};
export function Header({ title, children }: Props) {
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  );
}
