import styled from "styled-components";

export const DrawerWrapper = styled.div`
  position: fixed;
  width: ${(props) => props.width || "30rem"};
  height: 100%;
  background-color: #cc6d77;
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
`;

// export const CloseButton = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   background: none;
//   border: none;
//   font-size: 2.4rem;
//   cursor: pointer;
// `;

export const MenuButton = styled.button`
  position: absolute;
  top: 1rem;
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;

  &.right {
    left: 1rem; /* Position the button on the left side when the drawer is on the right */
  }

  &.left {
    right: 1rem; /* Position the button on the right side when the drawer is on the left */
  }
`;
