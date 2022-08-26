import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Paper, Box } from "@mui/material";
import ItemButton from "../listItem/ItemButton";

function FromContainer({ onDragEnd, items }) {
  return (
    <Box sx={{ flexGrow: 1, p: 3, minHeight: "500px" }}>
      <Paper sx={{ height: "100%" }} onDragEnd={onDragEnd}>
        <Droppable droppableId="assigned">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {items.assigned.map((item, i) => (
                <Draggable
                  draggableId={item.id.toString()}
                  key={item.id}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ItemButton name={item.name}></ItemButton>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Paper>
    </Box>
  );
}

export default FromContainer;
