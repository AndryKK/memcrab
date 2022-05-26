export const ok = () => {
  
}

// import React, { useState } from "react";
// import { ObjetInTable } from "./ObjetInTable";

// export const allContext = React.createContext({
//   mn: {
//     mn: {
//       m: 0,
//       n: 0
//     },
//     setMn: (a: any) => {}
//   },

//   table: {
//     table: [[]],
//     setTable: (a: any) => {}
//   },

//   summ: {
//     summ: [],
//     setSumm: (a: any) => {}
//   },

//   round: {
//     round: [],
//     setRound: (a: any) => {}
//   },

//   currentAmount: {
//     currentAmount: -1,
//     setCurrentAmount: (a: any) => {}
//   },

//   currentIndex: {
//     currentIndex: -1,
//     setCurrentIndex: (a: any) => {}
//   },

//   finctions: {
//     handleMchangr: (a: any) => {},
//     handleNchangr: (a: any) => {},
//     currentSum: (a: any) => {},
//     currentRound: (a: any) => {},
//     makeTable: (a: any) => {},
//     setTableAction: (a: any) => {},
//     clickCount: (a: any) => {},
//     addNewRow: (a: any) => {},
//     deletingRow: (a: any) => {},
//     convertRowToPercentage: (a: any) => {},
//     lightCloseAmount: (a: any) => {}
//   }
// })


// export const ContextProvaider = ({ children }: { children: any }) => {
//   const [mn, setMn] = useState({
//     m: 0,
//     n: 0
//   })
//   const [table, setTable] = useState<ObjetInTable[][]>([[]])
//   const [summ, setSumm] = useState<any>([])
//   const [round, setRound] = useState<any>([])
//   const [currentAmount, setCurrentAmount] = useState<number>(-1)
//   const [currentIndex, setCurrentIndex] = useState<number>(-1)

//   const handleMchangr =(e: any)=> {
//     let inputed = e.target.value;
//     if (inputed > 100) {
//       inputed = 100;
//     }

//     setMn((current) => {return { n: current.n, m: inputed}})
//   }

//   const handleNchangr =(e: any)=> {
//     let inputed = e.target.value;
//     if (inputed > 100) {
//       inputed = 100;
//     }

//     setMn((current) => {return { m: current.m, n: inputed}})
//   }

//   const currentSum = (all: any, m: number, n: number) => (all.length) ? Array.from({ length: all[0].length }, (_, j) => {
//     let itemSum = 0;
//     for (let i = 0; i < all.length; i++) {
//       itemSum += all[i][j].amount;
//     }
//     return itemSum
//   }) : null

//   const currentRound = (all: any, n: number, m: number) => Array.from({ length: m }, (_, j) => {
//     return Math.round((all[j].map((x: ObjetInTable) => x.amount).reduce((x: number, y: number) => x + y)) / all[j].length);
//   })

//   const makeTable = ({m, n}: {m: number, n:number}) => {
//     let all: Array<Array<ObjetInTable>> = [];

//     for (let i = 0; i < n; i++) {
//       const temp = Array.from({ length: m}, () => {
//         let random = Math.round(1/Math.random()*100);
//         if (random > 1000) {
//           random = Math.round(random / 10);
//           console.log("10");
          
//         }

//         if (random > 10000) {
//           random = Math.round(random / 100);
//           console.log("100");
//         }

//         return {
//           id: Math.random(),
//           amount: random
//         }
//       })

//       all = [...all, temp]
//     }
//     if (m  > 0 && n > 0) {
//       setSumm(currentSum(all, m, n))
//       setRound(currentRound(all, m, n))
//     } else {
//       setSumm([])
//       setRound([])
//     }

//     return all;
//   }

//   const setTableAction = () => {
//     if (mn.n !== 0 && mn.m !== 0) {
//       setTable(makeTable(mn));
//     } else {
//       setTable([[]])
//     }
//   }

//   const clickCount = (item: ObjetInTable, table: ObjetInTable[][]) => {
//     setTable(table
//       .map(row => row
//         .map(box => (box.id === item.id) ? {...box, amount: box.amount + 1} : box
//     )));

//     setSumm(currentSum(table, table.length, table[0].length))
//     setRound(currentRound(table, table.length, table[0].length))
//   }

//   const addNewRow = (table: ObjetInTable[][]) => {
//       const newItem = () => {
//         let random = Math.round(1/Math.random()*100);
//         if (random > 1000) {
//           random = Math.round(random / 10);
//           console.log("10");
          
//         }

//         if (random > 10000) {
//           random = Math.round(random / 100);
//           console.log("100");
//         }

//         return {
//           id: Math.random(),
//           amount: random
//         }
//       }

//       const newTeble = table.map(item => [...item, newItem()]);

//      setTable(newTeble)
//      setSumm(currentSum(newTeble, newTeble.length, newTeble[0].length))
//      setRound(currentRound(newTeble, newTeble[0].length, newTeble.length))
//   }

//   const deletingRow = (table: ObjetInTable[][]) => {

//       const newTeble = table.map(item => item.slice(0, -1));

//      setTable(newTeble)
//      setSumm(currentSum(newTeble, newTeble.length, newTeble[0].length))
//      setRound(currentRound(newTeble, newTeble[0].length, newTeble.length))
//   }

//   const convertRowToPercentage = (s: number) => {
//     setCurrentIndex(s);
//   }

//   const lightCloseAmount = (amount: number) => {
//     setCurrentAmount(amount);
//   }


//   const contextValue = {
//     mn: {
//       mn,
//       setMn
//     },

//     table: {
//       table,
//       setTable
//     },

//     summ: {
//       summ,
//       setSumm
//     },

//     round: {
//       round,
//       setRound
//     },

//     currentAmount: {
//       currentAmount,
//       setCurrentAmount
//     },

//     currentIndex: {
//       currentIndex,
//       setCurrentIndex
//     },

//     finctions: {
//       handleMchangr,
//       handleNchangr,
//       currentSum,
//       currentRound,
//       makeTable,
//       setTableAction,
//       clickCount,
//       addNewRow,
//       deletingRow,
//       convertRowToPercentage,
//       lightCloseAmount
//     }
//   }

//   return(
//     <allContext.Provider value={contextValue}>
//       {children}
//     </allContext.Provider>
//   )
// }