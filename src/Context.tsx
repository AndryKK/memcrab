import React, { useState, Dispatch } from "react";
import { ObjetInTable } from "./ObjetInTable";

interface allContextType {
  ContextMn: {
    mn: {
      m: number,
      n: number
    },

    setMn: Dispatch<React.SetStateAction<{
      m: number,
      n: number
    }>>,
  },

  ContexTable: {
    table: ObjetInTable[][], 
    setTable: Dispatch<React.SetStateAction<ObjetInTable[][]>>
  },

  ContextSumm: {
    summ: number[],
    setSumm: Dispatch<React.SetStateAction<number[]>>
  },

  ContextRound: {
    round: number[],
    setRound: Dispatch<React.SetStateAction<number[]>>
  },

  ContextCurrentAmount: {
    currentAmount: number,
    setCurrentAmount: Dispatch<React.SetStateAction<number>>
  },

  ContextCurrentIndex: {
    currentIndex: number,
    setCurrentIndex: Dispatch<React.SetStateAction<number>>
  },

  ContextFunctions: {
    handleMchangr: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleNchangr: (e: React.ChangeEvent<HTMLInputElement>) => void,
    currentSum: (all: any, m: number, n: number) => number[] | [],
    currentRound: (all: any, n: number, m: number) => number[] | [],
    makeTable: ({m, n}: {m: number, n:number}) => {},
    setTableAction: () => void,
    clickCount: (item: ObjetInTable, table: ObjetInTable[][]) => void,
    addNewRow: (table: ObjetInTable[][]) => void,
    deletingRow: (table: ObjetInTable[][]) => void,
    convertRowToPercentage: (n: number) => void,
    lightCloseAmount: (amaunt: number) => void
  }
}

export const allContext = React.createContext<allContextType>({
  ContextMn: {
    mn: {
      m: 0,
      n: 0
    },

    setMn: (a) => {},
  },

  ContexTable: {
    table: [[]],
    setTable: () => {}
  },

  ContextSumm: {
    summ: [],
    setSumm: () => {}
  },

  ContextRound: {
    round: [],
    setRound: () => {}
  },

  ContextCurrentAmount: {
    currentAmount: -1,
    setCurrentAmount: () => {}
  },

  ContextCurrentIndex: {
    currentIndex: -1,
    setCurrentIndex: () => {}
  },

  ContextFunctions: {
    handleMchangr: () => {},
    handleNchangr: () => {},
    currentSum: () => [],
    currentRound: () => [],
    makeTable: () => {return {}},
    setTableAction: () => {},
    clickCount: () => {},
    addNewRow: () => {},
    deletingRow: () => {},
    convertRowToPercentage: () => {},
    lightCloseAmount: () => {}
  }
})


export const ContextProvaider = ({ children }: { children: any }) => {
  const [mn, setMn] = useState({
    m: 0,
    n: 0
  })
  const [table, setTable] = useState<ObjetInTable[][]>([[]])
  const [summ, setSumm] = useState<number[]>([])
  const [round, setRound] = useState<number[]>([])
  const [currentAmount, setCurrentAmount] = useState<number>(-1)
  const [currentIndex, setCurrentIndex] = useState<number>(-1)

  const handleMchangr =(e: React.ChangeEvent<HTMLInputElement>)=> {
    let inputed = +e.target.value;
    if (inputed > 100) {
      inputed = 100;
    }
    console.log(inputed)
    setMn((current) => {return { n: current.n, m: inputed}})
  }

  const handleNchangr =(e: React.ChangeEvent<HTMLInputElement>)=> {
    let inputed = +e.target.value;
    if (inputed > 100) {
      inputed = 100;
    }
    console.log(inputed)
    setMn((current) => {return { m: current.m, n: inputed}})
  }

  const currentSum = (all: any, m: number, n: number) => (all.length) ? Array.from({ length: all[0].length }, (_, j) => {
    let itemSum = 0;
    for (let i = 0; i < all.length; i++) {
      itemSum += all[i][j].amount;
    }
    return itemSum
  }) : [];

  const currentRound = (all: any, n: number, m: number) => Array.from({ length: m }, (_, j) => {
    return Math.round((all[j].map((x: ObjetInTable) => x.amount).reduce((x: number, y: number) => x + y)) / all[j].length);
  })

  const makeTable = ({m, n}: {m: number, n:number}) => {
    let all: Array<Array<ObjetInTable>> = [];

    for (let i = 0; i < n; i++) {
      const temp = Array.from({ length: m}, () => {
        let random = Math.round(1/Math.random()*100);
        if (random > 1000) {
          random = Math.round(random / 10);
          console.log("10");
          
        }

        if (random > 10000) {
          random = Math.round(random / 100);
          console.log("100");
        }

        return {
          id: Math.random(),
          amount: random
        }
      })

      all = [...all, temp]
    }
    if (m  > 0 && n > 0) {
      setSumm(currentSum(all, m, n))
      setRound(currentRound(all, m, n))
    } else {
      setSumm([])
      setRound([])
    }

    return all;
  }

  const setTableAction = () => {
    if (mn.n !== 0 && mn.m !== 0) {
      setTable(makeTable(mn));
    } else {
      setTable([[]])
    }
  }

  const clickCount = (item: ObjetInTable, table: ObjetInTable[][]) => {
    setTable(table
      .map(row => row
        .map(box => (box.id === item.id) ? {...box, amount: box.amount + 1} : box
    )));

    setSumm(currentSum(table, table.length, table[0].length))
    setRound(currentRound(table, table.length, table[0].length))
  }

  const addNewRow = (table: ObjetInTable[][]) => {
      const newItem = () => {
        let random = Math.round(1/Math.random()*100);
        if (random > 1000) {
          random = Math.round(random / 10);
        }

        if (random > 10000) {
          random = Math.round(random / 100);
        }

        return {
          id: Math.random(),
          amount: random
        }
      }

      const newTeble = table.map(item => [...item, newItem()]);

     setTable(newTeble)
     setSumm(currentSum(newTeble, newTeble.length, newTeble[0].length))
     setRound(currentRound(newTeble, newTeble[0].length, newTeble.length))
  }

  const deletingRow = (table: ObjetInTable[][]) => {

      const newTeble = table.map(item => item.slice(0, -1));

     setTable(newTeble)
     setSumm(currentSum(newTeble, newTeble.length, newTeble[0].length))
     setRound(currentRound(newTeble, newTeble[0].length, newTeble.length))
  }

  const convertRowToPercentage = (s: number) => {
    setCurrentIndex(s);
  }

  const lightCloseAmount = (amount: number) => {
    setCurrentAmount(amount);
  }


  const contextValue = {
    ContextMn: {
      mn,
      setMn
    },

    ContexTable: {
      table,
      setTable
    },

    ContextSumm: {
      summ,
      setSumm
    },

    ContextRound: {
      round,
      setRound
    },

    ContextCurrentAmount: {
      currentAmount,
      setCurrentAmount
    },

    ContextCurrentIndex: {
      currentIndex,
      setCurrentIndex
    },

    ContextFunctions: {
      handleMchangr,
      handleNchangr,
      currentSum,
      currentRound,
      makeTable,
      setTableAction,
      clickCount,
      addNewRow,
      deletingRow,
      convertRowToPercentage,
      lightCloseAmount
    }
  }

  return(
    <allContext.Provider value={contextValue}>
      {children}
    </allContext.Provider>
  )
}
