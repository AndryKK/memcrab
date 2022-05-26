import React, { useState } from 'react';
import './App.css';
import { ObjetInTable } from './ObjetInTable.1';

function App() {
  const [mn, setMn] = useState({
    m: 0,
    n: 0
  })

  const [table, setTable] = useState<ObjetInTable[][]>([[]])
  const [summ, setSumm] = useState<any>([])
  const [round, setRound] = useState<any>([])
  const [currentAmount, setCurrentAmount] = useState<number>(-1)
  const [currentIndex, setCurrentIndex] = useState<number>(-1)

  const handleMchangr =(e: any)=> {
    let inputed = e.target.value;
    if (inputed > 100) {
      inputed = 100;
    }

    setMn((current) => {return { n: current.n, m: inputed}})
  }

  const handleNchangr =(e: any)=> {
    let inputed = e.target.value;
    if (inputed > 100) {
      inputed = 100;
    }

    setMn((current) => {return { m: current.m, n: inputed}})
  }

  const currentSum = (all: any, m: number, n: number) => (all.length) ? Array.from({ length: all[0].length }, (_, j) => {
    let itemSum = 0;
    for (let i = 0; i < all.length; i++) {
      itemSum += all[i][j].amount;
    }
    return itemSum
  }) : null

  const currentRound = (all: any, n: number, m: number) => Array.from({ length: m }, (_, j) => {
    return Math.round((all[j].map((x: ObjetInTable) => x.amount).reduce((x: number, y: number) => x + y)) / all[j].length);
  })

  const makeTable = ({m, n}: {m: number, n:number}) => {
    let all: Array<Array<ObjetInTable>> = [];

    for (let i = 0; i < n; i++) {
      const temp = Array.from({ length: m}, () => {
        let random = Math.floor(1/Math.random()*100);
        if (random > 1000) {
          random = Math.round(random / 10);
        }

        if (random > 10000) {
          random = Math.round(random / 100);
        }

        if (random > 100000) {
          random = Math.round(random / 1000);
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

  return (
    <div className="App">
      <div className='control'>
        <span>M</span>
        <input value={mn.m} onChange={handleMchangr} type="number" />
        <span>N</span>
        <input value={mn.n} onChange={handleNchangr} type="number" />
        <button onClick={() => setTableAction()}>Set table</button>
        {table.length > 0 && (table[0].length !== 0) && (<button onClick={() => addNewRow(table)}>Add new row</button>)}
        {table.length > 0 && (table[0].length !== 0) && (<button onClick={() => deletingRow(table)}>Delete row</button>)}
      </div>
      <div className='table__wrap'>
        <div className='table'>
          <div className="main">
            {table.map((width: any) =>
                <div key={Math.random()} className='row'>
                  {width.map((item: ObjetInTable) =>
                    (width.indexOf(item) !== currentIndex) ? 
                      (<button
                        key={Math.random()}
                        className={(Math.round(item.amount / 30) === Math.round(currentAmount / 30)) ? 'item light' : 'item'}
                        onClick={() => clickCount(item, table)}
                        onMouseOver={() => lightCloseAmount(item.amount)}
                        onMouseLeave={() => lightCloseAmount(-1)}
                      >
                        {item.amount}
                      </button>)
                    : (
                      <div key={Math.random()} className='percentage'>
                        <button
                          className='item percentage'
                        >
                          {`${Math.round((item.amount / summ[currentIndex]) * 100)}%`}
                        </button>
                        <div className="percentage--background" style={{"width": `${((item.amount / summ[currentIndex]) * 100)}%` }}></div>
                      </div>
                    )
                  )}
                </div>
                )}
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
                <button key={Math.random()} className='item item--round'>
                  {r}
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

