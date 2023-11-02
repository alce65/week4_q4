type Props = {
  selectedItemsNumber: number;
  children: JSX.Element;
};

export function Info({ selectedItemsNumber, children }: Props) {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">{selectedItemsNumber} gentlemen pointing at you</p>
        {children}
      </section>
    </>
  );
}
