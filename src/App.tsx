import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ItemList } from "./components/ListItem";
import { AddTask } from "./components/AddTask";

//import { Container } from "./App.styles";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Eat chocolate", done: false },
    { id: 2, name: "Drink water", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const updateStatus = (id: number, status: boolean) => {
    let newList = [...list];
    for (let task in newList) {
      if (newList[task].id === id) {
        newList[task].done = status;
      }
    }
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Title>Tasks List</C.Title>
        {/* Area to add task  */}
        <AddTask onEnter={handleAddTask} />
        {/* Tasks List   */}
        {list.map((item, idx) => (
          <ItemList key={idx} item={item} onChange={updateStatus} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
