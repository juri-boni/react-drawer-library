import React, { useState, useEffect } from "react";
import { AppContainer, Button } from "./App.styles";
import Drawer from "./components/Drawer/Drawer.component";
import { ThemeProvider } from "styled-components";
import { theme, lightTheme, darkTheme } from "./theme";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useState("right");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleDrawer = () => {
    console.log("toggleDrawer called. isTransitioning:", isTransitioning);
    if (!isTransitioning) {
      setIsOpen(!isOpen);
    }
  };

  const togglePosition = () => {
    console.log("togglePosition called. isTransitioning:", isTransitioning);
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIsOpen(false);
    }
  };

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark"); // Toggle theme
  };

  useEffect(() => {
    console.log(
      "useEffect triggered. isOpen:",
      isOpen,
      "isTransitioning:",
      isTransitioning
    );

    let timer;
    if (!isOpen && isTransitioning) {
      console.log("Setting up timers for hiding and transitioning.");

      timer = setTimeout(() => {
        console.log("Hiding Drawer");
        setHidden(true);
        setPosition((prevPosition) => {
          const newPosition = prevPosition === "right" ? "left" : "right";
          console.log("Position changed to:", newPosition);
          return newPosition;
        });
      }, 400); // Matches the transition duration in the Drawer component

      const reopenTimer = setTimeout(() => {
        console.log("Setting hidden to false");
        setHidden(false);
      }, 500); // Slightly after hiding to ensure position change

      const finalReopenTimer = setTimeout(() => {
        console.log("Reopening Drawer");
        setIsOpen(true);
        setIsTransitioning(false);
      }, 600); // Open after hiding with some delay

      return () => {
        console.log("Clearing timers.");
        clearTimeout(timer);
        clearTimeout(reopenTimer);
        clearTimeout(finalReopenTimer);
      };
    }
  }, [isOpen, isTransitioning]);

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        <AppContainer>
          <button onClick={toggleTheme}>Toggle Theme</button>
          {/* <h1>APP CONTAINER</h1> */}
          {/* <Button onClick={toggleDrawer}>Toggle Drawer</Button> */}
          {!hidden && (
            <Drawer
              isOpen={isOpen}
              toggleDrawer={toggleDrawer}
              togglePosition={togglePosition}
              position={position}
              drawerTheme={currentTheme}
            >
              <div>
                <h1>{`This is a ${position} Drawer`}</h1>
                <p>{`This is a ${position} Drawer`}</p>
              </div>
              {/* <Button onClick={togglePosition}>Toggle Position</Button> */}
            </Drawer>
          )}
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
