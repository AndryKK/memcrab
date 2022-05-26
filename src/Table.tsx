import React from 'react';
import { ButtonFull } from './ButtonFull';
import { Button } from './Button';
import { ObjetInTable } from './ObjetInTable';
import { allContext } from './Context';

export const Table = () => {


    const {
      ContexTable,
      ContextSumm,
      ContextRound,
      ContextCurrentIndex,
      ContextFunctions
    } = React.useContext(allContext);
  
    const { table } = ContexTable;
    const { summ } = ContextSumm;
    const { round } = ContextRound;
    const { currentIndex } = ContextCurrentIndex;
  
    const {
      convertRowToPercentage,
    } = ContextFunctions;

  return (
    <div className='table__wrap'>
      <div className='table'>
        <div className="main">
          {table.map((width: any) => <div key={Math.random()} className='row'>
            {width.map((item: ObjetInTable) => (width.indexOf(item) !== currentIndex) ?
              (<ButtonFull
                item={item}
              />)
              : (
                <Button
                  item={item}
                />
              )
            )}
          </div>
          )}
          <div className='summ'>
            {summ.map((s: number) => <button
              key={Math.random()}
              className='item item--summ'
              onMouseOver={() => convertRowToPercentage(summ.indexOf(s))}
              onMouseLeave={() => convertRowToPercentage(-1)}
            >
              {s}
            </button>
            )}
          </div>
        </div>
        <div className="round">
          {round.map((r: number) => <button key={Math.random()} className='item item--round'>
            {r}
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

// interface TableProps {
//   table: ObjetInTable[][];
//   currentIndex: number;
//   currentAmount: number;
//   clickCount: (item: ObjetInTable, table: ObjetInTable[][]) => void;
//   lightCloseAmount: (n: number) => void;
//   summ: number[];
//   convertRowToPercentage: (n: number) => void;
//   round: number[];
// }

// export const Table = (
//   { table, currentIndex, currentAmount, clickCount, lightCloseAmount, summ, convertRowToPercentage, round
//   }: TableProps) => {

//   return (
//     <div className='table__wrap'>
//       <div className='table'>
//         <div className="main">
//           {table.map((width: any) => <div key={Math.random()} className='row'>
//             {width.map((item: ObjetInTable) => (width.indexOf(item) !== currentIndex) ?
//               (<ButtonFull
//                   currentAmount={currentAmount}
//                   item={item}
//                   clickCount={clickCount}
//                   lightCloseAmount={lightCloseAmount}
//                   table={table}
//               />)
//               : (
//                 <Button
//                   item={item}
//                   summ={summ}
//                   currentIndex={currentIndex}
//                 />
//               )
//             )}
//           </div>
//           )}
//           <div className='summ'>
//             {summ.map((s: number) => <button
//               key={Math.random()}
//               className='item item--summ'
//               onMouseOver={() => convertRowToPercentage(summ.indexOf(s))}
//               onMouseLeave={() => convertRowToPercentage(-1)}
//             >
//               {s}
//             </button>
//             )}
//           </div>
//         </div>
//         <div className="round">
//           {round.map((r: number) => <button key={Math.random()} className='item item--round'>
//             {r}
//           </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
