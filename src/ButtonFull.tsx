import React from 'react';
import { allContext } from "./Context"
import { ObjetInTable } from './ObjetInTable';

export const ButtonFull = ({item}:{item: ObjetInTable}) => {
    const {
      ContexTable,
      ContextCurrentAmount,
      ContextFunctions
    } = React.useContext(allContext);

    const { table } = ContexTable;
    const { currentAmount } = ContextCurrentAmount;
    const {
      clickCount,
      lightCloseAmount
    } = ContextFunctions;

  return (
    <button
      key={Math.random()}
      className={
        (Math.round(item.amount / 30) === Math.round(currentAmount / 30))
        ? 'item light'
        : 'item'
      }
      onClick={() => clickCount(item, table)}
      onMouseOver={() => lightCloseAmount(item.amount)}
      onMouseLeave={() => lightCloseAmount(-1)}
    >
      {item.amount}
    </button>
  );
};