import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList ] = useState<Item[]>([
    // { id: 1, name: 'Leite', done: false },
    // { id: 2, name: 'Pão', done: false },
    // { id: 3, name: 'Café', done: true }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name:taskName,
      done: false
    });
    setList(newList);
  }

  // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Compras</C.Header>

        {/* Área de adicionar nova tarefa*/}
        <AddArea onEnter={handleAddTask}/>


        {/* Lista de tarefas*/}
         {list.map((item, index) => (
          <ListItem key={index} item={item}
          onChange={handleTaskChange} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;