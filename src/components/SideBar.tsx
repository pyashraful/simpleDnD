import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

const arr = new Array(20).fill(0);

export default function SideBar() {
  return (
    <Drawer variant="permanent">
      <Box sx={{ width: 240 }}>
        {arr.map((_, i) => (
          <ListItem key={i}>{`list ${i}`}</ListItem>
        ))}
      </Box>
    </Drawer>
  );
}
