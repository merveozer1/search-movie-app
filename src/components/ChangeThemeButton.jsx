import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { MdOutlineDarkMode } from "react-icons/md"

function ChangeThemeButton(props) {

  const { theme, setThemeName } = useContext(ThemeContext);
  return (
    <>
      <button
        className={`btn ${theme.button}`}
        onClick={() =>
          setThemeName((prev) =>
          (prev === 'light'
            ? 'dark'
            : 'light'))
        }
      >
        <  MdOutlineDarkMode />
      </button>
    </>
  )
}
export default ChangeThemeButton;