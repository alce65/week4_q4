type Props = {
  selectAllGentleman: () => void;
};

export function Button({ selectAllGentleman }: Props) {
  return (
    <>
      <button
        className="button button--select"
        onClick={() => selectAllGentleman()}
      >
        Select all
      </button>
    </>
  );
}
