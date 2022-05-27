import React, { Dispatch } from "react";
import { ObjetInTable } from "../Table/ObjetInTable";

export interface allContextType {
  ContextMn: {
    mn: {
      m: number;
      n: number;
    };

    setMn: Dispatch<React.SetStateAction<{
      m: number;
      n: number;
    }>>;
  };

  ContexTable: {
    table: ObjetInTable[][];
    setTable: Dispatch<React.SetStateAction<ObjetInTable[][]>>;
  };

  ContextSumm: {
    summ: number[];
    setSumm: Dispatch<React.SetStateAction<number[]>>;
  };

  ContextRound: {
    round: number[];
    setRound: Dispatch<React.SetStateAction<number[]>>;
  };

  ContextCurrentAmount: {
    currentAmount: number;
    setCurrentAmount: Dispatch<React.SetStateAction<number>>;
  };

  ContextCurrentIndex: {
    currentIndex: number;
    setCurrentIndex: Dispatch<React.SetStateAction<number>>;
  };

  ContextFunctions: {
    handleMchangr: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNchangr: (e: React.ChangeEvent<HTMLInputElement>) => void;
    currentSum: (all: ObjetInTable[][], m: number, n: number) => number[] | [];
    currentRound: (all: ObjetInTable[][], n: number, m: number) => number[] | [];
    makeTable: ({ m, n }: { m: number; n: number; }) => {};
    setTableAction: () => void;
    clickCount: (item: ObjetInTable, table: ObjetInTable[][]) => void;
    addNewRow: (table: ObjetInTable[][]) => void;
    deletingRow: (table: ObjetInTable[][]) => void;
    convertRowToPercentage: (n: number) => void;
    lightCloseAmount: (amaunt: number) => void;
  };
}
