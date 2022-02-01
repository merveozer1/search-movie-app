import React from 'react';
import { Routes, Route } from "react-router-dom"
import { useContext } from "react";
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";
import { ThemeContext } from "./context/ThemeContext";
import { styledComponentTheme } from "./styledComponent";
import { ThemeProvider } from "styled-components";
import { routes } from "./routes"
import { PaginationContextProvider } from "./context/PaginationContext"
import { SearchContextProvider } from './context/SearchContext';

function App() {
  const { themeName } = useContext(ThemeContext);

  return (
    <div className="App ">
      <SearchContextProvider>
        <PaginationContextProvider>
          <ThemeProvider theme={styledComponentTheme[themeName]}>
            <Navbar />
            <div className="container">
              <div className="row ">
                <Routes>
                  {
                    routes.map((item, index) => <Route key={index} path={item.pathname} element={<item.element />} />)
                  }
                </Routes>
              </div>
            </div>
          </ThemeProvider>
        </PaginationContextProvider>
      </SearchContextProvider>
      <Footer />
    </div>
  );
}

export default App;

