import React from 'react';
import { ObjetInTable } from '../Table/ObjetInTable';
import { allContext } from '../Context/allContext';


export const Button = ({item}:{item: ObjetInTable}) => {
  const {
    ContextSumm,
    ContextCurrentIndex,
  } = React.useContext(allContext);
  

  const { summ } = ContextSumm;
  const { currentIndex } = ContextCurrentIndex;


  return (
    <div key={Math.random()} className='percentage'>
      <button
        className='item percentage'
      >
        {`${Math.round((item.amount / summ[currentIndex]) * 100)}%`}
      </button>
      <div 
        className="percentage--background"
        style={{ "width": `${((item.amount / summ[currentIndex]) * 100)}%` }}
      >
      </div>
    </div>
  );
};
