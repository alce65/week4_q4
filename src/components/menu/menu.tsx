import { MenuOption } from '../../types/menu.option';
import './menu.scss';

type Props = {
  options: MenuOption[];
};
export function Menu({ options }: Props) {
  return (
    <nav>
      <ul>
        {options.map((item) => (
          <li key={item.label}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
