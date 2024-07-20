import React from "react";
import { DrawerWrapper, DrawerContent, MenuButton } from "./Drawer.styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Drawer = ({
  isOpen,
  toggleDrawer,
  position = "left",
  width = "18rem",
  children,
}) => {
  return (
    <DrawerWrapper isOpen={isOpen} width={width} className={position}>
      <DrawerContent>
        <MenuButton onClick={toggleDrawer} className={position}>
          <MenuRoundedIcon fontSize="large" />
        </MenuButton>
        {children}
      </DrawerContent>
    </DrawerWrapper>
  );
};

export default Drawer;
