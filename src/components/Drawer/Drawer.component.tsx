import React from "react";
import {
  DrawerWrapper,
  DrawerContent,
  MenuButton,
  SwitchButtonContainer,
} from "./Drawer.styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  togglePosition: () => void;
  position?: "left" | "right";
  width?: string;
  children: React.ReactNode;
  drawerTheme: string;
}

const Drawer = ({
  isOpen,
  toggleDrawer,
  togglePosition,
  position = "left",
  width = "18rem",
  children,
  drawerTheme,
}: DrawerProps) => {
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
        <SwapHorizIcon sx={{ fontSize: 40 }} />
      </SwitchButtonContainer>
    </DrawerWrapper>
  );
};

export default Drawer;
