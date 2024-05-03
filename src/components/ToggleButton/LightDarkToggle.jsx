import './ToggleButton.css'; // Import your CSS file
import { useTheme } from '../../context/Context';

const LightDarkToggle=()=> {
   //usecontext here
   const {initialTheme,toggleTheme}=useTheme()

  return (
    <div className='toggle-container'>
    <button
        className="toggle"
        onClick={toggleTheme}
        style={{ background: `${initialTheme === "dark" ? "rgba(255,255,255,1)" : "#333"}` }}
      >
        <div
          className="btn"
          style={{
            marginLeft: `${initialTheme === "dark" ? "45px" : "2px"}`,
            background: `${initialTheme === "dark" ? "#333" : "#fff"}`
          }}
        />
      </button>
      </div>
  )
}

export default LightDarkToggle;
