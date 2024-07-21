import React, { useState, useEffect } from "react";
import { AppContainer } from "./App.styles";
import Drawer from "./components/Drawer/Drawer.component";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>("dark");

  const toggleDrawer = () => {
    if (!isTransitioning) {
      setIsOpen(!isOpen);
    }
  };

  const togglePosition = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIsOpen(false);
    }
  };

  const toggleTheme = () => {
    const themeKeys = Object.keys(themes) as Array<keyof typeof themes>;
    const currentThemeIndex = themeKeys.indexOf(currentTheme);
    const nextThemeIndex = (currentThemeIndex + 1) % themeKeys.length;
    setCurrentTheme(themeKeys[nextThemeIndex]);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isOpen && isTransitioning) {
      timer = setTimeout(() => {
        setHidden(true);
        setPosition((prevPosition) => (prevPosition === "right" ? "left" : "right"));
      }, 400);

      const reopenTimer = setTimeout(() => {
        setHidden(false);
      }, 500);

      const finalReopenTimer = setTimeout(() => {
        setIsOpen(true);
        setIsTransitioning(false);
      }, 600);

      return () => {
        clearTimeout(timer);
        clearTimeout(reopenTimer);
        clearTimeout(finalReopenTimer);
      };
    }
  }, [isOpen, isTransitioning]);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <button onClick={toggleTheme}>Toggle Theme</button>
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
          </Drawer>
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
