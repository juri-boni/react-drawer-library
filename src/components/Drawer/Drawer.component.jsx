import React from "react";
import {
  DrawerWrapper,
  DrawerContent,
  MenuButton,
  SwitchButtonContainer,
} from "./Drawer.styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import SwitchLeftRoundedIcon from "@mui/icons-material/SwitchLeftRounded";
// import SwitchRightRoundedIcon from "@mui/icons-material/SwitchRightRounded";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const Drawer = ({
  isOpen,
  toggleDrawer,
  togglePosition,
  position = "left",
  width = "18rem",
  children,
  drawerTheme,
}) => {
  return (
    <DrawerWrapper
      isOpen={isOpen}
      width={width}
      className={position}
      drawerTheme={drawerTheme}
    >
      <DrawerContent>
        <MenuButton onClick={toggleDrawer} className={position}>
          <MenuRoundedIcon fontSize="large" />
        </MenuButton>
        {children}
      </DrawerContent>
      <SwitchButtonContainer onClick={togglePosition} className={position}>
        {/* {position === "left" ? (
          <SwitchRightRoundedIcon sx={{ fontSize: 40 }} />
        ) : (
          <SwitchLeftRoundedIcon sx={{ fontSize: 40 }} />
        )} */}
        <SwapHorizIcon sx={{ fontSize: 40 }} />
      </SwitchButtonContainer>
    </DrawerWrapper>
  );
};

export default Drawer;
