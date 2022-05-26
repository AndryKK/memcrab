import React from 'react';
import { allContext } from "./Context"

export const Controle = () => {
  const {
    ContextMn,
    ContexTable,
    ContextFunctions
  } = React.useContext(allContext);

  const { mn } = ContextMn;
  const { table } = ContexTable;


  const {
    handleMchangr,
    handleNchangr,
    setTableAction,
    addNewRow,
    deletingRow,
  } = ContextFunctions;

  return (
    <div className='control'>
      <span>M</span>
      <input value={mn.m} onChange={handleMchangr} type="number" />
      <span>N</span>
      <input value={mn.n} onChange={handleNchangr} type="number" />
      <button onClick={() => setTableAction()}>Set table</button>
      {table.length > 0 && (table[0].length !== 0) && (<button onClick={() => addNewRow(table)}>Add new row</button>)}
      {table.length > 0 && (table[0].length !== 0) && (<button onClick={() => deletingRow(table)}>Delete row</button>)}
    </div>
  );
};

// interface ControleProps {
//   mn: { m: number; n: number; };
//   handleMchangr: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleNchangr: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   setTableAction: () => void;
//   table: ObjetInTable[][];
//   addNewRow: (table: ObjetInTable[][]) => void;
//   deletingRow: (table: ObjetInTable[][]) => void;
// }


// export const Controle = ({ mn, handleMchangr, handleNchangr, setTableAction, table, addNewRow, deletingRow }: ControleProps) => {
//   return (
//     <div className='control'>
//       <span>M</span>
//       <input value={mn.m} onChange={handleMchangr} type="number" />
//       <span>N</span>
//       <input value={mn.n} onChange={handleNchangr} type="number" />
//       <button onClick={() => setTableAction()}>Set table</button>
//       {table.length > 0 && (table[0].length !== 0) && (<button onClick={() => addNewRow(table)}>Add new row</button>)}
//       {table.length > 0 && (table[0].length !== 0) && (<button onClick={() => deletingRow(table)}>Delete row</button>)}
//     </div>
//   );
// };
