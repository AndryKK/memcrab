import './App.css';
import { Controle } from './Controle/Controle';
import { Table } from './Table/Table';
import { ContextProvaider } from "./Context/Context"


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
