import { Info } from '../components/info/info';
import { Gentleman } from '../components/gentleman/gentleman';
import { getGentlemen } from '../services/repo';
import { useEffect, useState } from 'react';
import { GentlemanStructure } from '../models/gentleman';
import { Button } from '../components/button/button';
import { Loading } from '../components/loading/loading';
import './gentlemen.scss';

export default function GentlemenPage() {
  const [gentlemanList, setGentlemanList] = useState<GentlemanStructure[]>([]);
  const [selectedItemsNumber, setSelectedItemsNumber] = useState(0);

  useEffect(() => {
    loadGentlemen();
  }, []);

  useEffect(() => {
    setSelectedItemsNumber(
      gentlemanList.filter((item) => item.selected).length
    );
  }, [gentlemanList]);

  const loadGentlemen = async () => {
    const gentlemen = await getGentlemen();
    setGentlemanList(gentlemen);
  };

  const updateGentleman = (gentleman: GentlemanStructure) => {
    const updatedList = gentlemanList.map((item) =>
      item.id === gentleman.id ? gentleman : item
    );
    setGentlemanList(updatedList);
  };

  const deleteGentleman = (id: GentlemanStructure['id']) => {
    const updatedList = gentlemanList.filter(
      (gentleman) => gentleman.id !== id
    );
    setGentlemanList(updatedList);
  };

  const selectAllGentleman = () => {
    setGentlemanList(
      gentlemanList.map((item) => ({ ...item, selected: true }))
    );
  };

  return (
    <div className="container">
      <Info selectedItemsNumber={selectedItemsNumber}>
        <Button selectAllGentleman={selectAllGentleman}></Button>
      </Info>
      <main className="main">
        {!gentlemanList.length ? (
          <Loading></Loading>
        ) : (
          <ul className="gentlemen">
            {gentlemanList.map((item) => (
              <Gentleman
                key={item.id}
                gentleman={item}
                deleteGentleman={deleteGentleman}
                updateGentleman={updateGentleman}
              ></Gentleman>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
