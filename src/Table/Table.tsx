import React from 'react';
import { ButtonFull } from '../ButtonFull/ButtonFull';
import { Button } from '../Button/Button';
import { ObjetInTable } from './ObjetInTable';
import { allContext } from '../Context/allContext';
import './Table.css'

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
          {table.map((width: ObjetInTable[]) => 
            <div key={Math.random()} className='row'>
                {width.map((item: ObjetInTable) => (width.indexOf(item) !== currentIndex)
                  ? (<ButtonFull
                      key={Math.random()}
                      item={item}
                    />
                    )
                  : (<Button
                      key={Math.random()}
                      item={item}
                    />
                    )
                  )
                }
              </div>
            )
          }
          <div className='summ'>
            {summ.map((s: number) =>
              <button
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
          {round.map((r: number) => 
            <button 
              key={Math.random()}
              className='item item--round'
            >
              {r}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
