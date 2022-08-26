import { useState } from "react";

import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Paper, Box } from "@mui/material";
import ItemButton from "../listItem/ItemButton";
import SimpleInput from "./SimpleInput";

function FromContainer({ onDragEnd, items }) {
  const [isDra, setisDra] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, p: 3, minHeight: "500px" }}>
      <Paper sx={{ height: "100%" }} onDragEnd={onDragEnd}>
        <Droppable droppableId="assigned">
          {(provided, snapshot) => (
            <Box ref={provided.innerRef} sx={{ height: "100%" }}>
              {items.assigned.map((item, i) => (
                <Draggable
                  draggableId={item.id.toString()}
                  key={item.id}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <Box
                      setisDra={snapshot.isDragging}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {console.log(snapshot)}
                      {/* <ItemButton name={item.name}></ItemButton> */}
                      {isDra ? (
                        <ItemButton name={item.name}></ItemButton>
                      ) : (
                        <SimpleInput name={item.name} />
                      )}
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Paper>
    </Box>
  );
}

export default FromContainer;
