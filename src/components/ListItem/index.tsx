import { useState } from "react";
import * as S from "./styles";
import { Item } from "../../types/Item"; // Item types

// Typescript creation 'props'
type Props = {
  item: Item;
};

export const ItemList = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  return (
    <S.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </S.Container>
  );
};
