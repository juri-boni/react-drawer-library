import styled from "styled-components";

export const DrawerWrapper = styled.div`
  position: fixed;
  width: ${(props) => props.width || "30rem"};
  height: 100%;
  background-color: ${(props) =>
    props.theme.colors.drawer
      .background}; // Use the background color from the theme
  transition: transform 0.4s ease;
  z-index: 1000;

  &.right {
    top: 0;
    right: 0;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(75%)"};
  }

  &.left {
    top: 0;
    left: 0;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-75%)"};
  }
`;

export const DrawerContent = styled.div`
  padding: 1.6rem;
  height: 100%;
  overflow-y: auto;
  color: ${(props) =>
    props.theme.colors.drawer.content}; // Use the content color from the theme
`;

export const MenuButton = styled.button`
  position: absolute;
  color: ${(props) => props.theme.colors.drawer.menuButton};
  top: 1rem;
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &.right {
    left: 1rem;
  }

  &.left {
    right: 1rem;
  }

  &:hover {
    transform: scale(1.1);
    color: ${(props) =>
      props.theme.colors.drawer
        .menuButtonHover}; // Use the hover color from the theme
  }
`;

export const SwitchButtonContainer = styled.button`
  position: absolute;
  bottom: 1rem;
  font-size: 4rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.drawer.switchButton};
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &.right {
    left: 1rem;
  }

  &.left {
    right: 1rem;
  }

  &:hover {
    transform: scale(1.1);
    color: ${(props) =>
      props.theme.colors.drawer
        .switchButtonHover}; // Use the hover color from the theme
  }
`;
