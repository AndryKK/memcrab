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
