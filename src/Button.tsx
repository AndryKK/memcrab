import React from 'react';
import { ObjetInTable } from './ObjetInTable';
import { allContext } from "./Context"

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
      <div className="percentage--background" style={{ "width": `${((item.amount / summ[currentIndex]) * 100)}%` }}></div>
    </div>
  );
};

// interface ButtonProps {
//   item: ObjetInTable;
//   currentIndex: number;
//   summ: number[];
// }


// export const Button = (
//   { item, summ, currentIndex
//   }: ButtonProps) => {
//   return (
//     <div key={Math.random()} className='percentage'>
//       <button
//         className='item percentage'
//       >
//         {`${Math.round((item.amount / summ[currentIndex]) * 100)}%`}
//       </button>
//       <div className="percentage--background" style={{ "width": `${((item.amount / summ[currentIndex]) * 100)}%` }}></div>
//     </div>
//   );
// };