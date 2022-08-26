import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ItemButton from "./listItem/ItemButton";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "myProp",
})<{ myProp?: boolean; color?: string }>(({ theme, myProp, color }) => ({
  backgroundColor: myProp ? "aliceblue" : "red",
  color,

  padding: theme.spacing(1),
}));

enum filedTypes {
  "text",
  "email",
}

const fields: { id: number; name: string; fieldType: filedTypes }[] = [
  {
    id: 1,
    name: "Name",
    fieldType: filedTypes.text,
  },
  {
    id: 2,
    name: "email",
    fieldType: filedTypes.email,
  },
];

const arr = new Array(20).fill(0);

export default function SideBar({ onDragEnd, items }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "240px",
        flexShrink: 0,
      }}
    >
      <Box
        sx={{ width: 240, display: "flex", flexDirection: "column" }}
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId="availableField">
          {(provided, snapshot) => (
            <StyledBox
              color={`${snapshot.isDraggingOver ? "red" : "green"}`}
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="h-screen"
            >
              <div>
                {items.availableField.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={i}
                  >
                    {(provider, snapshot) => (
                      <Box
                        ref={provider.innerRef}
                        {...provider.draggableProps}
                        {...provider.dragHandleProps}
                      >
                        <ItemButton name={item.name}></ItemButton>
                      </Box>
                    )}
                  </Draggable>

                  // <ItemButton key={i} name="hello"></ItemButton>
                ))}
                {provided.placeholder}
              </div>
            </StyledBox>
          )}
        </Droppable>
      </Box>
    </Drawer>
  );
}
