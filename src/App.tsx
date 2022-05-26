import './App.css';
import { Controle } from './Controle';
import { Table } from './Table';
import { ContextProvaider } from "./Context"


function App() {
  return (
    <ContextProvaider>
      <div className="App">
        <Controle 
        />
        <Table/>
      </div>
    </ContextProvaider>
  );
}


export default App;

  // const handleMchangr =(e: React.ChangeEvent<HTMLInputElement>)=> {
  //   let inputed = +e.target.value;
  //   if (inputed > 100) {
  //     inputed = 100;
  //   }

  //   setMn((current) => {return { n: current.n, m: inputed}})
  // }

  // const handleNchangr =(e: React.ChangeEvent<HTMLInputElement>)=> {
  //   let inputed = +e.target.value;
  //   if (inputed > 100) {
  //     inputed = 100;
  //   }

  //   setMn((current) => {return { m: current.m, n: inputed}})
  // }

  // const currentSum = (all: any, m: number, n: number) => (all.length) ? Array.from({ length: all[0].length }, (_, j) => {
  //   let itemSum = 0;
  //   for (let i = 0; i < all.length; i++) {
  //     itemSum += all[i][j].amount;
  //   }
  //   return itemSum
  // }) : null

  // const currentRound = (all: any, n: number, m: number) => Array.from({ length: m }, (_, j) => {
  //   return Math.round((all[j].map((x: ObjetInTable) => x.amount).reduce((x: number, y: number) => x + y)) / all[j].length);
  // })

  // const makeTable = ({m, n}: {m: number, n:number}) => {
  //   let all: Array<Array<ObjetInTable>> = [];

  //   for (let i = 0; i < n; i++) {
  //     const temp = Array.from({ length: m}, () => {
  //       let random = Math.floor(1/Math.random()*100);
  //       if (random > 1000) {
  //         random = Math.round(random / 10);
  //       }

  //       if (random > 10000) {
  //         random = Math.round(random / 100);
  //       }

  //       if (random > 100000) {
  //         random = Math.round(random / 1000);
  //       }

  //       return {
  //         id: Math.random(),
  //         amount: random
  //       }
  //     })

  //     all = [...all, temp]
  //   }
  //   if (m  > 0 && n > 0) {
  //     setSumm(currentSum(all, m, n))
  //     setRound(currentRound(all, m, n))
  //   } else {
  //     setSumm([])
  //     setRound([])
  //   }

  //   return all;
  // }

  // const setTableAction = () => {
  //   if (mn.n !== 0 && mn.m !== 0) {
  //     setTable(makeTable(mn));
  //   } else {
  //     setTable([[]])
  //   }
  // }

  // const clickCount = (item: ObjetInTable, table: ObjetInTable[][]) => {
  //   setTable(table
  //     .map(row => row
  //       .map(box => (box.id === item.id) ? {...box, amount: box.amount + 1} : box
  //   )));

  //   setSumm(currentSum(table, table.length, table[0].length))
  //   setRound(currentRound(table, table.length, table[0].length))
  // }

  // const addNewRow = (table: ObjetInTable[][]) => {
  //     const newItem = () => {
  //       let random = Math.round(1/Math.random()*100);
  //       if (random > 1000) {
  //         random = Math.round(random / 10);
  //         console.log("10");
          
  //       }

  //       if (random > 10000) {
  //         random = Math.round(random / 100);
  //         console.log("100");
  //       }

  //       return {
  //         id: Math.random(),
  //         amount: random
  //       }
  //     }

  //     const newTeble = table.map(item => [...item, newItem()]);

  //    setTable(newTeble)
  //    setSumm(currentSum(newTeble, newTeble.length, newTeble[0].length))
  //    setRound(currentRound(newTeble, newTeble[0].length, newTeble.length))
  // }

  // const deletingRow = (table: ObjetInTable[][]) => {

  //     const newTeble = table.map(item => item.slice(0, -1));

  //    setTable(newTeble)
  //    setSumm(currentSum(newTeble, newTeble.length, newTeble[0].length))
  //    setRound(currentRound(newTeble, newTeble[0].length, newTeble.length))
  // }

  // const convertRowToPercentage = (s: number) => {
  //   setCurrentIndex(s);
  // }

  // const lightCloseAmount = (amount: number) => {
  //   setCurrentAmount(amount);
  // }

  //   return (
//     <ContextProvaider>
//       <div className="App">
//         <Controle 
//           mn={mn}
//           handleMchangr={handleMchangr}
//           handleNchangr={handleNchangr}
//           setTableAction={setTableAction}
//           table={table}
//           addNewRow={addNewRow}
//           deletingRow={deletingRow}
//         />
//         <Table 
//           table={table}
//           currentIndex={currentIndex}
//           currentAmount={currentAmount}
//           clickCount={clickCount}
//           lightCloseAmount={lightCloseAmount}
//           summ={summ}
//           convertRowToPercentage={convertRowToPercentage}
//           round={round}
//         />
//       </div>
//     </ContextProvaider>
//   );
// }