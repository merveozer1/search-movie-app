import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext(); 

const themes = {
  light: {
    backgroundColor: "bg-light",
    color: "text-dark",
    button: "btn-dark border border-line",
    navbar: "navbar-light bg-light",
  },
  dark: {
    backgroundColor: "bg-black",
    color: "text-warning",
    button: "btn-light",
    navbar: "navbar-dark bg-dark ",
  },
};
function ThemeContextProvider(props) { 
  
  const [themeName, setThemeName] = useState("light");


  useEffect(() => {
    const localThemeName = localStorage.getItem("themeName") 
    ? localStorage.getItem("themeName")
    : localStorage.setItem("themeName", themeName);

    setThemeName(localThemeName);
  }, []) 
  
  useEffect(() => {
    localStorage.setItem("themeName", themeName); 
    const theme = themeName === "light" ? themes.light : themes.dark;
    document.body.className = "";
    document.body.classList.add(theme.backgroundColor, theme.color)
  }, [themeName]) 

  return (
    <ThemeContext.Provider
      value={
        {
          theme:
            themeName === "light"
              ? themes.light
              : themes.dark, 
              setThemeName, //key ve value aynı olduğu için 1 kere yazdım
              themeName
        }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider };