import React from "react";
import { allContextType } from "./allContextType";

export const allContext = React.createContext<allContextType>({
  ContextMn: {
    mn: {
      m: 0,
      n: 0
    },

    setMn: (a) => { },
  },

  ContexTable: {
    table: [[]],
    setTable: () => { }
  },

  ContextSumm: {
    summ: [],
    setSumm: () => { }
  },

  ContextRound: {
    round: [],
    setRound: () => { }
  },

  ContextCurrentAmount: {
    currentAmount: -1,
    setCurrentAmount: () => { }
  },

  ContextCurrentIndex: {
    currentIndex: -1,
    setCurrentIndex: () => { }
  },

  ContextFunctions: {
    handleMchangr: () => { },
    handleNchangr: () => { },
    currentSum: () => [],
    currentRound: () => [],
    makeTable: () => { return {} },
    setTableAction: () => { },
    clickCount: () => { },
    addNewRow: () => { },
    deletingRow: () => { },
    convertRowToPercentage: () => { },
    lightCloseAmount: () => { }
  }
})