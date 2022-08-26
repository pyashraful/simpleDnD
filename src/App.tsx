import { useState } from "react";
import { Box } from "@mui/system";
import FromContainer from "./components/from/FromContainer";
import SideBare from "./components/SideBar";
import { DragDropContext } from "@hello-pangea/dnd";

const itemsNormal = {
  availableField: [
    {
      id: 1,
      name: "Name",
      fieldType: "text",
    },
    {
      id: 2,
      name: "email",
      fieldType: "email",
    },
    {
      id: 3,
      name: "option",
      filedTypes: "option",
    },
  ],

  assigned: [],
};

// enum filedTypes {
//   "text",
//   "email",
// }

// const fields: { id: number; name: string; fieldType: filedTypes }[] = [
//   {
//     id: 1,
//     name: "Name",
//     fieldType: filedTypes.text,
//   },
//   {
//     id: 2,
//     name: "email",
//     fieldType: filedTypes.email,
//   },
// ];

function App() {
  const [items, setItems] = useState(itemsNormal);
  console.log("🚀 ~ file: App.tsx ~ line 49 ~ App ~ items", items);

  const removeFromList = (list: any, index: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list: any, index: any, element: any) => {
    console.log("🚀 ~ file: App.tsx ~ line 57 ~ addToList ~ list", list);
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  function onDrageEnd(result) {
    console.log("🚀 ~ file: App.tsx ~ line 64 ~ onDrageEnd ~ result", result);
    if (!result.destination) {
      console.log(result);
      return;
    }
    const listCopy: any = { ...items };
    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    setItems(listCopy);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <DragDropContext onDragEnd={onDrageEnd}>
        <SideBare onDragEnd={onDrageEnd} items={items} />
        <FromContainer onDragEnd={onDrageEnd} items={items} />
      </DragDropContext>
    </Box>
  );
}

export default App;
