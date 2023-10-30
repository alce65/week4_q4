import { MenuOption } from '../../types/menu.option';
import { Menu } from '../menu/menu';
import './header.scss';

type Props = {
  title: string;
  menuOptions: MenuOption[];
};
export function Header({ title, menuOptions }: Props) {
  return (
    <header>
      <h1>{title}</h1>
      <Menu options={menuOptions}></Menu>
    </header>
  );
}

// export class Headerx {
//   options: MenuOption[];

//   render() {
//     super.render();
//     const elements = [new Menu('header', this.options)];
//     console.log('Header', elements);
//   }

//   createTemplate() {
//     return `
//     <header>
//       <h1>Learning Typescript</h1>

//     </header>
//     `;
//   }
// }
