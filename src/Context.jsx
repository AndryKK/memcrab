import React, { useState } from "react";

export const allContext = React.createContext({

    mn: {
      m: 5,
      n: 5
    },
    setMn: (x) => {},
    table: [[]],
    setTable: (x) => {},
    summ: [],
    setSumm: (x) => {},
    round: [],
    setRound: (x) => {},
    currentAmount: -1,
    setCurrentAmount: (x) => {},
    currentIndex: -1,
    setCurrentIndex: (x) => {}
})


export const ContextProvaider = ({ children }) => {
  const [mn, setMn] = useState({
    m: 0,
    n: 0
  })
  const [table, setTable] = useState<([[]])
  const [summ, setSumm] = useState([])
  const [round, setRound] = useState([])
  const [currentAmount, setCurrentAmount] = useState(-1)
  const [currentIndex, setCurrentIndex] = useState(-1)

  const contextValue = {
    mn,
    setMn,
    table,
    setTable,
    summ,
    setSumm,
    round,
    setRound,
    currentAmount,
    setCurrentAmount,
    currentIndex,
    setCurrentIndex
  }

  return(
    <allContext.Provider value={contextValue}>
      {children}
    </allContext.Provider>
  )
}