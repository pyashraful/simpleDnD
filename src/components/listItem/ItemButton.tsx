import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledItemButton = styled(Box)({
  height: "100%",
  padding: 10,
  margin: 5,
  borderRadius: 10,
  border: "1px solid #000",
  backgroundColor: "white",
  flexGrow: 1,
  fullWidth: true,
});

type itemtext = {
  name: String;
};

function ItemButton({ name }: itemtext) {
  return <StyledItemButton>{name}</StyledItemButton>;
}

export default ItemButton;
