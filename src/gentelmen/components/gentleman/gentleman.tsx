import { GentlemanStructure } from '../../models/gentleman';

type Props = {
  gentleman: GentlemanStructure;
  deleteGentleman: (id: GentlemanStructure['id']) => void;
  updateGentleman: (gentleman: GentlemanStructure) => void;
};
export function Gentleman({
  gentleman,
  deleteGentleman,
  updateGentleman,
}: Props) {
  const handleClickDelete = () => {
    deleteGentleman(gentleman.id);
  };

  const handleClickSelect = () => {
    gentleman.selected = !gentleman.selected;
    updateGentleman(gentleman);
  };

  return (
    <li
      key={gentleman.id}
      className={`gentleman 
    ${gentleman.selected && 'selected'}`}
    >
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={gentleman.picture}
          alt={gentleman.alternativeText}
        />
        <span className="gentleman__initial">
          {gentleman.picture[0].toUpperCase()}
        </span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gentleman.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {gentleman.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>{' '}
            {gentleman.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{' '}
            {gentleman.twitter}
          </li>
        </ul>
      </div>
      <i
        role="button"
        className="icon gentleman__icon fas fa-check"
        onClick={handleClickSelect}
      ></i>
      <i
        role="button"
        className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        onClick={handleClickDelete}
      ></i>
    </li>
  );
}
