import { useState } from "react";
import * as S from "./styles";
import { Item } from "../../types/Item"; // Item types

// Typescript creation 'props'
type Props = {
  item: Item;
  onChange: (id: number, status: boolean) => void;
};

export const ItemList = ({ item, onChange }: Props) => {
  return (
    <S.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      <label>
        {item.name} {item.done.toString()}
      </label>
    </S.Container>
  );
};
