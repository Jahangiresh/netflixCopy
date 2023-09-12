import { Box } from "@mui/material";
import "../../assets/css/header.css";
import NavMenu from "./NavMenu";
const Header = () => {
  return (
    <Box className="header">
      <NavMenu />
    </Box>
  );
};

export default Header;
