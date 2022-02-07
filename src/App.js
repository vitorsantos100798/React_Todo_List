import React from 'react';
import { useState, useEffect } from 'react'
import './list.css';
function App() {
const [lista,setLista] = useState([])
const [novoItem,setNovoItem] = useState("")

useEffect(() =>{
  setLista([])
},[])

  return (
    <div className="container">
      <div className="caixa">
        <p className="setFont">ADICIONE UMA TAREFA</p>
        <input
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          type="text"
          className="Input"
        />
        <button 
        onClick={() => adicionarNovoItem()}
        className="Button2"
        >Adicionar</button>
        <ul>
          {lista.map((item, index) => (
            <li>
              {item}
              <button className="Button"onClick={() => deletarItem(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  function adicionarNovoItem() {
    setLista([...lista,novoItem]);
    setNovoItem("");
  }
  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index,1);
    setLista(tmpArray);
  }
}

export default App;
