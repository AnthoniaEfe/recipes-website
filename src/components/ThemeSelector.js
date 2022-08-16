import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode_icon.svg";

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const themeColors = [
    "#ff5200",
    "#6ab783",
    "#98b9df",
    "#eda3be",
    "#5f2b41",
    "#38395f",
  ];

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggler">
        <img
          src={modeIcon}
          alt=""
          onClick={toggleMode}
          style={{ filter: mode === "light" ? "invert(20%)" : "invert(100%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
