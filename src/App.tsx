import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import {ItemList} from './components/ListItem'
//import { Container } from "./App.styles"; 

const App = () => {
  
  const [list, useList] = useState<Item[]>([
    {id: 1, name: 'Eat chocolate', done: false},
    {id: 2, name: 'Drink water', done: true},
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Title>Tasks List</C.Title> 
        { /* Area to add task  */}

        { /* Tasks List   */}
        {list.map((item, idx) => (
            <ItemList key={idx} item={item}/>
        ))}
      </C.Area>
    </C.Container> 
  );
}

export default App;