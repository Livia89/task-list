import { useState, KeyboardEvent } from "react";
import * as S from "./styles";

type Props = {
  onEnter: (task: string) => void;
};

export const AddTask = ({ onEnter }: Props) => {
  const [task, setTask] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && task !== "") {
      onEnter(task);
      setTask("");
    }
  };
  return (
    <S.Container>
      <div className="image">➕</div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task"
        onKeyUp={handleKeyUp}
      />
    </S.Container>
  );
};
